import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'
import {
  updateSearchValue,
  suggesstionClear,
  suggestionUpdate,
} from '../autocompleteSlice'
import { AutoComplete } from 'antd'

const Autocomplete = () => {
  const { value, suggestions } = useSelector((state) => state.autocomplete)
  const dispatch = useDispatch()
  console.log('value', value)
  console.log('suggestions', suggestions)

  async function fetchSuggestions(value) {
    const response = await fetch(`/api?q=${value}`)
    const data = await response.json()
    void dispatch(suggestionUpdate({ value, data }))
  }

  const handleSearch = useCallback(
    debounce(fetchSuggestions, 500), []
  );
  const onChange = (data) => {
    dispatch(updateSearchValue(data))
  };

  return (
    <AutoComplete
      style={{
        width: 500,
      }}
      value={value}
      options={suggestions}
      placeholder="enter an address"
      onSearch={handleSearch}
      onChange={onChange}
      onClear={() => dispatch(suggesstionClear())}
    />
  )
}

export default Autocomplete
