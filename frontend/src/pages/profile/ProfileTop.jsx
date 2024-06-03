import React from 'react'

const ProfileTop = ({ user, onFollowUpdate }) => {
    return (
        <div>
            <h1>{user.username}</h1>
            <button onClick={onFollowUpdate}>Update Follow</button>
        </div>
    );
};

export default ProfileTop