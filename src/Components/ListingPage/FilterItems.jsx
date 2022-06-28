import React, { useRef } from "react";
import Card from "../UI/Card";

const arrangeItems = (list) => {
  list.sort((a, b) => {
    console.log(b.slice(0, -2), a.slice(0, -2));
    if (b.slice(0, -2) < a.slice(0, -2)) return 1;
    else if (b.slice(0, -2) > a.slice(0, -2)) return -1;
    else return 0;
  });
  console.log("Sorted List", list);
  return list;
};

const DropdownMenu = React.forwardRef((props, ref) => {
  return (
    <div className="flex flex-row justify-between">
      <label className="mb-2">{props.label}</label>
      <select className="" ref={ref}>
        {props.options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
});

const FilterItems = (props) => {
  const ramRef = useRef();
  const storageRef = useRef();
  const brandRef = useRef();

  var listItems = [...props.listItems];

  var ram = [];
  listItems.forEach((item) => {
    if (!ram.includes(item.details.ram)) ram.push(item.details.ram);
  });
  ram.unshift("-- Select --");

  const storage = ["-- Select --"];
  listItems.forEach((item) => {
    if (!storage.includes(item.details.internalStorage))
      storage.push(item.details.internalStorage);
  });

  const brand = ["-- Select --"];
  listItems.forEach((item) => {
    if (!brand.includes(item.details.brand)) brand.push(item.details.brand);
  });

  const applyFilterHandler = () => {
    var updatedList = listItems;
    if (ramRef.current.value !== "-- Select --") {
      updatedList = updatedList.filter(
        (item) => item.details.ram == ramRef.current.value
      );
    }
    if (storageRef.current.value !== "-- Select --") {
      updatedList = updatedList.filter(
        (item) => item.details.internalStorage == storageRef.current.value
      );
    }
    if (brandRef.current.value !== "-- Select --") {
      updatedList = updatedList.filter(
        (item) => item.details.brand == brandRef.current.value
      );
    }
    props.updatedListHandler(updatedList);
  };

  return (
    <Card
      styleCard={`h-[20rem] w-[18rem] flex flex-col justify-evenly absolute top-[22%] left-[2%] z-20`}
    >
      <DropdownMenu label="RAM" options={ram} ref={ramRef} />
      <DropdownMenu
        label="Internal Storage"
        options={storage}
        ref={storageRef}
      />
      <DropdownMenu label="Brand" options={brand} ref={brandRef} />
      <div className="text-right mt-4">
        <button
          onClick={applyFilterHandler}
          className="rounded-lg hover:bg-purple-700 bg-purple-600 text-white px-3 py-1"
        >
          Apply
        </button>
      </div>
    </Card>
  );
};

export default FilterItems;
