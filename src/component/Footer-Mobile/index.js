import React from 'react'

const MobileFooter = () => {
    return (
        <div className="fixed bottom-0 w-full md:hidden p-2.5 flex justify-evenly bg-gray-300 rounded-t-lg shadow-2xl">
            <div className="w-10 h-10 flex justify-center align-center pt-1.5 rounded-full bg-indigo-300"><i className="fas fa-bookmark text-indigo-900 cursor-pointer text-xl" title="Bookmarks" ></i></div>
            <div className="w-10 h-10 flex justify-center align-center pt-1.5 rounded-full bg-indigo-300"><i className="fas fa-clipboard-list text-indigo-900 cursor-pointer text-xl" title="History" ></i></div>
            
        </div>
    )
}

export default MobileFooter
