import React, { useState } from "react";
import Bookmarks from "../Bookmarks";

const MobileFooter = () => {
  const [showBookmarks, setShowBookmarks] = useState(false);
  return (
    <>
      <div className="fixed bottom-0 w-full lg:hidden p-2.5 flex justify-evenly bg-indigo-100 z-20 rounded-t-2xl">
        <div
          onClick={() => setShowBookmarks(true)}
          className="w-10 h-10 flex justify-center align-center pt-1.5 rounded-full cursor-pointer hover:bg-indigo-200"
          title="Bookmarks"
        >
          <i
            className="fas fa-bookmark text-indigo-600 text-xl"
          ></i>
        </div>
        <div
            title="History"
            className="w-10 h-10 flex justify-center align-center pt-1.5 rounded-full cursor-pointer hover:bg-indigo-200">
          <i
            className="fas fa-clipboard-list text-indigo-600  text-xl"
          ></i>
        </div>
      </div>
      {showBookmarks && (
        <Bookmarks show={showBookmarks} close={() => setShowBookmarks(false)} />
      )}
    </>
  );
};

export default MobileFooter;
