import React, { useState } from 'react'

const Header = ({word, phonetic, src}) => {
    const [showAudio, setShowAudio] = useState(false)
    const [bookmarked, setBookmarked] = useState(false)
    const handleAudio = () => {
        showAudio ? setShowAudio(false) : setShowAudio(true)
    }
    const handleBookmarkClick = () => {
        console.log('clicked');
        bookmarked ? setBookmarked(false) : setBookmarked(true)
    }
    return (
        <>
            <div className="w-full flex justify-center text-4xl md:text-8xl text-center text-gray-300 tracking-wider uppercase mb-4 md:mb-8">
                <div className="px-3 overflow-ellipsis overflow-hidden"><h1 className="text-center">{word}</h1></div>
                {phonetic && <div className="w-1/12 -mt-4 md:-mt-10"><i onClick={handleBookmarkClick} className={`${bookmarked ? 'fas' : 'far'} fa-bookmark cursor-pointer text-2xl md:text-4xl text-center ml-4`} title="Add to Bookmarks" ></i></div>}
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
