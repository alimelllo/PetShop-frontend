import { createSlice } from '@reduxjs/toolkit'

export const ProfileSettings = createSlice({
  name: 'ProfileSetting',
  initialState: {
    name : '',
    token : '',
    isLoggedIn : false
  },
  reducers: {
    tokenHandler: (state : any , action : any) => {
      state.token = action.payload
    },
    nameHandler: (state : any , action : any) => {
      state.name = action.payload
    },
    isLoggedInHandler: (state : any , action : any) => {
      state.isLoggedIn = action.payload
    }
  },
})


export const { tokenHandler , nameHandler , isLoggedInHandler} = ProfileSettings.actions;
export default ProfileSettings.reducer;