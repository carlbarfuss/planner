import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* submitLiability() {
   try {
      yield axios.post('/api/dashboard/expenses')
   } catch {
      console.log('problem with liability POST route');
   }
}

function* fetchExpenses() {
   try {
      const response = yield axios.get('/api/dashboard/expenses')
      yield put ( {type: 'SET_EXPENSES', payload: response.data})
   } catch (error) {
      console.log('problem with libilities GET route', error);
   }
}

function* addExpense(action) {
   try {
      console.log(action.payload);
      yield axios.post('./api/dashboard/expenses', action.payload)
   } catch (error) {
      console.log('dashboard INCOME post request failed', error);
   }
}

function* deleteExpense(action) {
   try {
      console.log('delete saga:', action.payload);
      yield axios.delete(`./api/dashboard/expenses/${action.payload.id}`)
   } catch (error) {
      console.log('dashboard INCOME delete');
   }
}


function* liabilitySaga() {
   yield takeLatest('SUBMIT_LIABILITY', submitLiability);
   yield takeLatest('FETCH_EXPENSES', fetchExpenses);
   yield takeLatest('ADD_EXPENSE', addExpense);
   yield takeLatest('DELETE_EXPENSE', deleteExpense);
}

export default liabilitySaga;