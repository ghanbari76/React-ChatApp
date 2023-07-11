import React,{ useState,useEffect,useContext } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from "react-chat-engine";
import axios from 'axios';

//Components
import Navbar from './Navbar';

//Styles
import styles from './Chats.module.css';

//Context
import { AuthContext } from '../contexts/AuthContextProvider';

//Spinner
import spinner from '../assets/Spinner.gif';

const Chats = () => {

    const [loading,setLoading] = useState(true);
    const user = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        console.log(user)
        if (!user) {
            history.push("/");
            return;
        }

        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id" : "7fe52bcc-1c5d-427b-bb23-3360d2f18248",
                "user-name" : user.email,
                "user-secret" : user.uid
            }
        })
        .then(() => {
            setLoading(false)
        }) 
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email",user.email);
            formdata.append("username",user.email);
            formdata.append("secret",user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formdata.append("avatar", avatar, avatar.name)
                    axios.post("https://api.chatengine.io/users/", formdata, {
                        headers: {
                            "private-key" : "9115c405-4f23-400f-9a24-3abe50c7dc5b"
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                })
        })

    }, [user, history])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type:"image/jpeg"})
    }

    const logoutHandler = async () => {
        await auth.signOut();
        history.push("/")
    }
    if (!user || loading) {
        return  <div>
                    <img src={spinner} alt='loading' />
                    <h1>Loading ...</h1>
                </div>
    }
    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler} />

            <ChatEngine 
                height="calc (100vh - 50px)" 
                projectID = "7fe52bcc-1c5d-427b-bb23-3360d2f18248"
                userName = {user.email}
                userSecret = {user.uid}
            />
        </div>
    );
};

export default Chats;