import React, { useState } from "react";
import { useSelector } from "react-redux";
import BackHome from "../UI/BackHome";
import FilterItems from "./FilterItems";
import GalleryView from "./GalleryView";
import ListView from "./ListView";

const ViewItems = () => {
  const [listView, setView] = useState("list");
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const filterMenuHandler = () => {
    setShowFilterMenu((prevCond) => !prevCond);
  };

  const listItems = useSelector((state) => state.items);

  return (
    <div className="relative py-7 bg-amber-500">
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
        <div className="cursor-default hover:bg-slate-600 hover:text-white border-2 border-slate-600 text-slate-600 py-1 px-3">
          Sort
        </div>
      </div>
      {listView === "gallery" ? (
        <GalleryView listItems={listItems} />
      ) : (
        <ListView listItems={listItems} />
      )}

      {showFilterMenu && <FilterItems />}
    </div>
  );
};

export default ViewItems;
