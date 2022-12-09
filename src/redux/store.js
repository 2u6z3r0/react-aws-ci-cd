import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import counterReducer from '../features/counter/counterSlice';

const middlewares = [logger];

export default configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== 'production',
})