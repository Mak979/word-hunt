import React from 'react'
import categories from '../../constants'

const DropDown = ({className, name}) => {
    return (
        
        <select name={name} className={className}>
            {categories.map(category => {
                return(
                    <option className="bg-blue-900" label={category.value}>{category.value}</option>
                )
            })}
        </select>
        
    )
}

export default DropDown
