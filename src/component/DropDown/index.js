import React from 'react'

const DropDown = ({className, name}) => {
    return (
        
        <select name={name} className={className}>
            <option value="0">Select</option>
        </select>
        
    )
}

export default DropDown
