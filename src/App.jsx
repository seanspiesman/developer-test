import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteAllItems, deleteItem } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.wishList);
  let inputRef = useRef();

  const AddItem = (input) => {
    let listItem = input.current.value;
    if (input.current.value.length === 0) {
      alert("You have to want something!");
      input.current.focus();
    } else if (list.includes(listItem)) {
      alert("You cannot have the same item twice!");
      input.current.value = "";
      input.current.focus();
    } else {
      dispatch(addItem(listItem));
      input.current.value = "";
      input.current.focus();
    }
  };

  const deleteAll = () => {
    if (list.length === 0) {
      alert("You have to want something!");
      inputRef.current.focus();
    } else {
      dispatch(deleteAllItems());
      alert("Wish list submitted to Santa!");
    }
  };
  return (
    <div className="wishlist-container">
      <h4 className="header-styles">MY WISHLIST</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="list-item-area">
          <ul className="list-group">
            {list &&
              list.map((item, index) => {
                return (
                  <li
                    className="list-items"
                    onClick={() => {
                      dispatch(deleteItem(item));
                    }}
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="list-input-container">
          <input className="list-input-field" ref={inputRef} />
        </div>
        <button
          className="btn add-button"
          onClick={() => {
            AddItem(inputRef);
          }}
        >
          Add
        </button>
      </form>
      <br />
      <button className="btn submit-button" onClick={() => deleteAll()}>
        Submit
      </button>
    </div>
  );
};

export default App;
