export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const DELETE_ALL_ITEMS = "DELETE_ALL_ITEMS";

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};

export const deleteAllItems = () => {
  return {
    type: DELETE_ALL_ITEMS,
  };
};
