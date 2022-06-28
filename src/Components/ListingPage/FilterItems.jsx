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
  const brandRef = useRef();

  var listItems = [...props.listItems];

  var ram = ["-- Select --"];
  listItems.forEach((item) => {
    if (!ram.includes(item.details.ram)) ram.push(item.details.ram);
  });

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
    var tags = [];
    if (ramRef.current.value !== "-- Select --") {
      tags.push(ramRef.current.value);
      updatedList = updatedList.filter(
        (item) => item.details.ram === ramRef.current.value
      );
    }
    if (storageRef.current.value !== "-- Select --") {
      tags.push(storageRef.current.value);
      updatedList = updatedList.filter(
        (item) => item.details.internalStorage === storageRef.current.value
      );
    }
    if (brandRef.current.value !== "-- Select --") {
      tags.push(brandRef.current.value);
      updatedList = updatedList.filter(
        (item) => item.details.brand === brandRef.current.value
      );
    }
    props.addFilterTags(tags);
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
          onClick={props.showOriginalList}
          className="rounded-lg hover:bg-purple-700 bg-purple-600 text-white px-3 py-1 mr-6"
        >
          Clear Filters
        </button>
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
