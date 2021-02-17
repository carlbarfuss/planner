import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SelfCompare from '../SelfCompare/SelfCompare'
import AgeCompare from '../AgeCompare/AgeCompare'
import './Dashboard.css'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Dashboard extends Component {

   componentDidMount(){
      this.props.dispatch( {type: 'FETCH_USER'})
      this.props.dispatch( {type: 'FETCH_FEDDATA'})
      this.props.dispatch( {type: 'FETCH_INCOME'})
      this.props.dispatch( {type: 'FETCH_EXPENSES'})
   }


   render() {
      return (
         <div className="background">
            <center>
               <SelfCompare />
               <AgeCompare />
            </center>
         </div>
      );
   }
}

export default connect(mapStoreToProps)(Dashboard);
