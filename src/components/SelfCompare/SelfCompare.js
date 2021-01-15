import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './SelfCompare.css'

let savings = 0;
let yearsUntilRetirement = 0;
let inflation = 0;
let rateOfReturn = 0;
let monthlySavings = 0;
let withdrawlRate = 0;


let calcReturn = (num) => {
   for (let i=1; i<yearsUntilRetirement; i++) {
      num = (num+(12*monthlySavings))*(1+rateOfReturn/100)
   }
   return parseFloat(num).toFixed(2);
}

let futureIncome = (savings) => {
   return parseFloat(calcReturn(savings) * withdrawlRate / 100).toFixed(2) 
}

let addIncomes = (incomeReducer) => {
   console.log('incomeReducer is:', incomeReducer);
   let total = Number(futureIncome(savings));
   for (let i=0; i<incomeReducer.length; i++){     
      total = total + Number(incomeReducer[i].income_annual_value)
   }
   return parseFloat(total).toFixed(2) 
}

let calcInflation = (num) => {
   for (let i = 1; i < yearsUntilRetirement; i++) {
      num = (num*(1+inflation/100))
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

   componentDidMount(){
      savings = this.props.store.user.savings;
      yearsUntilRetirement = (this.props.store.user.retirement_age - this.props.store.user.age);
      inflation = this.props.store.user.inflation_rate;
      rateOfReturn = this.props.store.user.rate_of_return;
      monthlySavings = this.props.store.user.saved_monthly;
      withdrawlRate = this.props.store.user.withdrawl_rate;
   }

   render() {
      return (
         <div>
            <h2 className="underline">How healthy am I compared to my own goals?</h2>
         <container className="grid">
            <div className="card">% towards goal: <br/><br/> {parseFloat(addIncomes(this.props.store.incomeReducer) / calcInflation(this.props.store.user.target_income) * 100).toFixed(2)}%</div>
            <div className="card">Target Retirement Year: <br/><br/>{new Date().getFullYear() + yearsUntilRetirement}</div>
            <div className="card">Current Savings: <br/><br/> ${parseFloat(savings).toFixed(2)}</div>
            <div className="card">Savings at Retirement: <br/><br/> ${calcReturn(savings)}</div>
            <div className="card">{withdrawlRate}% Withdrawl Rate:  <br/><br/>${futureIncome(savings)}/year from savings</div>
            {this.props.store.incomeReducer.map ( (item) => 
               <div className="card" key={item.id}>{item.income_name}: <br/><br/> {item.income_annual_value}/year</div>
            )}
            <div className="card">Total Retirement Income:  <br/><br/>${addIncomes(this.props.store.incomeReducer)}</div>
            <div className="card">Desired Income(inflation adjusted): <br/><br/> ${calcInflation(this.props.store.user.target_income)}</div>
         </container>
         </div>
      );
   }
}

export default connect(mapStoreToProps)(SelfCompare);
