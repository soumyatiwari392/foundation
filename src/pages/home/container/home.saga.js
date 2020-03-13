import { call, takeLatest, put } from 'redux-saga/effects';
import HOME from './home.constants';
import getExternal from '../../../abstractor/externalAPI';
import { setGridDataAction } from './home.action';

function* homeSagaFunction(data) {
    try {
      const res = yield call(getExternal, data);
      if(res && res.text) {
        yield put(setGridDataAction(JSON.parse(res.text)));
      }
    }
    catch(err) {
      console.log(err);
    }
  }
  
  export function* homeSaga() {
    yield takeLatest(HOME.FETCH_GRID_DATA, homeSagaFunction);
  }