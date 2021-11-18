import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: ''
}

const searchSlice = createSlice({
  name: 'search slice',
  initialState,
  reducers: {
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload.value
    }
  }
});

export const {changeSearchValue} = searchSlice.actions
export const selectSearchValue = state => state.search.searchValue
export default searchSlice.reducer