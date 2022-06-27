import React, { useRef } from "react";

const SortItems = (props) => {
  const selectionHandler = (event) => {
    var updatedList = props.listItems;
    // console.log(updatedList);
    console.log(event.target.value);
    const sortOption = event.target.value;
    if (sortOption === "Highest - Lowest") {
      console.log(updatedList);
      updatedList = updatedList.sort((a, b) => {
        if (a.price >= b.price) return 0;
        else if (a.price < b.price) return -1;
      });
      console.log(updatedList);
    }
    if (sortOption === "Lowest - Highest") {
      console.log(updatedList);
      updatedList = updatedList.sort((a, b) => {
        if (a.price <= b.price) return 0;
        else if (a.price > b.price) return 1;
      });
      console.log(updatedList);
    }
    console.log("New List after Sorting :", updatedList);
    // props.updatedListHandler(updatedList);
  };

  return (
    <div className="absolute top-10">
      <select onChange={selectionHandler}>
        <option value="None">None</option>
        <option value="Highest - Lowest">Highest - Lowest</option>
        <option value="Lowest - Highest">Lowest - Highest</option>
      </select>
    </div>
  );
};

export default SortItems;
