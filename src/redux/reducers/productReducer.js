import { ActionTypes } from "../constants/action-types";
const initialState={
  products: [
    // {
    //   id:1,
    //   title:"Glenn",
    //   category: "programmer",
    // }
  ],
  selectedProduct: [],
}
export const productReducer=(state=initialState, {type, payload})=>{
  switch (type){
    case ActionTypes.SELECTED_PRODUCT: return {...state, selectedProduct: payload};
    case ActionTypes.SET_PRODUCTS:
      return {...state, products:payload};
    default: return state;
  }
}