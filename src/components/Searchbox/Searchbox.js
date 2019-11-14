import React from 'react';
import './Searchbox.css';

const Searchbox = ({ searchfield, searchChange }) => {
    return (
        <div className='searchbox'>
            <input 
                onChange={searchChange} 
                className='searchbox--input' 
                type="search" 
                placeholder='Search robots' 
            />
        </div>
    );
}

export default Searchbox;