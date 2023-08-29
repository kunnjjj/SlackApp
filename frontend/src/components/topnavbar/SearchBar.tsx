import { useContext } from 'react'
import '../../styles/searchbar.css'
import { ChannelNameContext } from '../../contexts/ChannelNameContext'
import React from 'react';

const SearchBar = () => {
    const channelName = useContext(ChannelNameContext);
    return <input className='search-bar' placeholder={`Search ${channelName.toUpperCase()}`}></input>
}
export default SearchBar


// initalState='something else'
// R1
// c1 -> 1, state='kunj'
// c2 -> 2
// c3 -> 3

// R2
// c1 -> 3, state='something else'
// c2 -> 2
// c3 -> 1