import style from "./Profile.module.css"
import {Link, useParams} from "react-router-dom"
import React, {useContext, useEffect, useState} from "react"
import axios from 'axios'


const Profile = () => {
    const {username} = useParams();
    const [users, setUsers] = useState({});
    const [error, setError] = useState(null);
    const [showProfileMyPost, setShowProfileMyPost] = useState(false); // 임시로 정의
    const [UserMark, setShowUserMark] = useState();
    const [UserLike, setShowUserLike] = useState([]);
    const [Userpoststory, setUserPostStory] = useState([]);
    const [Userpostcomment, setUserPostComment] = useState([]);
    
    const handleGetUserData = () => {
        APiClient.get(`http://13.125.129.225/ssap/accounts/${username}/`)
            .then(response => {
                setUsers(response.data)
            })
            .catch(error => {
                setError('권한이 없습니다.');
            });
    }

    const handleToggleShow = () => {
        setShowProfileMyPost(prevState => !prevState);
    };

    useEffect(() => {
        handleGetUserData();
    }, [username]);

    if (!users) {
        return <div></div>
    }

    // 예시 데이터, 실제 데이터로 교체 필요
    const followingRanks = [];
    const followerRanks = []; 

    return (
        <div className={style.vertical}>
            <ProfileTop user={users} onFollowUpdate={handleGetUserData}/>
            <ProfileMBTIForm user={users} followingRanks={followingRanks} followerRanks={followerRanks}/>
        </div>
    )
}

export default Profile