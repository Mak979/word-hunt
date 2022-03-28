import React, { useState, useEffect } from "react";
import { LISTENING, SEARCH_ANY_WORD, TRY_AGAIN } from "../../utils/utilConstants";

const InputBox = ({ className, onChange, onClick, value }) => {
  const [initValue, setInitValue] = useState("");
  const [placeholder, setPlaceholder] = useState(SEARCH_ANY_WORD);
  useEffect(() => {
    if (value) {
      setInitValue(value);
    }
  }, [value])
  const handleInputChange = (e) => {
    setInitValue(e.target.value);
    onChange(e.target.value);
  }
  const handleMicClick = () => {
    const speechRecognition = window.webkitSpeechRecognition;
    const recognition = new speechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-IN';
    let finalTranscript = "";

    recognition.start();
    recognition.onstart = () => {
      setPlaceholder(LISTENING);
    }
    recognition.onerror = () => {
      setPlaceholder(TRY_AGAIN);
    }
    recognition.onend = () => {
      if (finalTranscript !== "") {
        setInitValue(finalTranscript);
        onChange(finalTranscript)
      } else {
        setPlaceholder(SEARCH_ANY_WORD);
      }
    }
    recognition.onresult = event => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += `${transcript}`;
      }
    }
  }
  return (
    <div className="flex relative">
      <input
        type="text"
        value={initValue ? initValue : value}
        placeholder={placeholder}
        className={className}
        onChange={e => handleInputChange(e)}
      />
      <div className="absolute top-2.5 lg:top-6 right-5">
        {!initValue  ? (
          <i
            className="fas fa-microphone text-indigo-700 cursor-pointer"
            onClick={handleMicClick}
          ></i>
        ) : (
          <i
            className="fa fa-times text-indigo-700"
            onClick={() => {
              onClick();
              setPlaceholder(SEARCH_ANY_WORD)
              setInitValue("");
            }}
          />
        )}        
      </div>
    </div>
  );
};

export default InputBox;
