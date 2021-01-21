import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LiabilityForm from '../LiabilityForm/LiabilityForm'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class LiabilityPage extends Component {
   state = {
      heading: 'Class Component',
   };

   componentDidMount(){
      this.props.dispatch( {type: 'FETCH_EXPENSES' })
   }



   render() {
      return (
         <div>
            <center>
            <h3>
               <form className="formPanel">
                  <LiabilityForm />

               </form>
            </h3>
            
            </center>
         </div>
      );
   }
}

export default connect(mapStoreToProps)(LiabilityPage);
