import { PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, CombinedState, Reducer, combineReducers } from 'redux';
import { test } from './test';

// const persistConfig = {
//   key: 'root',
//   // localStorage에 저장합니다.
//   storage,
//   // 여러개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
//   whitelist: ['login'],
//   // blacklist -> 그것만 제외합니다
// };
interface RootStateInterface {
  test: any;
}

type PayloadActionExtend = PayloadAction & {
  message: string;
};

// const rootReducer = (state: RootStateInterface | undefined, action: PayloadActionExtend) => {
//   switch (action.type) {
//     case HYDRATE:
//       return action.payload;
//     default: {
//       const combinedReducer = combineReducers({
//         test,
//       });
//       return combinedReducer(state, action);
//     }
//   }
// };
// const rootReducer: Reducer<RootStateInterface, PayloadActionExtend> = combineReducers<RootStateInterface>({
//   test,
// });

const rootReducer = (state: RootStateInterface | undefined, action: { type: typeof HYDRATE; payload: RootStateInterface }) => {
  switch (action.type) {
    case HYDRATE: {
      const nextState: RootStateInterface = { ...state, ...action.payload };
      return nextState;
    }
    default: {
      const combinedReducer = combineReducers<RootStateInterface>({
        test,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
