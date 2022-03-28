import React from "react";

const Bookmarks = ({ show, close, bookmarkClick }) => {
  let str;
  let bookmarks;
  if (localStorage.getItem("Bookmarks")) {
    str = localStorage.getItem("Bookmarks");
  }
  if (str) {
    bookmarks = str.split(",");
  }
  const handleBookmarkClick = (item) => {
    bookmarkClick(item)
    close()
  }
  return (
    <>
      <div
        className={`${
          show ? "block" : "hidden"
        } lg:hidden fixed top-0 left-0 w-full min-h-screen h-auto z-20 bg-gradient-to-b from-indigo-500 to-purple-400`}
      >
        <div className="p-2 w-full mb-8">
          <i 
            onClick={() => close()}
            className="fas fa-arrow-left absolute left-5 top-4 text-indigo-900 cursor-pointer text-2xl"
          />
          <div className="w-4/5 mx-auto text-center text-4xl text-indigo-900">
            Bookmarks
          </div>
        </div>

        {bookmarks && bookmarks.length ? (
          <div className="w-full p-4 text-xl text-indigo-900 flex flex-wrap">
            {bookmarks.map((item, index) => {
              return (
                item !== "" && (
                  <div className="w-auto flex justify-between border-2 border-white rounded-md p-2 cursor-pointer mr-6 mb-4">
                    <div
                      onClick={() => handleBookmarkClick(item)}
                      key={index}
                      className="mr-6"
                    >
                      {item}
                    </div>
                    <i class="fas fa-arrow-right mt-1"></i>
                  </div>
                )
              );
            })}
          </div>
        ) : (
          <div className="mt-36 w-full text-center text-2xl text-indigo-900 p-4">
            Sorry Pal, No Bookmarks added. Let's add one to get you started.
          </div>
        )}
      </div>
    </>
  );
};

export default Bookmarks;
