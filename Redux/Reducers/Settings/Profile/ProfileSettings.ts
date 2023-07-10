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
      
    },
    addOrder: (state: any, action: any) => {
      if( !state.orders.find(x => x.id === action.payload.id) ){
        let obj ={ ...action.payload };
        obj.count = 1
        state.orders.push(obj)
      }else if( state.orders.find(x => x.id === action.payload.id)){
       const item = state.orders.find(x => x.id === action.payload.id);
       const index = state.orders.indexOf(item);
       state.orders[index].count = state.orders[index].count + 1;
      }
    },
    removeOrder: (state: any, action: any) => {
      if( state.orders.find(x => x.id === action.payload.id).count === 1 ){
        state.orders.splice(state.orders.indexOf(state.orders.find((x) => x.id === action.payload.id )) , 1)
      }else if( state.orders.find(x => x.id === action.payload.id)){
       const item = state.orders.find(x => x.id === action.payload.id);
       const index = state.orders.indexOf(item);
       state.orders[index].count = state.orders[index].count - 1;
      }
    
    
    
    }


  },
})

export const { tokenHandler, nameHandler, isLoggedInHandler, showBasketHandler, ordersHandler , addOrder , removeOrder } = ProfileSettings.actions;
export default ProfileSettings.reducer;