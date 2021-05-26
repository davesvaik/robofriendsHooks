import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
        <input 
        className='pa2 br4 ba2 b--purple bg-lightest-blue'
        type='search' 
        placeholder='search robots' 
        onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;