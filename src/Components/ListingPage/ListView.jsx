import React from "react";
// import { useSelector } from "react-redux";
import Card from "../UI/Card";

const ListView = (props) => {
  var listItems = props.listItems;

  return (
    <div className="flex flex-col items-center">
      {listItems.map((item) => {
        return (
          <div
            className="hover:scale-105 transition-transform  w-[95%] sm:w-[28rem]"
            onClick={() => props.itemProfileHandler(item)}
            key={item.name}
          >
            <Card styleCard={"mb-5"}>
              <h3 className="mb-3">{item.name}</h3>
              <div className="mb-3 flex flex-row justify-between">
                <span className="mr-">{item.details.ram}</span>
                <span className="mr-">{item.details.internalStorage}</span>
                <span className="mr-">{item.details.brand}</span>
              </div>
              <div>{item.price}</div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
