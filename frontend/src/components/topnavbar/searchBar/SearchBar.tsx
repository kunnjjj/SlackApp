import React from 'react';

import { useChannelName } from '../../../contexts/ChannelName'

import './searchBar.css'

const SearchBar = () => {
    const channelName = useChannelName();
    return <input className='search-bar' placeholder={`Search ${channelName.toUpperCase()}`}></input>
}
export default SearchBar
