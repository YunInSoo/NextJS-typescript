// store.js
import { compose, applyMiddleware, Middleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/redux';
import logger from 'redux-logger';

export const configStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enMiddleware = process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(...middlewares)) : compose(applyMiddleware(...middlewares));
  const middleware: any = [enMiddleware];
  // create a makeStore function
  const makeStore = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware,
  });
  return { ...makeStore };
};

// export an assembled wrapper
const wrapper = createWrapper(configStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
