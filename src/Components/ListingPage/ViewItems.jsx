import React, { useState } from "react";
import { useSelector } from "react-redux";
import BackHome from "../UI/BackHome";
import { Modal } from "../UI/Modal";
import FilterItems from "./FilterItems";
import GalleryView from "./GalleryView";
import ListView from "./ListView";
import SortItems from "./SortItems";

const ViewItems = () => {
  // state variables for filter, sort options, and list and gallery view
  const [listView, setView] = useState("list");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showExpandedProfile, setShowExpandedProfile] = useState(false);
  const [itemDisplay, setItemDisplay] = useState();

  const listItems = useSelector((state) => state.items);
  const [updatedList, setUpdatedList] = useState([...listItems]);

  // state variables for holding and displaying filter tags
  const [filterTags, setFilterTags] = useState([]);

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
    setUpdatedList([...listItems]);
    filterMenuHandler();
    setFilterTags([]);
  };

  const showFilterTags = (newTags) => {
    newTags.forEach((tag) => {
      if (!filterTags.includes(tag)) {
        console.log("New Tag");
        setFilterTags([...filterTags, tag]);
      } else console.log("Tag already Implied");
    });
  };

  const removeFilterTag = (tag) => {
    if (filterTags.includes(tag)) {
      var delIndex = filterTags.findIndex((element) => tag === element);
      if (filterTags.length > 1) filterTags.splice(delIndex, 1);
      else filterTags.pop();
    }
    if (filterTags.length === 0) setUpdatedList([...listItems]);
    else {
      // var newList = listItems;
      // filterTags.forEach((tag) => {
      //   newList.filter((item) => )
      // })
      setFilterTags([...filterTags]);
    }
  };

  return (
    <>
      <div className="relative py-7 bg-amber-500 h-screen overflow-y-scroll">
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

        {/* Filter Tags */}
        {filterTags.length > 0 && (
          <div className="mb-7 mt-5 text-center text-white">
            {filterTags.map((tag) => {
              return (
                <span
                  className="cursor-pointer mr-4 rounded-md bg-slate-500 py-1 px-3"
                  key={tag}
                  onClick={() => removeFilterTag(tag)}
                >
                  <span className="mr-2">{tag}</span>
                  <i className="bi bi-x"></i>
                </span>
              );
            })}
          </div>
        )}

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
            addFilterTags={showFilterTags}
            closeMenu={filterMenuHandler}
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
