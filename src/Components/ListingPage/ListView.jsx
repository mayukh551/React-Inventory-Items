import React from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";

const ListView = () => {
  const listItems = useSelector((state) => state.items);

  return (
    <div className="flex flex-col items-center">
      {listItems.map((item) => {
        return (
          <Card styleCard={"mb-5 w-[20rem]"}>
            <h3>{item.name}</h3>
            <span>{item.details.ram}</span>{" "}
            <span>{item.details.internalStorage}</span>
            <span>{item.details.brand}</span>
            <div>{item.price}</div>
          </Card>
        );
      })}
    </div>
  );
};

export default ListView;
