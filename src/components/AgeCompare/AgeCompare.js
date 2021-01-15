import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './AgeCompare.css'

let savings = 0;
let yearsUntilRetirement = 0;
let inflation = 0;
let rateOfReturn = 0;
let monthlySavings = 0;
let withdrawlRate = 0;
let age_min = 0;
let age_max = 0;

class AgeCompare extends Component {

   componentDidMount() {
      savings = this.props.store.user.savings;
      yearsUntilRetirement = (this.props.store.user.retirement_age - this.props.store.user.age);
      inflation = this.props.store.user.inflation_rate;
      rateOfReturn = this.props.store.user.rate_of_return;
      monthlySavings = this.props.store.user.saved_monthly;
      withdrawlRate = this.props.store.user.withdrawl_rate;
      age_min = this.props.store.fedDataReducer.age_min;
      age_max = this.props.store.fedDataReducer.age_max;
   }

   render() {
      return (
         <div>
            <h2 className="underline">How do I compare to my peers in my age group? 
            ({this.props.store.fedDataReducer[0]?.age_min}-{this.props.store.fedDataReducer[0]?.age_max})</h2>
            <container className="grid2">
               <div className="card2">Median Savings in my Age Group: <br /><br />${this.props.store.fedDataReducer[0]?.median_savings}</div>
               <div className="card2">Average Savings in my Age Group: <br /><br />${this.props.store.fedDataReducer[0]?.average_savings}</div>
            </container>
         </div>
      );
   }
}

export default connect(mapStoreToProps)(AgeCompare);
