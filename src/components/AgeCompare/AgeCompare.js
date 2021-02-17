import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './AgeCompare.css'



class AgeCompare extends Component {

   componentDidMount() {

   }

   render() {
      return (
         <div className="formPanel">
               <h2>How do I compare to my peers in my age group? ({this.props.store.fedDataReducer[0]?.age_min}-{this.props.store.fedDataReducer[0]?.age_max})</h2>
            <Card className="card">
               <CardContent>
                  <Typography
                     color="textSecondary" gutterBottom>
                        Median Savings in my Age Group: ${this.props.store.fedDataReducer[0]?.median_savings}
                  </Typography>
               </CardContent>
            </Card>
            <Card className="card">
               <CardContent>
                  <Typography
                     color="textSecondary" gutterBottom>
                        Average Savings in my Age Group: ${this.props.store.fedDataReducer[0]?.average_savings}
                  </Typography>
               </CardContent>
            </Card>
            <Card className="card">
               <CardContent>
                  <Typography
                     color="textSecondary" gutterBottom>
                        99th Percentile for my Age Group: ${this.props.store.fedDataReducer[0]?.top_savings}
                  </Typography>
                  <Typography
                     color="textSecondary" gutterBottom>

                  </Typography>
               </CardContent>
            </Card>
         </div>
      );
   }
}

export default connect(mapStoreToProps)(AgeCompare);
