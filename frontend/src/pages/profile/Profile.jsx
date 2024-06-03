import APiClient from '../api/APiClient'
// import style from "./Profile.module.css"
import {Link, userParams} from "react-router-dom"
import React, {userContext, userEffect, userState} from "react"
// import ProfileTop from "./ProfileTop"

const Profile = () => {
    const {username} = userParams();
    const [users, setUsers] = userState({})
    const [error, setError] = userState(null)
    const [UserMark, setShowUserMark] = userState();
    const [UserLike, setShowUserLike] = userState([]);
    const [Userpoststory, setUserPostStory] = userState([]);
    const [Userpostcomment, setUserPostComment] = userState([]);
    
    const handleGetUserData = () => {
        APiClient.get(`ssap/accounts/${username}/`)
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

    userEffect(() => {
        handleGetUserData();
    }, [username]);

    if (!users) {
        return <div></div>
    }

    return (
        <div className={style.vertical}>
            <ProfileTop user={users} onFollowUpdate={handleGetUserData}/>
            <ProfileMBTIForm user={users} followingRanks={followingRanks} followerRanks={followerRanks}/>
        </div>
    )
}

export default Profile