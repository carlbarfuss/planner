import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './SelfCompare.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

let savings = 0;
let yearsUntilRetirement = 0;
let inflation = 0;
let rateOfReturn = 0;
let monthlySavings = 0;
let withdrawlRate = 0;

//calculates rate of return based on RoR set in the user profile
let calcReturn = (num) => {
   for (let i = 1; i < yearsUntilRetirement; i++) {
      num = (num + (12 * monthlySavings)) * (1 + rateOfReturn / 100)
   }
   return parseFloat(num).toFixed(2);
}
//calculates annual income based on withdrawl rate and savings levels
let futureIncome = (savings) => {
   return parseFloat(calcReturn(savings) * withdrawlRate / 100).toFixed(2)
}

//Sums together income streams to display a single value
let addIncomes = (incomeReducer) => {
   console.log('incomeReducer is:', incomeReducer);
   let total = Number(futureIncome(savings));
   for (let i = 0; i < incomeReducer.length; i++) {
      total = total + Number(incomeReducer[i].income_annual_value)
   }
   return parseFloat(total).toFixed(2)
}

//calculates inflation on a set value over the course of the designated set of years
let calcInflation = (num) => {
   for (let i = 1; i < yearsUntilRetirement; i++) {
      num = (num * (1 + inflation / 100))
   }
   return parseFloat(num).toFixed(2)
}


class SelfCompare extends Component {

   state = {
      savings: '',
      yearsUntilRetirement: 0,
      inflation: '',
      rateOfReturn: '',
      monthlySavings: '',
      withdrawlRate: ''
   }

   componentDidMount() {
      savings = this.props.store.user.savings;
      yearsUntilRetirement = (this.props.store.user.retirement_age - this.props.store.user.age);
      inflation = this.props.store.user.inflation_rate;
      rateOfReturn = this.props.store.user.rate_of_return;
      monthlySavings = this.props.store.user.saved_monthly;
      withdrawlRate = this.props.store.user.withdrawl_rate;
   }

   render() {
      return (
         <div className="formPanel">
            <h2>How healthy am I compared to my own goals?</h2>
            <Card className="card">
               <CardContent>
                  <Typography variant="h6" component="h2">
                     {parseFloat(addIncomes(this.props.store.incomeReducer) / calcInflation(this.props.store.user.target_income) * 100).toFixed(2)}% of goal reached
                  </Typography>
                  <Typography
                     color="textSecondary" gutterBottom>
                     Target Retirement Year: {new Date().getFullYear() + yearsUntilRetirement}
                  </Typography>
               </CardContent>
            </Card>
            <Card className="card">
               <CardContent>
                  <Typography
                     color="textSecondary" gutterBottom>
                     Current Savings: ${parseFloat(savings).toFixed(2)}
                  </Typography>
                  <Typography
                     color="textSecondary" gutterBottom>
                     Savings at Retirement: ${calcReturn(savings)}
                  </Typography>
               </CardContent>
            </Card>
            <Card className="card">
               <CardContent>
                  <Typography
                     color="textSecondary" gutterBottom>
                     Target Income(IA): ${calcInflation(this.props.store.user.target_income)}
                  </Typography>
                  <Typography
                     color="textSecondary" gutterBottom>
                     Calculated Income(IA):  ${addIncomes(this.props.store.incomeReducer)}
                  </Typography>
               </CardContent>
            </Card>
         </div>
      );
   }
}

export default connect(mapStoreToProps)(SelfCompare);
