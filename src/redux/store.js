import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slice/counterSlice'
import traceReducer from '../redux/slice/traceSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    trace: traceReducer
  }
})