import {useParams} from "react-router-dom"
import React, {useEffect, useState} from "react"
import axios from 'axios'

const Profile = () => {
    const { username } = useParams(); 
    console.log('Username from URL:', username);
    const [user, setUser] = useState(null); 

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(`http://13.125.129.225/ssap/account/${username}/`);
                console.log('API response:', response.data);
                setUser(response.data);                
            }
            catch (error) {
                console.error('Error fetching latest items:', error);
            }
        };
        getUser();
    }, [username]);

    if (!user) return null; 
    
    return (
        <div class="border-b border-indigo-950">
            <div class="divide-y divide-slate-700 ...">
                <div>{user.username}</div>
                <div>{user.country}</div>
                <div>{user.intro}</div>
                </div>
        </div>

)
}

export default Profile