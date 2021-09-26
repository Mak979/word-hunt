import React, { useState } from "react";

const InputBox = ({ className, placeholder, value, onChange, onClick }) => {
  const [initValue, setInitValue] = useState("");
  return (
    <div className="flex relative">
      <input
        type="text"
        value={initValue}
        placeholder={placeholder}
        className={className}
        onChange={(e) => {
          onChange(e);
          setInitValue(e.target.value);
        }}
      />
      {initValue && (
        <div className="absolute top-2.5 md:top-6 right-5">
          <i
            className="fa fa-times text-gray-500"
            onClick={() => {
              onClick();
              setInitValue("");
            }}
          ></i>
        </div>
      )}
    </div>
  );
};

export default InputBox;
