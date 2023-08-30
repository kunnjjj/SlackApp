import React from 'react';
import MessageWindow from '../messageWindow/MessageWindow'
import { User } from '../../types/user';
import './main.css'


type Props = {
    selectedUser: User;
}
const Main = ({ selectedUser }: Props) => {
    return (
        <main id='main'>
            <MessageWindow selectedUser={selectedUser} />
        </main>
    )
}

export default Main;