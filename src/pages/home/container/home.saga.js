import { call, takeLatest, put } from 'redux-saga/effects';
import HOME from './home.constants';
import getExternal from '../../../abstractor/externalAPI';
import { setTableDataAction } from './home.action';

function* homeSagaFunction(data) {
    try {
      const res = yield call(getExternal, data);
      if(res) {
        const { body: { hits = [] } = {} } = res;
        yield put(setTableDataAction(hits));
      }
    }
    catch(err) {
      console.log(err);
    }
  }
  
  export function* homeSaga() {
    yield takeLatest(HOME.FETCH_POST_DATA, homeSagaFunction);
  }