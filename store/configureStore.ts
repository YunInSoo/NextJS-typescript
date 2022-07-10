// store.js
import { compose, applyMiddleware, Middleware, createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/redux';
import logger from 'redux-logger';

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const configStore = () => {
  console.log(process.env.NODE_ENV);
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  // const enMiddleware = process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(...middlewares)) : compose(applyMiddleware(...middlewares));
  // const middleware: any = [enMiddleware];
  // create a makeStore function
  const makeStore = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  return { ...makeStore };
};

// export an assembled wrapper
const wrapper = createWrapper(configStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
