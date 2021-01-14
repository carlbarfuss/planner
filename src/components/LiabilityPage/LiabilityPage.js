import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class LiabilityPage extends Component {
   state = {
      heading: 'Class Component',
   };

   onSubmit = (event) => {
      this.props.history.push('/dashboard')
   }
   render() {
      return (
         <div>
            <center>
            <h3>
                  Liabilities Page (Stretch)
            </h3>
            <button onClick={(event) => this.onSubmit(event)}>Next</button>
            </center>
         </div>
      );
   }
}

export default connect(mapStoreToProps)(LiabilityPage);
