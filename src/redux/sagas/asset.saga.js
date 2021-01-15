import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
   try {
      yield axios.post('/api/user/register/assets', action.payload);
      yield put( {type: 'FETCH_USER'} );
   } catch (error) {
      console.log('problem with Asset Info submission', error);
   }
}

function* assetSaga() {
   yield takeLatest('SUBMIT_ASSETS', registerUser);
}

export default assetSaga;