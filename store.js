import {configureStore} from '@reduxjs/toolkit'
import memoReducer from './memoReducer'

const store=configureStore({
    reducer:memoReducer
})
export default store