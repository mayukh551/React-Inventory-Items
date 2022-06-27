import React, { useState } from "react";
import { useSelector } from "react-redux";
import BackHome from "../UI/BackHome";
import FilterItems from "./FilterItems";
import GalleryView from "./GalleryView";
import ListView from "./ListView";
import SortItems from "./SortItems";

const ViewItems = () => {
  const [listView, setView] = useState("list");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const listItems = useSelector((state) => state.items);
  const [updatedList, setUpdatedList] = useState([...listItems]);

  const filterMenuHandler = () => {
    setShowFilterMenu((prevCond) => !prevCond);
  };

  const SortMenuHandler = () => {
    setShowSortMenu((prevCond) => !prevCond);
  };

  const updatedListHandler = (newList) => {
    console.log("New List :", newList);
    filterMenuHandler();
    setUpdatedList([...newList]);
  };

  return (
    <div className="relative py-7 bg-amber-500 min-h-screen">
      <BackHome />
      <div className="py-7 px-28 flex flex-row justify-between items-center">
        <div
          onClick={filterMenuHandler}
          className="cursor-default hover:bg-slate-600 hover:text-white border-2 border-slate-600 text-slate-600 py-1 px-3"
        >
          Filter
        </div>
        <div>
          <span
            onClick={() => setView("list")}
            className="cursor-default mr-4 hover:bg-slate-500 hover:text-white bg-slate-400 rounded-sm py-1 px-3"
          >
            List View
          </span>
          <span
            onClick={() => setView("gallery")}
            className="cursor-default hover:bg-slate-500 hover:text-white bg-slate-400 rounded-sm py-1 px-3"
          >
            Gallery View
          </span>
        </div>
        <div className="relative">
          <div
            onClick={SortMenuHandler}
            className="cursor-default hover:bg-slate-600 hover:text-white border-2 border-slate-600 text-slate-600 py-1 px-3"
          >
            Sort
          </div>
          {showSortMenu && (
            <SortItems
              listItems={listItems}
              updatedListHandler={updatedListHandler}
            />
          )}
        </div>
      </div>
      {listView === "gallery" ? (
        <GalleryView listItems={updatedList} />
      ) : (
        <ListView listItems={updatedList} />
      )}

      {showFilterMenu && (
        <FilterItems
          listItems={listItems}
          updatedListHandler={updatedListHandler}
        />
      )}
    </div>
  );
};

export default ViewItems;
