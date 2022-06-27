import React, { useState } from "react";
import NewInputOnEdit from "./NewInputOnEdit";

const InventoryItem = (props) => {
  var item = props.item;

  const [itemName, setItemName] = useState(item.name);
  const [itemRam, setItemRam] = useState(item.details.ram);
  const [itemStorage, setItemStorage] = useState(item.details.internalStorage);
  const [itemBrand, setItemBrand] = useState(item.details.brand);

  const [priceVal, setPriceVal] = useState(item.price);

  const [ifEdit, setIfEdit] = useState(false);

  const editOptionHandler = () => {
    setIfEdit((prevCond) => !prevCond);
  };

  const newInputHandler = () => {
    console.log(itemName);
    console.log(itemRam);
    console.log(itemStorage);
    console.log(itemBrand);
    console.log(priceVal);
    const newData = {
      ...item,
      name: itemName,
      price: priceVal,
      details: {
        ram: itemRam,
        internalStorage: itemStorage,
        brand: itemBrand,
      },
    };
    console.log(newData);
    props.updateItem(newData);
  };

  return (
    <div
      key={item.name}
      className="relative shadow-2xl hover:scale-105 transition-transform text-white min-h-[180px] rounded-lg bg-fuchsia-600 w-[25rem] flex flex-col justify-evenly pt-4 px-9"
    >
      {ifEdit === false ? (
        <h3>{item.name}</h3>
      ) : (
        <NewInputOnEdit
          type="text"
          value={itemName}
          updateInput={setItemName}
          longInput={true}
        />
      )}
      <div className="flex justify-start">
        {ifEdit === false ? (
          <>
            <span className="mr-5">{item.details.ram}</span>
            <span className="mr-5">{item.details.internalStorage}</span>
            <span className="mr-5">{item.details.brand}</span>
          </>
        ) : (
          <>
            <NewInputOnEdit
              type="text"
              value={itemRam}
              updateInput={setItemRam}
              longInput={false}
            />
            <NewInputOnEdit
              type="text"
              value={itemStorage}
              updateInput={setItemStorage}
              longInput={false}
            />
            <NewInputOnEdit
              type="text"
              value={itemBrand}
              updateInput={setItemBrand}
              longInput={false}
            />
          </>
        )}
      </div>
      {ifEdit === false ? (
        <div className="w-full">{item.price}</div>
      ) : (
        <NewInputOnEdit
          type="text"
          value={priceVal}
          updateInput={setPriceVal}
          longInput={true}
        />
      )}
      <div className="text-left">
        {ifEdit === false ? (
          <button
            onClick={editOptionHandler}
            className="shadow-lg mt-3 px-4 py-1 rounded-lg text-white bg-purple-600 hover:bg-purple-700"
          >
            Edit
          </button>
        ) : (
          <>
            <button
              onClick={editOptionHandler}
              className="mr-4 shadow-lg mt-3 px-4 py-1 rounded-lg text-white bg-purple-600 hover:bg-purple-700"
            >
              Cancel
            </button>
            <button
              onClick={newInputHandler}
              className="shadow-lg mt-3 px-4 py-1 rounded-lg text-white bg-purple-600 hover:bg-purple-700"
            >
              Submit
            </button>
          </>
        )}
      </div>
      <button
        onClick={() => {
          props.deleteItem(item);
        }}
      >
        <i className="absolute text-xl top-2 right-2 text-red-700 bi bi-dash-circle-fill"></i>
      </button>
    </div>
  );
};

export default InventoryItem;
