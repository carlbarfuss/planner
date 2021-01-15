import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './incomeStream.css'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
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
      console.log('clicked addIncome');
   }

   render() {
      return (
         <div>
               <center>
                  <h3>Income Sources in Retirement:</h3>
                  <p><small>*Input current annual value of any income streams you wish to add</small></p>
                  <input placeholder="New Income Name" type="text" value={this.state.name} onChange={(event) => this.handleChange(event, 'name')}></input>
                  <input placeholder="Annual Income Value" type="number" value={this.state.value} onChange={(event) => this.handleChange(event, 'value')}></input>
                  <button onClick={(event) => this.addIncome(event)}>+</button> 
                  <br />
                  {this.props.store.incomeReducer.map( (item, i) => 
                  <div key={item.id}>
                     <ul>
                        <li>
                           {item.income_name}:  ${item.income_annual_value}
                           <button onClick={(event) => this.deleteIncome(event, item.id)}>Delete</button>
                        </li>
                     </ul> 
                  </div>)}
                  <a href="https://www.ssa.gov/OACT/quickcalc/">SS Calculator Link</a>
                  <br />
                  <br />
               </center>
            
         </div>
      );
   }
}

export default connect(mapStoreToProps)(IncomeStream);
