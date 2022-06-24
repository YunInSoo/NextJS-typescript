import { HYDRATE } from 'next-redux-wrapper';
import { Reducer } from 'react';
import { AnyAction, CombinedState, combineReducers } from 'redux';
import { test } from './test';

// const persistConfig = {
//   key: 'root',
//   // localStorage에 저장합니다.
//   storage,
//   // 여러개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
//   whitelist: ['login'],
//   // blacklist -> 그것만 제외합니다
// };
const rootReducer: Reducer<RootStateInterface, AnyAction> = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        test,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;