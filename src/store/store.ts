import { configureStore } from '@reduxjs/toolkit'
import toastReducer from './toast'
import usersReducer from './users'

export default configureStore({
  reducer: {
    toast: toastReducer,
    users: usersReducer,
  },
})
