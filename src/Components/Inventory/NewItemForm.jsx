import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemSliceActions } from "../../Store/centralDataRedux";

const NewItemForm = (props) => {
  const dispatch = useDispatch();
  const [ifEmptyForm, setIfEmptyForm] = useState(false);
  const listItems = useSelector((state) => state.items);

  const nameRef = useRef(null);
  const ramRef = useRef(null);
  const storageRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);
  const brandRef = useRef(null);

  const labelAndTypes = [
    { label: "Item Name", type: "text", elementRef: nameRef },
    { label: "RAM", type: "number", elementRef: ramRef },
    { label: "Internal Storage", type: "number", elementRef: storageRef },
    { label: "Price", type: "number", elementRef: priceRef },
    { label: "Description", type: "text", elementRef: descriptionRef },
    { label: "Brand Name", type: "text", elementRef: brandRef },
  ];

  const submitEventHandler = () => {
    var ifEmpty = false;

    labelAndTypes.forEach((element) => {
      console.log(element.elementRef.current.value);
      if (element.elementRef.current.value === "") ifEmpty = true;
    });

    if (ifEmpty) {
      setIfEmptyForm(true);
      return;
    }

    var enteredNameInput = labelAndTypes[0].elementRef.current.value;
    var enteredRamInput = labelAndTypes[1].elementRef.current.value;
    var enteredStorageInput = labelAndTypes[2].elementRef.current.value;
    var enteredPriceInput = labelAndTypes[3].elementRef.current.value;
    var enteredDescInput = labelAndTypes[4].elementRef.current.value;
    var enteredBrandInput = labelAndTypes[5].elementRef.current.value;

    const newItem = {
      id: listItems.length + 1,
      name: enteredNameInput,
      price: "Rs " + enteredPriceInput,
      description: enteredDescInput,
      details: {
        ram: enteredRamInput + "GB",
        internalStorage: enteredStorageInput + "GB",
        brand: enteredBrandInput,
      },
    };

    console.log(newItem);

    dispatch(itemSliceActions.addItem(newItem));
    props.addNewEventHandler();
  };

  return (
    <div className="flex justify-center mb-10">
      <div className="rounded-2xl bg-purple-500 p-5 w-[45rem]">
        <div className="flex justify-evenly flex-wrap ">
          {labelAndTypes.map((element, index) => {
            return (
              <div key={index} className="flex flex-col">
                <label className="mb-2" htmlFor={`${index}`}>
                  {element.label}
                </label>
                <input
                  className="mb-4 max-w-lg rounded-md py-2 px-2"
                  type={element.type}
                  id={`${index}`}
                  ref={element.elementRef}
                />
              </div>
            );
          })}
        </div>
        <div className="w-full mt-5 pr-8 pb-5 text-right">
          <button
            className="mr-7 hover:bg-fuchsia-800 bg-fuchsia-700 text-white py-2 px-4 rounded-lg"
            onClick={props.addNewEventHandler}
          >
            Cancel
          </button>
          <button
            onClick={submitEventHandler}
            className="hover:bg-fuchsia-800 bg-fuchsia-700 text-white py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </div>
        {ifEmptyForm && (
          <p className="font-semibold text-red-300">Empty Input is Invalid!</p>
        )}
      </div>
    </div>
  );
};

export default NewItemForm;
