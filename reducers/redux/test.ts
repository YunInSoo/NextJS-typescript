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

export const test = produce((state, action) => {
  switch (action.type) {
    case LOAD_TEST:
      state.loading = true;
      break;

    case LOAD_TEST_SUCCEEDED:
      state.loading = false;
      state.data = action.data;
      break;
    case LOAD_TEST_FAILED:
      state.loading = false;
      state.message = action.message;
      break;
    default:
      break;
  }
});
