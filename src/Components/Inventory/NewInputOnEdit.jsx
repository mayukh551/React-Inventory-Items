import React from "react";

const NewInputOnEdit = (props) => {
  return (
    <>
      <input
        type={props.type}
        value={props.value}
        onChange={(e) => {
          props.updateInput(e.target.value);
        }}
        className={`px-2 rounded-md text-black ${
          props.longInput ? "w-[10rem]" : "w-[5rem] mr-2"
        }`}
      />
    </>
  );
};

export default NewInputOnEdit;
