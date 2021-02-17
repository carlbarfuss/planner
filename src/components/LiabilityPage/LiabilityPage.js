import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LiabilityForm from '../LiabilityForm/LiabilityForm'
import Button from '@material-ui/core/Button';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class LiabilityPage extends Component {
   state = {
      heading: 'Class Component',
   };

   componentDidMount() {
      this.props.dispatch({ type: 'FETCH_EXPENSES' })
   }

   onSubmit = (event) => {
      this.props.history.push('/dashboard')
   }

   render() {
      return (
         <div>
            <center>
               <h3>
                  <form className="formPanel">
                     <LiabilityForm />
                     <Button
                        onClick={(event) => this.onSubmit(event)}
                        variant="contained"
                        color="primary"
                        >Next
                     </Button>
                  </form>
               </h3>

            </center>
         </div>
      );
   }
}

export default connect(mapStoreToProps)(LiabilityPage);
