import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { FormControl } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

class UserInfoForm extends Component {


   state = {
      retirement: 'standard',
      age: this.props.store.user?.age || '',
      target_age: 65,
      desired_income: this.props.store.user?.target_income || '',
      current_savings: this.props.store.user?.savings || '',
      saved_monthly: this.props.store.user?.saved_monthly || '',
      inflation: this.props.store.user.inflation_rate || 1.5,
      withdrawlRate: this.props.store.user.withdrawl_rate || 4,
      rateOfReturn: this.props.store.user.rate_of_return || 10,
   };




   submitAssets = (event) => {
      event.preventDefault();
      this.props.dispatch({ type: "SUBMIT_ASSETS", payload: this.state })
   }
   handleChange = (event, input) => {
      this.setState({
         [input]: event.target.value
      })
   }

   render() {
      return (
         <center>
               <FormControl>
                  <h3>User Info:</h3>
                  <TextField id="outlined-basic" label="Current Age"
                     required placeholder="Current Age" type="number" onChange={(event) => this.handleChange(event, 'age')}
                     value={this.state.age} variant="outlined" />
                  <br />
                  <FormControl />
                  <FormControl>
                     <Select
                        value={this.state.retirement}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={(event) => this.handleChange(event, 'retirement')}
                        variant="outlined"
                     >
                        <MenuItem value="standard">Standard Retirement(65)</MenuItem>
                        <MenuItem value="early">Early Retirement</MenuItem>
                        <MenuItem value="late">Later Retirement</MenuItem>
                     </Select>
                     <FormHelperText>Select Retirement Style (standard/early/late)</FormHelperText>
                  </FormControl>
                  <br />
                  {(this.state.retirement === 'standard') ?
                     ''
                     :
                     <TextField id="standard-basic" label="Target Retirement Age"
                        required placeholder="Current Age" type="number" onChange={(event) => this.handleChange(event, 'target_age')}
                        value={this.state.target_age} variant="outlined" />

                  }
                  <br />
                  <TextField id="standard-basic" label="Income Desired at retirement(today's dollars)"
                     required type="number" onChange={(event) => this.handleChange(event, 'desired_income')}
                     value={this.state.desired_income} variant="outlined" />
                  <FormHelperText>Rule of thumb is about 80% of what you currently use is a good starting point</FormHelperText><br />
                  <TextField id="standard-basic" label="Current Savings(in retirement accounts"
                     required type="number" onChange={(event) => this.handleChange(event, 'current_savings')}
                     value={this.state.current_savings} variant="outlined" />
                  <FormHelperText>Include 401k, Roth IRA, and any other retirement savings platform</FormHelperText><br />
                  <TextField id="standard-basic" label="Additional Saved/Month:"
                     required type="number" onChange={(event) => this.handleChange(event, 'saved_monthly')}
                     value={this.state.saved_monthly} variant="outlined" /> <br />
                  <FormControl>
                     <Select
                        value={this.state.inflation}
                        labelId="demo-simple-select-outlined-label"
                        id="inflation"
                        onChange={(event) => this.handleChange(event, 'inflation')}
                        variant="outlined"
                     >
                        <MenuItem value="1.50">1.5% (Standard)</MenuItem>
                        <MenuItem value="2.00">2.0% (Federal Reserve Target)</MenuItem>
                        <MenuItem value="3.00">3.0% (Higher target)</MenuItem>
                     </Select>
                     <FormHelperText>Inflation Rate</FormHelperText><br />
                  </FormControl>
                  <FormControl>
                     <Select
                        value={this.state.withdrawlRate}
                        labelId="demo-simple-select-outlined-label"
                        id="withdrawlRate"
                        onChange={(event) => this.handleChange(event, 'withdrawlRate')}
                        variant="outlined"
                     >
                        <MenuItem value="4.00">4% (traditional)</MenuItem>
                        <MenuItem value="3.50"> 3.5% (conservative)</MenuItem>
                        <MenuItem value="5.00">5% (aggressive)</MenuItem>
                     </Select>
                     <FormHelperText>Annual Draw Down Rate of Savings (4% is normally designated for a standard retirement)</FormHelperText><br />
                  </FormControl>
                  <FormControl>
                     <Select
                        value={this.state.rateOfReturn}
                        labelId="demo-simple-select-outlined-label"
                        id="rateOfReturn"
                        onChange={(event) => this.handleChange(event, 'rateOfReturn')}
                        variant="outlined"
                     >
                        <MenuItem value="10.00">10% (average measured rate)</MenuItem>
                        <MenuItem value="8.00">8% (conservative returns)</MenuItem>
                     </Select>
                     <FormHelperText>Rate of Return for Investments</FormHelperText><br />
                  </FormControl>
               <Button onClick={(event) => this.submitAssets(event)} variant="contained" color="primary">Save Values</Button>
               </FormControl>
         </center>
      )


   }
}

export default connect(mapStoreToProps)(UserInfoForm);