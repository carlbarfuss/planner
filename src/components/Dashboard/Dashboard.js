import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Dashboard extends Component {
   state = {
   };

   componentDidMount(){
      this.props.dispatch( {type: 'FETCH_DASHBOARD'})
   }


   render() {
      return (
         <div>
            {JSON.stringify(this.state)}
            {JSON.stringify(this.props.store.user)}
         </div>
      );
   }
}

export default connect(mapStoreToProps)(Dashboard);
