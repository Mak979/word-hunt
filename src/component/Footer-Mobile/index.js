import React from 'react'
import { useState } from 'react/cjs/react.development'
import Bookmarks from '../Bookmarks'

const MobileFooter = () => {
    const [showBookmarks, setShowBookmarks] = useState(false)
    return (
        <>
        <div className="fixed bottom-0 w-full md:hidden p-2.5 flex justify-evenly bg-indigo-100 rounded-t-3xl shadow-2xl">
            <div onClick={() => setShowBookmarks(true)} className="w-10 h-10 flex justify-center align-center pt-1.5 rounded-full bg-gray-200"><i className="fas fa-bookmark text-indigo-900 cursor-pointer text-xl" title="Bookmarks" ></i></div>
            <div className="w-10 h-10 flex justify-center align-center pt-1.5 rounded-full bg-gray-200"><i className="fas fa-clipboard-list text-indigo-900 cursor-pointer text-xl" title="History" ></i></div>
            
        </div>
        {
            showBookmarks && <Bookmarks show={showBookmarks} close={() => setShowBookmarks(false)}/>
        }
        </>
    )
}

export default MobileFooter
