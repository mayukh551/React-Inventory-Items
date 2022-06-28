import React, { useState } from "react";
import { useSelector } from "react-redux";
import BackHome from "../UI/BackHome";
import { Modal } from "../UI/Modal";
import FilterItems from "./FilterItems";
import GalleryView from "./GalleryView";
import ListView from "./ListView";
import SortItems from "./SortItems";

const ViewItems = () => {
  const [listView, setView] = useState("list");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showExpandedProfile, setShowExpandedProfile] = useState(false);
  const [itemDisplay, setItemDisplay] = useState();

  const listItems = useSelector((state) => state.items);
  const [updatedList, setUpdatedList] = useState([...listItems]);

  const filterMenuHandler = () => {
    setShowFilterMenu((prevCond) => !prevCond);
    setShowSortMenu(false);
  };

  const sortMenuHandler = () => {
    setShowSortMenu((prevCond) => !prevCond);
    setShowFilterMenu(false);
  };

  const filteredListHandler = (newList) => {
    console.log("New List :", newList);
    filterMenuHandler();
    setUpdatedList([...newList]);
  };

  const sortedListHandler = (newList) => {
    console.log("New List :", newList);
    sortMenuHandler();
    setUpdatedList([...newList]);
  };

  const expandedProfileDispaly = () => {
    setShowExpandedProfile((prevCond) => !prevCond);
  };

  const itemProfileHandler = (item) => {
    console.log("Expand Profile", item);
    setItemDisplay({ ...item });
    expandedProfileDispaly();
  };

  const showOriginalList = () => {
    setUpdatedList([...listItems])
    filterMenuHandler();
  }

  return (
    <>
      <div
        className="relative py-7 bg-amber-500 h-screen overflow-y-scroll"
      >
        <BackHome />
        <div className="py-7 px-28 flex flex-col gap-y-4 bp_650:flex-row justify-between items-center">
          <div
            onClick={filterMenuHandler}
            id="filter"
            className="inline-block cursor-default hover:bg-slate-600 hover:text-white border-2 border-slate-600 text-slate-600 py-1 px-3"
          >
            Filter
          </div>
          <div className="flex flex-row">
            <span
              onClick={() => setView("list")}
              className="text-sm sm:text-base cursor-default mr-4 hover:bg-slate-500 hover:text-white bg-slate-400 rounded-sm py-1 px-3"
            >
              List View
            </span>
            <span
              onClick={() => setView("gallery")}
              className="text-sm sm:text-base cursor-default hover:bg-slate-500 hover:text-white bg-slate-400 rounded-sm py-1 px-3"
            >
              Gallery View
            </span>
          </div>
          <div className="relative">
            <div
              onClick={sortMenuHandler}
              id="sort"
              className="inline-block cursor-default hover:bg-slate-600 hover:text-white border-2 border-slate-600 text-slate-600 py-1 px-3"
            >
              Sort
            </div>
            {showSortMenu && (
              <SortItems
                listItems={updatedList}
                updatedListHandler={sortedListHandler}
              />
            )}
          </div>
        </div>

        {updatedList.length === 0 ? (
          <div className="text-center text-lg">No Results Found!</div>
        ) : listView === "gallery" ? (
          <GalleryView
            listItems={updatedList}
            itemProfileHandler={itemProfileHandler}
          />
        ) : (
          <ListView
            listItems={updatedList}
            itemProfileHandler={itemProfileHandler}
          />
        )}

        {showFilterMenu && (
          <FilterItems
            listItems={updatedList}
            updatedListHandler={filteredListHandler}
            showOriginalList={showOriginalList}
          />
        )}
      </div>

      {showExpandedProfile && (
        <Modal
          item={itemDisplay}
          expandedProfileDispaly={expandedProfileDispaly}
        />
      )}
    </>
  );
};

export default ViewItems;
