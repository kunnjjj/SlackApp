//Libs
import React from 'react';

//Components
import { MessageWindow } from './components/messageWindow/MessageWindow'

//Types
import { User } from '../../types/user';

//Styles
import './main.css'

type Props = {
    selectedUser: User;
    userList: User[];
}

const Main = ({ selectedUser, userList }: Props) => {
    return (
        <main id='main'>
            <MessageWindow selectedUser={selectedUser} userList={userList} />
        </main>
    )
}

export { Main };

