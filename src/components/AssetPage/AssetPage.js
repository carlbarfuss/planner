import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
      incomeCount: '',
      socialSecurity: ''
   };

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
      //this.props.history.push('/expenses')
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
                  <input required placeholder="Current Age" type="number" onChange={(event) => this.handleChange(event, 'age')}></input>
                  </label>
                  <br/>
                  { (this.state.retirement === 'standard') ?
                  ''
                  : <>
                  <label>Target Retirement Age:
                  <input required placeholder="Target Retirment Age" onChange={(event) => this.handleChange(event, 'target_age')}></input>
                  </label>
                  <br/>
                  </>
                  }
               <label>Income Desired at retirement:
               <input required placeholder="Income At Retirement" onChange={(event) => this.handleChange(event, 'desired_income')}></input><br/>
               </label>
               <label> Current Savings:
               <input required placeholder="Current Savings" onChange={(event) => this.handleChange(event, 'current_savings')}></input><br/>
               </label>
               <label> Additional Saved/Month:
                  <input 
                     required
                     placeholder="Additional Saved/Month" 
                     onChange={(event) => this.handleChange(event, 'saved_monthly')}>
                  </input>
               </label>
               <br/>
               <label>
                  Inflation Rate:
                  <select name="inflation" id="inflation" onChange={(event) => this.handleChange(event, 'inflation')}>
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
               <h3>Income Sources in Retirement:</h3>
               <button onClick={(event) => this.addIncome(event)}>+</button> <p>(STRETCH)</p><br/>
               <label>
                     Expected Social Security: 
                     <input 
                        type="number" 
                        placeholder="24000"
                        onChange={(event) => this.handleChange(event, 'socialSecurity')}>
                     </input> <a href="https://www.ssa.gov/OACT/quickcalc/">SS Calculator Link</a>
               </label> 
               <br/>
               <br/>


               <button onClick={(event) => this.submitAssets(event)}>Next</button>                
               </center>
            </form>
         </div>
      );
   }
}

export default connect(mapStoreToProps)(AssetPage);
