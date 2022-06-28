import React from "react";
import Card from "./Card";
import mobileImg from "../../Images/mobile.png";

const Backdrop = (props) => {
  return (
    <div
      onClick={() => props.expandedProfileDispaly()}
      className="z-30 bg-black opacity-70 h-screen w-screen absolute top-0 left-0"
    ></div>
  );
};

export const Modal = (props) => {
  var item = props.item;

  return (
    <>
      <Backdrop expandedProfileDispaly={props.expandedProfileDispaly} />
      <Card
        styleCard={
          "w-full sm:w-[70%] md:w-[500px] absolute max-h-90% md:h-auto left-[50%] top-[50%] ml-auto mr-auto z-50"
        }
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="text-right">
          <i
            onClick={props.expandedProfileDispaly}
            className="bi bi-x-lg cursor-pointer"
          ></i>
        </div>
        <div className="flex flex-col md:flex-row">
          <img
            src={mobileImg}
            className="w-[40%] h-1/2 rounded-lg"
            alt="Mobile"
          />
          <div className="ml-4 text-sm md:text-base">
            <h2 className="text-lg md:text-2xl font-semibold mb-4">
              {item.name}
            </h2>
            <div>
              <span className="font-medium">RAM : </span>
              {item.details.ram}
            </div>
            <div>
              <span className="font-medium">Internal Storage : </span>
              {item.details.internalStorage}
            </div>
            <div>
              <span className="font-medium">Brand Name : </span>
              {item.details.brand}
            </div>
            <p className="mt-6">
              <span className="font-medium">About this item</span> :{" "}
              {item.description}
            </p>
          </div>
        </div>

        {/* <div>
          <button
            onClick={props.expandedProfileDispaly}
            className="bg-purple-600 text-white py-1 px-3 rounded-md hover:bg-purple-700"
          >
            Close
          </button>
        </div> */}
      </Card>
    </>
  );
};
