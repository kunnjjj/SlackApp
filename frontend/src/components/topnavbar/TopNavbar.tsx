//Libs
import React from 'react'

//Components
import { SearchBar } from './components/searchBar/SearchBar';

//Icons
import { UserLogo } from '../../icons/userLogo/UserLogo'; /* TODO CHANGE USERLOGO FROM ICON TO COMPONENT */
import { HistoryIcon } from './icons/historyIcon/HistoryIcon';
import { HelpIcon } from './icons/helpIcon/HelpIcon';

//Styles
import './top-nav-bar.css'

type Props = {
    channelName: string;
}

const TopNavBar = ({ channelName }: Props) => {
    return (
        <nav className='top-nav'>
            <div className='top-nav-left'>
                <HistoryIcon />
            </div>
            <div className='top-nav-mid'>
                <SearchBar channelName={channelName} />
            </div>
            <div className='top-nav-right'>
                <HelpIcon />
                <UserLogo />
            </div>
        </nav>
    )
}

export { TopNavBar };