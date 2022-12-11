import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
  pictures: null,
  CATEGORY :''
}

export const pictureSlice = createSlice({
  name: 'pictures',
  INITIAL_STATE,
  reducers:{
    setPictures : (state,action)=>{
      state.pictures= action.payload; 
    }
      
    }
  }
)

export const {setPictures} = pictureSlice.actions

export default pictureSlice.reducer



// export function picturesReducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case "SET_PICTURE":
//       return {
//         ...state,
//         pictures: action.pictures,
//       }


//     default:
//       return state;
//   }
// }
