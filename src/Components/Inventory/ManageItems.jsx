import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemSliceActions } from "../../Store/centralDataRedux";
import BackHome from "../UI/BackHome";
import InventoryItem from "./InventoryItem";

import NewItemForm from "./NewItemForm";

const ManageItems = () => {
  const itemsList = useSelector((state) => state.items);
  const [isNewItem, setIsNewItem] = useState(false);
  const dispatch = useDispatch();

  const addNewEventHandler = () => {
    setIsNewItem((prevCond) => !prevCond);
  };

  const deleteItem = (item) => {
    console.log(item.name);
    console.log(itemsList.filter((element) => element.name !== item.name));
    var updatedList = itemsList.filter((element) => element.name !== item.name);

    dispatch(itemSliceActions.deleteItem(updatedList));
  };

  const updateItem = (item) => {
    dispatch(itemSliceActions.updateItem(item));
  };

  useEffect(() => {
    console.log(itemsList);
  }, []);

  return (
    <div
      className={`bg-amber-500 min-h-screen `}
    >
      <BackHome />
      <h1 className="text-center text-7xl my-5">Inventory</h1>
      <div className="py-8">
        {isNewItem == false ? (
          <div className="text-center mb-7">
            <button
              className="text-4xl hover:text-white active:animate-ping"
              onClick={addNewEventHandler}
            >
              <i className="bi bi-plus-circle"></i>
            </button>
          </div>
        ) : (
          <NewItemForm addNewEventHandler={addNewEventHandler} />
        )}

        <div className="flex flex-col items-center gap-y-5">
          {itemsList.length === 0 ? (
            <>
              <h3 className="text-center text-lg">List Is Empty!!</h3>
              <h3 className="text-center text-lg">
                Click on <i className="bi bi-plus-circle"></i> to add new items
              </h3>
            </>
          ) : (
            itemsList.map((item) => {
              return (
                <InventoryItem
                  item={item}
                  key={item.name}
                  deleteItem={deleteItem}
                  updateItem={updateItem}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
