import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favouriteList: []
}

const favouriteSlice = createSlice({
  name: 'favouriteSlice',
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.favouriteList.push(action.payload)
    },
    deleteFavourite: (state, action) => {
      state.favouriteList = state.favouriteList.filter(item => {
        return item.id !== action.payload.id
      })
    }
  }
});

export const {addFavourite, deleteFavourite} = favouriteSlice.actions
export const selectFavourites = state => state.favourites.favouriteList
export default favouriteSlice.reducer