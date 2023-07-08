import { createSlice } from '@reduxjs/toolkit'

export const ProfileSettings = createSlice({
  name: 'ProfileSetting',
  initialState: {
    name: '',
    token: '',
    isLoggedIn: false,
    showBasket: false,
    orders: [],
  },
  reducers: {
    tokenHandler: (state: any, action: any) => {
      state.token = action.payload
    },
    nameHandler: (state: any, action: any) => {
      state.name = action.payload
    },
    isLoggedInHandler: (state: any, action: any) => {
      state.isLoggedIn = action.payload
    },
    showBasketHandler: (state: any, action: any) => {
      state.showBasket = action.payload
    },
    ordersHandler: (state: any, action: any) => {
      console.log(action)
      if (action.type === 'ADD') {
        state.orders.push(action.payload)
      }
    }
  },
})

export const { tokenHandler, nameHandler, isLoggedInHandler, showBasketHandler, ordersHandler } = ProfileSettings.actions;
export default ProfileSettings.reducer;