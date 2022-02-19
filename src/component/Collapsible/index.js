import React from 'react'

const Collapsible = ({ title, data }) => {
    let newTitle = title.charAt(0).toUpperCase() + title.slice(1)
    return (
        <>
            <div className="w-full flex justify-between">
                <div>{newTitle}</div>
                <div><i className="fas fa-chevron-down"></i></div>
            </div>
        </>
    )
}

export default Collapsible
