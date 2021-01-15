import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* submitLiability() {
   try {
      yield axios.post('/api/dashboard/expenses')
   } catch {
      console.log('problem with liability POST route');
   }
}

function* fetchLiabilities() {
   try {
      const response = yield axios.get('/api/dashboard/expenses')
      yield put ( {type: 'SET_LIABILITIES', payload: response.data})
   } catch (error) {
      console.log('problem with libilities GET route', error);
   }
}

function* liabilitySaga() {
   yield takeLatest('SUBMIT_LIABILITY', submitLiability);
   yield takeLatest('FETCH_LIABILITIES', fetchLiabilities)
}

export default liabilitySaga;