import { fork, all, takeEvery, call, put } from 'redux-saga/effects';

import testSaga from './test';

function* rootSaga() {
  yield all([fork(testSaga)]);
}

export default rootSaga;
