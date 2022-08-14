import React from "react";

const SortItems = (props) => {
  const selectionHandler = (event) => {
    var updatedList = [...props.listItems];
    const sortOption = event.target.value;

	// slice(3) to ignore the first 3 characters : 'R' , 's' and <space>

    if (sortOption === "Highest - Lowest") 
	  {
      updatedList.sort((a, b) => {
        console.log(a.price, b.price);
        if (b.price.slice(3) > a.price.slice(3)) 
			return 1;

        else if (b.price.slice(3) < a.price.slice(3)) 
			return -1;

      return 0;
      });
    } 
	
	else if (sortOption === "Lowest - Highest") {
      updatedList.sort((a, b) => {
        if (b.price.slice(3) < a.price.slice(3)) 
			return 1;

        else if (b.price.slice(3) > a.price.slice(3)) 
			return -1;

      return 0;
      });
    }
    props.updatedListHandler(updatedList);
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
