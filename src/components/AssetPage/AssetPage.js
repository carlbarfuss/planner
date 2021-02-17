import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import IncomeStream from '../IncomeStream/IncomeStream'
import UserInfoForm from '../UserInfoForm/UserInfoForm'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import './AssetPage.css'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AssetPage extends Component {

   componentDidMount() {
      this.props.dispatch({ type: 'FETCH_USER' })
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
         <div className="assetPage">
            <UserInfoForm />
            <div className="formPanel">
               <IncomeStream />
               <Button
                  onClick={this.goToLiabilities}
                  variant="contained"
                  color="primary"
               >Next</Button>
               <br/>
               <br/>
            </div>
         </div>
      );
   }
}

export default connect(mapStoreToProps)(AssetPage);
