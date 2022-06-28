import { PayloadAction } from '@reduxjs/toolkit';
import createReducer from 'config/redux/immerWrapper';
import produce from 'immer';

export const LOAD_TEST = 'LOAD_TEST';
export const LOAD_TEST_SUCCEEDED = 'LOAD_TEST_SUCCEEDED';
export const LOAD_TEST_FAILED = 'LOAD_TEST_FAILED';

const testDataInfo = {
  data: null,
  loading: false,
  message: null,
};

type TestType = {
  data: any;
  loading: boolean;
  message: any;
};

type PayloadActionExtend = PayloadAction & {
  message: string;
};

export const test = (state = testDataInfo, action: PayloadActionExtend) =>
  produce(state, (draft: TestType) => {
    switch (action.type) {
      case LOAD_TEST:
        draft.loading = true;
        break;

      case LOAD_TEST_SUCCEEDED:
        draft.loading = false;
        draft.data = action.payload;
        break;
      case LOAD_TEST_FAILED:
        draft.loading = false;
        draft.message = action.message;
        break;
      default:
        break;
    }
  });
