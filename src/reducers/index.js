import {
  default as CounterSliceReducer,
  actions as CounterSliceActions,
} from "./CounterSlice";

export const actions = {
  counter: CounterSliceActions,
};

const rootReducer = {
  counter: CounterSliceReducer,
};

export default rootReducer;
