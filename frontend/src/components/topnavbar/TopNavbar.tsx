import '../../styles/top-navbar.css'
import HelpIcon from '../utils/HelpIcon'
import UserLogo from '../utils/UserLogo'
import SearchBar from './SearchBar'
import HistoryIcon from '../utils/HistoryIcon'
import React from 'react'

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