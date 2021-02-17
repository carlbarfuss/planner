import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* setIncome(action) {
   try {
      const response = yield axios.get('/api/dashboard/income');
      yield put({ type: 'SET_INCOME', payload: response.data });
   } catch (error) {
      console.log('dashboard INCOME get request failed', error);
   }
}

function* addIncome(action) {
   try {
      yield axios.post('./api/dashboard/income', action.payload)
   } catch (error) {
      console.log('dashboard INCOME post request failed', error);
   }
}

function* deleteIncome(action) {
   try {
      console.log('delete saga:', action.payload);
      yield axios.delete(`./api/dashboard/income/${action.payload.id}`)
   } catch (error) {
      console.log('dashboard INCOME delete');
   }
}

function* incomeSaga() {
   yield takeLatest('FETCH_INCOME', setIncome);
   yield takeLatest('ADD_INCOME', addIncome)
   yield takeLatest('DELETE_INCOME', deleteIncome)
}

export default incomeSaga;