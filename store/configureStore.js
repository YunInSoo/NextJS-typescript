// store.js
import { compose, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/redux';
import rootSaga from '../reducers/redux-saga';

export const configStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enMiddleware = process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(...middlewares)) : compose(applyMiddleware(...middlewares));
  // create a makeStore function
  const makeStore = configureStore(reducer, enMiddleware);
  makeStore.sagaTask = sagaMiddleware.run(rootSaga);
  return { ...makeStore };
};

// export an assembled wrapper
const wrapper = createWrapper(configStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
