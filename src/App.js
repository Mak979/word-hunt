import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { API_PATH, DEFAULT_NEW_SEARCH_MESSAGE, NO_RESULT_FOUND_MESSAGE, WORD_QUEST } from "./utils/utilConstants";
import InputBox from "./components/inputBox";
import MobileFooter from "./components/mobileFooter";
import Header from "./components/appHeader";
import MeaningBox from "./components/meaningBox";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState([]);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (value) => {
    setInputValue(value);
    axios
      .get(`${API_PATH}/${value}`)
      .then((res) => setResult(res.data))
      .catch((error) => {
        console.log("Error: ", error);
        setResult([]);
        setIsInvalid(true);
      });
  };

  useEffect(() => {
    if (inputValue === "") {
      setResult([]);
      setIsInvalid(false);
    }
  }, [inputValue]);

  const debounce = (fn) => {
    let timer;
    return function () {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(context, args), 500);
    };
  };

  const getData = debounce(handleChange);
  const phoneticText = result && result.length && result[0] && result[0].phonetic ? result[0].phonetic : "";
  const phoneticAudio = result && result.length && result[0] && result[0].phonetics 
    && result[0].phonetics.length && result[0].phonetics[0].audio ? result[0].phonetics[0].audio : "";

  return (
    <div className="w-full min-h-screen h-auto bg-gradient-to-b from-indigo-500 to-purple-400  font-sans text-gray-200">
      <div className="fixed w-full top-0 pt-8 pb-6 bg-indigo-500  z-20 shadow-2xl">
        <Header
          word={inputValue === "" ? WORD_QUEST : inputValue}
          phonetic={inputValue === "" ? "" : phoneticText}
          src={phoneticAudio}
        />
      </div>
      <div className={`container mx-auto p-4 mb-2 lg:w-4/5 ${phoneticAudio || phoneticText ? "mt-36 lg:mt-52" : "mt-28 lg:mt-44"} text-xl lg:text-3xl font-bold text-white`}>
        <InputBox
          className="border-2 border-gray-100 bg-gray-100 text-indigo-700 rounded-lg tracking-widest p-2 lg:p-5 pr-12 lg:pr-16 outline-none w-full"
          onChange={getData}
          onClick={() => setInputValue("")}
          value={inputValue}
        />
      </div>
      <div className="container mx-auto p-5">
        {result.length ? (
          <MeaningBox result={inputValue === "" ? [] : result} />
        ) : (
          <div className="relative top-32 w-full text-center text-3xl text-gray-200 lg:text-5xl p-4">
            {isInvalid
              ? NO_RESULT_FOUND_MESSAGE
              : DEFAULT_NEW_SEARCH_MESSAGE}
          </div>
        )}
      </div>
      <MobileFooter bookmarkClick={getData} />
    </div>
  );
};

export default App;
