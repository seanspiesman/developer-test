import { ADD_ITEM, DELETE_ALL_ITEMS, DELETE_ITEM } from "./actions";

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        wishList: [...state.wishList, action.payload],
      };
    case DELETE_ITEM:
      return {
        wishList: [
          ...state.wishList.filter((listItem) => listItem !== action.payload),
        ],
      };
    case DELETE_ALL_ITEMS:
      return {
        wishList: INITIAL_STATE.wishList,
      };
    default:
      return {
        wishList: state.wishList,
      };
  }
};

export default reducer;
