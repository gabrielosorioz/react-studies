import React, { useState } from 'react'

const Dropdown = () => {

    const [options, setOptions] = useState('');
    
    return (

    <div className="dropdown">
        <div className="dropdown-btn">Select your option</div>
        <div className="dropdown-content">
            <div className="dropdown-search"><input type="text" placeholder='Pesquisar'/></div>
            <ul className="dropdown-options">
                <li>Options</li>
                <li>Options</li>
                <li>Options</li>
                <li>Options</li>
            </ul>
            <div className="dropdown-add"><button></button></div>
        </div>
    </div>
  )
}

export default Dropdown