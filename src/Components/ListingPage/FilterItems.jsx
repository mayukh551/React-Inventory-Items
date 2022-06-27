import React from "react";
import Card from "../UI/Card";

const DropdownMenu = (props) => {
  const selectEventHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="flex flex-row justify-between">
      <label className="mb-2">{props.label}</label>
      <select className="" onChange={selectEventHandler}>
        {props.options.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

const FilterItems = () => {
  const ram = ["8GB", "12GB"];
  const storage = ["128GB", "256GB"];
  const price = ["12000 - 20000", "20000 - 100000"];
  const brand = ["Samsung", "Xiaomi", "Microsoft"];

  return (
    <Card
      styleCard={`h-[20rem] w-[18rem] flex flex-col justify-evenly absolute top-[22%] left-[2%] z-20`}
    >
      <DropdownMenu label="RAM" options={ram} />
      <DropdownMenu label="Internal Storage" options={storage} />
      <DropdownMenu label="Price" options={price} />
      <DropdownMenu label="Brand" options={brand} />
    </Card>
  );
};

export default FilterItems;
