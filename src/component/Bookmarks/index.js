import React, { useState } from "react";
import axios from "axios";
import Collapsible from "../Collapsible";
import MobileFooter from "../Footer-Mobile";
import MeaningBox from "../MeaningBox";

const Bookmarks = ({ show, close }) => {
  const [bookmarkResult, setBookmarkResult] = useState([])
  let str;
  let bookmarks;
  if (localStorage.getItem("Bookmarks")) {
    str = localStorage.getItem("Bookmarks");
  }
  if (str) {
    bookmarks = str.split(",");
  }

  const handleBookmarkClick = (word) => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => setBookmarkResult(res.data))
      .catch((error) => {
        console.log("Error: ", error);
      });
  }
  return (
    <>
      <div
        className={`${
          show ? "block" : "hidden"
        } lg:hidden fixed top-0 left-0 w-full min-h-screen h-auto z-20 bg-gradient-to-b from-indigo-500 to-purple-400`}
      >
        <div className="container mx-auto p-4 flex w-full justify-between mb-8">
          <div
            onClick={() => close()}
            className="w-12 h-12 flex justify-center align-center pt-2 rounded-full hover:bg-gray-200"
          >
            <i className="fas fa-arrow-left text-indigo-900 cursor-pointer text-2xl"></i>
          </div>
          <div className="w-4/5 text-center text-4xl text-indigo-900">
            Bookmarks
          </div>
        </div>

        {bookmarks && bookmarks.length ? (
          <div className="w-full overflow:auto">
            {bookmarks.map((item, index) => {
              return (
                item !== "" && (
                  <div
                    onClick={() => handleBookmarkClick(item)}
                    key={index}
                    className="text-xl text-indigo-900"
                  >
                    <div className="border-b-2 border-indigo-900 p-4">
                      <Collapsible title={item}/>
                      {
                          bookmarkResult && bookmarkResult.length && <MeaningBox result={bookmarkResult} />
                      }
                    </div>
                    
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
      <MobileFooter />
    </>
  );
};

export default Bookmarks;
