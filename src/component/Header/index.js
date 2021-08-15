import React, { useState } from 'react'

const Header = ({word, phonetic, src}) => {
    const [showAudio, setShowAudio] = useState(false)
    const handleAudio = () => {
        showAudio ? setShowAudio(false) : setShowAudio(true)
    }
    return (
        <>
            <div className="text-5xl md:text-8xl text-center text-gray-300 tracking-wider uppercase mb-8">
                <h1>{word}</h1>
            </div>
            { phonetic && 
                <div className="text-center">
                    <span className="mr-4 text-xl md:text-4xl text-white">{phonetic}</span>
                    <i className="fas fa-volume-up text-xl md:text-3xl cursor-pointer" onClick={handleAudio}></i>
                    {showAudio && <audio autoPlay>
                            <source src={src} />
                        </audio>}
                </div>
            }
        </>
    )
}

export default Header
