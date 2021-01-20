import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import IncomeStream from '../IncomeStream/IncomeStream'
import UserInfoForm from '../UserInfoForm/UserInfoForm'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AssetPage extends Component {

   componentDidMount(){
      this.props.dispatch( {type: 'FETCH_USER' } )
   }  

   handleChange = (event, input) => {
      this.setState({
         [input]: event.target.value
      })
   }

   goToLiabilities = () => {
      this.props.history.push('/liabilities')
   }
   
   addIncome = () => {
      console.log('clicked addIncome');
   }

   render() {
      return (
         <div>
            <UserInfoForm />
            <IncomeStream/>
            <center>     
               <button onClick={this.goToLiabilities}>Next</button>        
            </center>
         </div>
      );
   }
}

export default connect(mapStoreToProps)(AssetPage);
