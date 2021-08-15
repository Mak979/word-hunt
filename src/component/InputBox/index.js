import React from 'react'

const InputBox = ({ className, placeholder, onChange }) => {
    return (

        <input type="text" placeholder={placeholder} className={className} onChange={onChange} />
        
    )
}

export default InputBox
