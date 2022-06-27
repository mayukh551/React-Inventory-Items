import React from "react";

const InventoryItem = (props) => {
  var item = props.item;

  return (
    <div
      key={item.name}
      className="relative shadow-2xl hover:scale-105 transition-transform text-white h-44 rounded-lg bg-fuchsia-600 w-[25rem] flex flex-col justify-evenly pt-4 px-9"
    >
      <h3>{item.name}</h3>
      <div className="flex justify-start">
        <span className="mr-5">{item.details.ram}</span>
        <span className="mr-5">{item.details.internalStorage}</span>
        <span className="mr-5">{item.details.brand}</span>
      </div>
      <div className="w-full">{item.price}</div>
      <div className="text-left">
        <button className="mt-3 px-4 py-1 rounded-lg text-white bg-purple-600 hover:bg-purple-700">
          Edit
        </button>
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
