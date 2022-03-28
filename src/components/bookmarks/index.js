import React from "react";
import { BOOKMARKS, NO_BOOKMARK_ADDED_MESSAGE } from "../../utils/utilConstants";
import MobileFooter from "../mobileFooter";

const Bookmarks = ({ show, close, bookmarkClick }) => {
  let str;
  let bookmarks;
  if (localStorage.getItem("Bookmarks")) {
    str = localStorage.getItem("Bookmarks");
  }
  if (str) {
    bookmarks = str.split(",");
  }
  console.log('bookmarks ===>', bookmarks);
  const handleBookmarkClick = (item) => {
    bookmarkClick(item)
    close()
  }
  const handleDeleteBookmarkClick = word => {
    if (bookmarks && bookmarks.includes(word)) {
      let index = bookmarks.indexOf(word);
      bookmarks && bookmarks.splice(index, 1);
      localStorage.setItem("Bookmarks", bookmarks);
    }
  }

  const scrollBehaviour = bookmarks ? "absolute" : "fixed";
  return (
    <>
      <div
        className={`${
          show ? "block" : "hidden"
        } ${scrollBehaviour} lg:hidden top-0 left-0 min-h-screen overflow-hidden z-20 bg-gradient-to-b from-indigo-500 to-purple-400`}
      >
        <div className="fixed top-0 left-0 z-10 p-2 w-full mb-8 bg-indigo-500 shadow-lg">
          <div className="float-left w-10 h-10 rounded-full hover:bg-gray-200">
            <i 
              onClick={() => close()}
              className="fas fa-arrow-left absolute left-5 top-4 text-indigo-900 cursor-pointer text-xl"
            />
          </div>
          <div className="w-4/5 mx-auto text-center text-3xl text-gray-200">
            {BOOKMARKS}
          </div>
        </div>

        {bookmarks && bookmarks.length ? (
          <div className="w-full mb-12 p-4 mt-12 text-xl text-indigo-900 flex flex-wrap">
            {bookmarks.map((item, index) => {
              return (
                item !== "" && (
                  <div className="w-full flex justify-between border-2 border-white rounded-md p-2 cursor-pointer mr-5 mb-4">
                    <div
                      onClick={() => handleBookmarkClick(item)}
                      key={index}
                      className="mr-6"
                    >
                      {item}
                    </div>
                    <i 
                      className="fas fa-trash-alt mt-1 hover:text-red-700"
                      onClick={handleDeleteBookmarkClick(item)}
                    />
                  </div>
                )
              );
            })}
          </div>
        ) : (
          <div className="mt-72 w-full text-center text-2xl text-gray-200 p-4">
            {NO_BOOKMARK_ADDED_MESSAGE}
          </div>
        )}
      </div>
      <MobileFooter />
    </>
  );
};

export default Bookmarks;
