// Libs
import React from 'react';

// Style
import './searchBar.css'

type Props = {
    channelName: string
}

const SearchBar = ({ channelName }: Props) => {
    return <input className='search-bar' placeholder={`Search ${channelName.toUpperCase()}`}></input>
}
export { SearchBar }
