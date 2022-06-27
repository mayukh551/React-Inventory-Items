import React, { useRef } from "react";
import Card from "../UI/Card";

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
  // const priceRef = useRef();
  const brandRef = useRef();

  var listItems = props.listItems;

  const ram = ["-- Select --", "6GB", "8GB", "12GB"];
  const storage = ["-- Select --", "64GB", "128GB", "256GB"];
  // const price = ["12000 - 20000", "20000 - 100000"];
  const brand = ["-- Select --", "Samsung", "Xiaomi", "Microsoft"];

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
      {/* <DropdownMenu label="Price" options={price} ref={priceRef} /> */}
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
