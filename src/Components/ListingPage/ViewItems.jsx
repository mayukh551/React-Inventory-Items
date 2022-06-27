import React, { useState } from "react";
import BackHome from "../UI/BackHome";
import GalleryView from "./GalleryView";
import ListView from "./ListView";

const ViewItems = () => {
  const [listView, setView] = useState(false);

  return (
    <div className="py-7">
      <BackHome />
      <div className="py-7 px-28 flex flex-row justify-between items-center">
        <div className="cursor-default hover:bg-slate-600 hover:text-white border-2 border-slate-600 text-slate-600 py-1 px-3">
          Filter
        </div>
        <div>
          <span className="cursor-default mr-4 hover:bg-slate-500 hover:text-white bg-slate-400 rounded-sm py-1 px-3">
            List View
          </span>
          <span className="cursor-default hover:bg-slate-500 hover:text-white bg-slate-400 rounded-sm py-1 px-3">
            Gallery View
          </span>
        </div>
        <div className="cursor-default hover:bg-slate-600 hover:text-white border-2 border-slate-600 text-slate-600 py-1 px-3">
          Sort
        </div>
      </div>
      {listView ? <GalleryView /> : <ListView />}
    </div>
  );
};

export default ViewItems;
