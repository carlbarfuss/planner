import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import IncomeStream from '../IncomeStream/IncomeStream'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AssetPage extends Component {
   state = {
      retirement: 'standard',
      age: '',
      target_age: 65,
      desired_income: '',
      current_savings: '',
      saved_monthly: '',
      inflation: 1.5,
      withdrawlRate: 4,
      rateOfReturn: 10,
   };

   componentDidMount(){
      this.props.dispatch( {type: 'FETCH_USER' } )
      this.setState({
         age: this.props.store.user.age,
         desired_income: this.props.store.user.target_income,
         current_savings: this.props.store.user.savings,
         saved_monthly: this.props.store.user.saved_monthly,
         inflation: this.props.store.user.inflation_rate,
         withdrawlRate: this.props.store.user.withdrawl_rate,
         rateOfReturn: this.props.store.user.rate_of_return
      })
   }   
   handleChange = (event, input) => {
      this.setState({
         [input]: event.target.value
      })
   } 
   submitAssets = (event) => {
      event.preventDefault();
      console.log('clicked submit');
      this.props.dispatch( {type: "SUBMIT_ASSETS", payload: this.state})
      this.props.history.push('/liabilities')
   }
   addIncome = () => {
      console.log('clicked addIncome');
   }
   render() {
      return (
         <div>
            <form>
            <center>
               <h3>Info Collection:</h3>
               <label>Retirement Type:
                  <select name="retirementType" id="retirementType" onChange={(event) => this.handleChange(event, 'retirement')}>
                     <option value="standard">Standard (65)</option>
                     <option value="early">Early (input target age below)</option>
                     <option value="late">Later (input target age below)</option>
                  </select>
               </label>
                  <br/>
                  <label>Current Age:
                  <input required placeholder="Current Age" type="number" onChange={(event) => this.handleChange(event, 'age')} value={this.state.age}></input>
                  </label>
                  <br/>
                  { (this.state.retirement === 'standard') ?
                  ''
                  : <>
                  <label>Target Retirement Age:
                  <input required placeholder="Target Retirment Age" onChange={(event) => this.handleChange(event, 'target_age')} ></input>
                  </label>
                  <br/>
                  </>
                  }
               <label>Income Desired at retirement(today's dollars):
               <input required placeholder="Income At Retirement" onChange={(event) => this.handleChange(event, 'desired_income')} value={this.state.desired_income}></input><br/>
               </label>
               <label> Current Savings(in retirement accounts):
               <input required placeholder="Current Savings" onChange={(event) => this.handleChange(event, 'current_savings')}
                  value={this.state.current_savings}></input><br/>
               </label>
               <label> Additional Saved/Month:
                  <input 
                     required
                     placeholder="Additional Saved/Month" 
                     onChange={(event) => this.handleChange(event, 'saved_monthly')}
                     value={this.state.saved_monthly}>
                  </input>
               </label>
               <br/>
               <label>
                  Inflation Rate:
                  <select name="inflation" id="inflation" onChange={(event) => this.handleChange(event, 'inflation')} value={this.state.inflation}>
                     <option value="1.5">Standard (1.5%)</option>
                     <option value="2">Federal Reserve Target (2.0%)</option>
                     <option value="3">Higher (3.0%)</option>
                  </select>
               </label>
               <br/>
               <label>
                  Withdrawal Rate:
                  <select name="withdrawl rate" id="waithdrawlRate" onChange={(event) => this.handleChange(event, 'withdrawlRate')}>
                     <option value="4">4% (traditional)</option>
                     <option value="3.5"> 3.5% (safe)</option>
                     <option value="5">5% (aggressive)</option>
                  </select>
               </label>
               <br/>
               <label>
                  Rate of Return:
                  <select name="rateOfReturn" id="rateOfReturn" onChange={(event) => this.handleChange(event, 'rateOfReturn')}>
                     <option value="10">10% (average measured rate)</option>
                     <option value="8">8% (lower than expected)</option>
                  </select>
               </label><br/>
               </center>
            </form>
            <IncomeStream/>
            <center>
            <button onClick={(event) => this.submitAssets(event)}>Next</button>                
            </center>
         </div>
      );
   }
}

export default connect(mapStoreToProps)(AssetPage);
