import React from 'react'

import HistoryIcon from './historyIcon/HistoryIcon'
import SearchBar from './searchBar/SearchBar'
import UserLogo from '../userLogo/UserLogo'
import HelpIcon from './helpIcon/HelpIcon'

import './top-navbar.css'

const TopNavbar = () => {
    return (
        <nav className='top-nav'>
            <div className='top-nav-left'>
                <HistoryIcon />
            </div>
            <div className='top-nav-mid'>
                <SearchBar />
            </div>
            <div className='top-nav-right'>
                <HelpIcon />
                <UserLogo />
            </div>
        </nav>
    )
}

export default TopNavbar;