import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import dashboardReducer from './dashboard.reducer';
import assetReducer from './assets.reducer';
import fedDataReducer from './feddata.reducer';
import expenseReducer from './liabilities.reducer'
import incomeReducer from './income.reducer'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  dashboardReducer,
  assetReducer,
  fedDataReducer,
  expenseReducer,
  incomeReducer,
});

export default rootReducer;
