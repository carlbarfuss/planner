import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchDashboard() {
   try {
      const response = yield axios.get('/api/dashboard');
      console.log('response is:', response);
      yield put({ type: 'SET_DASHBOARD', payload: response.data });
   } catch (error) {
      console.log('problem with getting dashboard info', error);
   }
}

function* fetchFedData() {
   try {
      const response = yield axios.get('/api/dashboard/feddata');
      console.log('response is:', response);
      yield put({ type: 'SET_FEDDATA', payload: response.data });
   } catch (error) {
      console.log('problem with getting FED DATA info', error);
   }
}

function* fetchAssets() {
   try {
      const response = yield axios.get('/api/dashboard/assets');
      console.log('response is:', response);
      yield put({ type: 'SET_ASSETS', payload: response.data });
   } catch (error) {
      console.log('problem with getting ASSET info', error);
   }
}
function* fetchLiabilities() {
   try {
      const response = yield axios.get('/api/dashboard/liabilities');
      console.log('response is:', response);
      yield put({ type: 'SET_LIABILITIES', payload: response.data });
   } catch (error) {
      console.log('problem with getting LIABILITIES info', error);
   }
}

function* dashboardSaga() {
   yield takeLatest('FETCH_DASHBOARD', fetchDashboard);
   yield takeLatest('FETCH_FEDDATA', fetchFedData);
   yield takeLatest('FETCH_ASSETS', fetchAssets);
   yield takeLatest('FETCH_LIABILITIES', fetchLiabilities)
}

export default dashboardSaga;