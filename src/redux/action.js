// cartActions.js
export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_COUNT = "UPDATE_COUNT";
export const UPDATE_SELECTED = "UPDATE_SELECTED";
export const ADD_TO_ORDER='ADD_TO_ORDER'
export const addToCart = (item, countItem) => ({
  type: ADD_TO_CART,
  payload: { item, countItem },
});
export const updateCount = (item, countItem) => ({
  type: UPDATE_COUNT,
  payload: { item, countItem },
});
export const  updateSelected= (item, isSelected) => ({
  type: UPDATE_SELECTED,
  payload: { item, isSelected },
});
export const addToOrder=(cardItems,deliveryFee)=>({
  type:ADD_TO_ORDER,
  payload:{cardItems,deliveryFee}
})
