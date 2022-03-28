import React from "react";

const MeaningBox = ({ result }) => {
  return (
    <>
      {result.map((item, index) => (
        <div key={index} className="mb-14">
          {result[index]?.meanings.map((mean, key) =>
            mean.definitions.map((item, index) => (
              <div
                key={index}
                className="w-full lg:w-4/5 lg:mx-auto shadow-xl p-8 bg-gray-100 rounded-lg text-indigo-700 mb-4 leading-relaxed"
              >
                <div className="mb-2 text-lg">
                  <span className="itallic text-gray-600 font-semibold text-lg">{`Definition(${
                    mean.partOfSpeech ? mean.partOfSpeech : ""
                  }) - `}</span>{" "}
                  &nbsp;
                  <span className="text-lg tracking-wide">
                    {item.definition}
                  </span>
                </div>
                {item && item.example && item.example.length > 0 && (
                  <div className="mb-2">
                    <span className="text-lg text-gray-600 font-semibold">
                      Example -{" "}
                    </span>
                    <span>{item.example}</span>
                  </div>
                )}
                {item && item.synonyms && item.synonyms.length > 0 && (
                  <div className="mb-2">
                    <span className="text-lg text-gray-600 font-semibold">
                      Synonym(s) -{" "}
                    </span>
                    <span>{item.synonyms.splice(0, 5).join(", ")}</span>{" "}
                  </div>
                )}
                {item && item.antonyms && item.antonyms.length > 0 && (
                  <div className="mb-2">
                    <span className="text-lg text-gray-600 font-semibold">
                      Antonym(s) -{" "}
                    </span>
                    <span>{item.antonyms.join(", ")} </span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      ))}
    </>
  );
};

export default MeaningBox;
