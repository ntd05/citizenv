import { configureStore } from "@reduxjs/toolkit";
import DataReducer from '../store/dataReducer';

const store = configureStore({
  reducer: {
    data: DataReducer,
  },
});
export default store;