import { LOAD_TEST, LOAD_TEST_FAILED, LOAD_TEST_SUCCEEDED } from '@reducers/redux/test';
import { createAction } from 'redux-actions';
import { takeLatest, takeEvery, delay, put, all, fork } from 'redux-saga/effects';

/**
 * GET_REPLY
 */
// export const requestGetTest = createAction(LOAD_TEST);

// GET_REPLY
function* getTestSaga() {
  try {
    const rand1 = Math.random();
    console.log('getTestSagagetTestSagagetTestSagagetTestSagagetTestSagagetTestSagagetTestSagagetTestSagagetTestSagagetTestSaga');
    delay(2000);
    yield put({ type: LOAD_TEST_SUCCEEDED, data: '데이터 성공입니다.' + rand1 });
  } catch (e) {
    yield put({ type: LOAD_TEST_FAILED, message: e.message });
  }
}
export function* watchTestSaga() {
  yield takeLatest(LOAD_TEST, getTestSaga);
}
export default function* testSaga() {
  yield all([fork(watchTestSaga)]);
}
