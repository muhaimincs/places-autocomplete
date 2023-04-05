import { createSlice } from '@reduxjs/toolkit'
import { delay, map } from 'rxjs/operators'
import { of } from 'rxjs'

const autocompleteSlice = createSlice({
  name: 'autocomplete',
  initialState: {
    value: '',
    suggestions: [],
  },
  reducers: {
    updateSearchValue(state, action) {
      state.value = action.payload
    },
    suggesstionClear(state) {
      state.suggestions = []
    },
    suggestionUpdate(state, action) {
      state.suggestions = action.payload.data.predictions.map((suggestion) => ({
        value: suggestion.description,
        label: suggestion.description
      }))
    }
  }
})

export const {
  updateSearchValue,
  suggesstionClear,
  suggestionsLoad,
  suggestionUpdate,
} = autocompleteSlice.actions

export const epics = {
  asyncCountUp: (action$, state$, action) =>
    of([]).pipe(
      delay(1000),
      map(() => countUp())
    )
};

export default autocompleteSlice.reducer
