import React from "react";

const Bookmarks = ({ show, close }) => {
  let str;
  let bookmarks;
  if (localStorage.getItem("Bookmarks")) {
    str = localStorage.getItem("Bookmarks");
  }
  if (str) {
    bookmarks = str.split(",");
  }
  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } md:hidden fixed top-0 container min-h-screen h-auto z-20 bg-gray-100 container mx-auto p-5`}
    >
      <div className="flex w-full justify-between mb-8">
        <div
          onClick={() => close()}
          className="w-12 h-12 flex justify-center align-center pt-2 rounded-full bg-gray-200"
        >
          <i className="fas fa-arrow-left text-indigo-900 cursor-pointer text-2xl"></i>
        </div>
        <div className="w-4/5 text-center text-4xl text-indigo-900">
          Bookmarks
        </div>
      </div>

      {bookmarks && bookmarks.length ? (
        <div className="w-full flex flex-wrap">
          {bookmarks.map((item, index) => {
            return (
              item !== "" && (
                <div
                  onClick={() => close()}
                  key={index}
                  className="border-2 border-indigo-900 rounded-2xl py-2.5 px-3 text-xl text-indigo-900 m-3"
                >
                  {item}
                </div>
              )
            );
          })}
        </div>
      ) : (
        <div className="mt-36 w-full text-center text-2xl text-indigo-500 p-4">
          Sorry Pal, No Bookmarks added. Let's add one to get you started.
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
