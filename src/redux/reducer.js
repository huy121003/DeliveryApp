import { general } from "../constants";
import {
  ADD_TO_CART,
  ADD_TO_ORDER,
  UPDATE_COUNT,
  UPDATE_SELECTED,
} from "./action";

const initialState = {
  cart: [...general.CART],
  orders: [...general.ORDER],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { item: addItem, countItem: addCountItem } = action.payload;
      const addItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === addItem.id
      );
      if (addItemIndex > -1) {
        return {
          ...state,
          cart: state.cart.map((cartItem, index) =>
            index === addItemIndex
              ? { ...cartItem, countfood: cartItem.countfood + addCountItem }
              : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              id: addItem.id,
              price: addItem.price,
              countfood: addCountItem,
              isSelected: false,
            },
          ],
        };
      }

    case UPDATE_COUNT:
      const { item: updateItem, countItem: updateCountItem } = action.payload;
      const updateItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === updateItem.id
      );
      return {
        ...state,
        cart: state.cart.map((cartItem, index) =>
          index === updateItemIndex
            ? { ...cartItem, countfood: updateCountItem }
            : cartItem
        ),
      };
    case UPDATE_SELECTED:
      const { item: selectItem, isSelected: isSelectedItem } = action.payload;
      const selectedItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === selectItem.id
      );
      return {
        ...state,
        cart: state.cart.map((cartItem, index) =>
          index === selectedItemIndex
            ? { ...cartItem, isSelected: isSelectedItem }
            : cartItem
        ),
      };
    case ADD_TO_ORDER:
      const { cardItems, deliveryFee } = action.payload;
      const orderStates = ["Preparing", "In Transit", "Delivered", "Cancelled"];

   
      const total = cardItems.reduce((sum, item) => sum + item.price * item.countfood, 0);

      const id = new Date().getTime();

      // Cập nhật đơn hàng mới
      const newOrder = {
        orderId: id,
        items: cardItems,
        deliveryFee: deliveryFee,
        total:total+deliveryFee,
        orderState: orderStates[Math.floor(Math.random() * orderStates.length)],
        orderDate: new Date().toISOString(),
      };

      return {
        ...state,
        cart: state.cart.filter((item) => item.isSelected === false), // Lọc các sản phẩm chưa được chọn
        orders: [...state.orders, newOrder], // Thêm đơn hàng mới vào danh sách orders
      };
    default:
      return state;
  }
};

export default Reducer;
