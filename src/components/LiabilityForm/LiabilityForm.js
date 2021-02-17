import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './incomeStream.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class LiabilityForm extends Component {
   state = {
      name: '',
      value: '',
   };

   componentDidMount() {
      console.log('inIncomeSources');
      this.props.dispatch({ type: 'FETCH_INCOME' })
   }

   handleChange = (event, input) => {
      this.setState({
         [input]: event.target.value
      })
   }

   deleteIncome = (event, id) => {
      let idToSend = { id: id }
      console.log('clicked to delete Item: ', id);
      this.props.dispatch({ type: 'DELETE_EXPENSE', payload: idToSend })
      this.props.dispatch({ type: 'FETCH_EXPENSE' })
      window.location.reload();
   }

   addExpense = () => {
      if (this.state.name && this.state.value) {
         this.props.dispatch({ type: 'ADD_EXPENSE', payload: this.state })
         this.props.dispatch({ type: 'FETCH_EXPENSE' })
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
               <h3>Expenses</h3>
               <TextField
                  id="outlined-helperText"
                  label="New Expense Name"
                  value={this.state.name}
                  margin="normal"
                  variant="outlined"
                  onChange={(event) => this.handleChange(event, 'name')}
               />
               <TextField
                  id="outlined-helperText2"
                  label="Annual Cost"
                  value={this.state.value}
                  margin="normal"
                  variant="outlined"
                  onChange={(event) => this.handleChange(event, 'value')}
               />
               <br />
               <Button
                  onClick={(event) => this.addExpense(event)}
                  variant="contained"
                  color="primary"
               >+</Button>
               <br />
               <br/>
               {this.props.store.expenseReducer?.map((item, i) =>
                  <div key={item.id}>
                           {item.liability_name}:  ${item.liability_annual_cost} &nbsp;
                           <Button onClick={(event) => this.deleteIncome(event, item.id)}
                              variant="contained"
                              color="secondary"
                           >Delete</Button> <br/><br/>
                  </div>)}
               <br />
               <br />
         </div>
      );
   }
}

export default connect(mapStoreToProps)(LiabilityForm);
