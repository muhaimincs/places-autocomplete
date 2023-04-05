import { configureStore } from '@reduxjs/toolkit'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import * as autocompleteSlice from './autocompleteSlice'

import createEpics from './createEpics'

const epicMiddleware = createEpicMiddleware()
const rootEpic = combineEpics(...createEpics([autocompleteSlice]));

export const store = configureStore({
  reducer: combineReducers({
    autocomplete: autocompleteSlice.default
  }),
  middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}).concat(epicMiddleware)
})

epicMiddleware.run(rootEpic);