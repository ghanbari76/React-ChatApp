import React from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
//Components
import Navbar from './Navbar';
//Styles
import styles from './Chats.module.css';

const Chats = () => {
    const history = useHistory();
    const logoutHandler = async () => {
        await auth.signOut();
        history.push("/")
    }
    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler} />
        </div>
    );
};

export default Chats;