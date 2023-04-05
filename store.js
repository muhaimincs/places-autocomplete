import { configureStore } from '@reduxjs/toolkit'
import autocompleteReducer from './autocompleteSlice'

export const store = configureStore({
  reducer: {
    autocomplete: autocompleteReducer
  }
})
