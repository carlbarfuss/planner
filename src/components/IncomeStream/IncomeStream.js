import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './incomeStream.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class IncomeStream extends Component {
   state = {
         name: '',
         value: '',
   };

   componentDidMount(){
      console.log('inIncomeSources');
      this.props.dispatch( {type: 'FETCH_INCOME'} )
   }
  
   handleChange = (event, input) => {
      this.setState({
         [input]: event.target.value
      })
   }

   deleteIncome = (event, id) => {
      let idToSend = {id: id} 
      console.log('clicked to delete Item: ', id);
      this.props.dispatch( {type: 'DELETE_INCOME', payload: idToSend})
      this.props.dispatch({ type: 'FETCH_INCOME' })
      window.location.reload();
   }

   addIncome = () => {
      if (this.state.name && this.state.value) {
         this.props.dispatch( {type: 'ADD_INCOME', payload: this.state} )
         this.props.dispatch({ type: 'FETCH_INCOME' })
         this.setState({
            name: '',
            value: ''
         })
         window.location.reload();
      }
   }

   render() {
      return (
         <div>
               <center>
                  <h3 className="padding-top">Income Sources in Retirement:</h3>
                  <TextField
                  id="outlined-helperText"
                  label="New Income Name"
                  value={this.state.name} 
                  margin="normal"
                  variant="outlined"
                  onChange={(event) => this.handleChange(event, 'name')}
                  />
                  <TextField
                  id="outlined-helperText2"
                  label="New Income Value"
                  value={this.state.value}
                  margin="normal"
                  variant="outlined"
                  onChange={(event) => this.handleChange(event, 'value')}
                  />
                  <br/>
                  <Button 
                  onClick={(event) => this.addIncome(event)}
                  variant="contained"
                  color="primary"
                  >+</Button> 
                  <br />
                  {this.props.store.incomeReducer.map( (item, i) => 
                  <p key={item.id}>
                           {item.income_name}:  ${item.income_annual_value} &nbsp;
                           <Button className="dlt-btn" onClick={(event) => this.deleteIncome(event, item.id)}
                           variant="contained"
                           color="secondary"
                           >Delete</Button>
                  </p>)}
                  <a href="https://www.ssa.gov/OACT/quickcalc/">SS Calculator Link</a>
                  <br />
                  <br />
               </center>
            
         </div>
      );
   }
}

export default connect(mapStoreToProps)(IncomeStream);
