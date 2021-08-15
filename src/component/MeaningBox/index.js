import React from 'react'

const MeaningBox = ({ result }) => {
    return (
        <>
                {
                result.length && 
                    <div className="mt-16">
                        {result[0].meanings.map((item, index) => (
                            <div key={index} className="w-full p-8 bg-white border-b-4 rounded-md text-blue-800 my-4 leading-relaxed">
                                <p><span className="itallic text-gray-500 text-base">{`(${item.partOfSpeech}) - `}</span> &nbsp; <span className="text-lg tracking-wide">{item.definitions[0].definition}</span></p>
                                <span>Example - </span><span>{item.definitions[0].example}</span>
                                <br></br>
                                <h4>Synonym(s) - {'synonyms'} </h4>
                                <h4>Antonym(s) - {'antonyms'} </h4>
                            </div>
                    ))}    
                </div>   
            }
        </>
    )
}

export default MeaningBox
