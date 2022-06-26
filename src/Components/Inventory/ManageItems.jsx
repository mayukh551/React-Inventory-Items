import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemSliceActions } from "../../Store/centralDataRedux";
import BackHome from "../UI/BackHome";

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
    // const updatedList =
    console.log(itemsList.filter((element) => element.name !== item.name));

    dispatch(itemSliceActions.update(item.name));
  };

  useEffect(() => {
    console.log(itemsList);
  }, []);

  return (
    <div>
      <BackHome />
      <div className="py-8">
        {isNewItem == false ? (
          <div className="text-center mb-7">
            <button
              className="text-4xl hover:text-cyan-500 active:animate-ping"
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
                <div
                  key={item.name}
                  className="relative shadow-2xl hover:scale-105 transition-transform text-white h-44 rounded-lg bg-fuchsia-600 w-[25rem] flex flex-col justify-evenly py-4 px-9"
                >
                  <h3>{item.name}</h3>
                  <div className="flex justify-start">
                    <span className="mr-5">{item.details.ram}</span>
                    <span className="mr-5">{item.details.internalStorage}</span>
                    <span className="mr-5">{item.details.brand}</span>
                  </div>
                  <div className="w-full text-right">{item.price}</div>
                  <button
                    onClick={() => {
                      deleteItem(item);
                    }}
                  >
                    <i className="absolute text-xl top-2 right-2 text-red-700 bi bi-x-circle"></i>
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
