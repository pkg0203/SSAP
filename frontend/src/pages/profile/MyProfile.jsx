import React, { useEffect, useState } from 'react'
import ProfileWrapper from './ProfileWrapper';
import { useParams } from 'react-router';
import axios from 'axios';
import Card from '../../componenets/Card';

const MyProfile = () => {
  const {profile_menu, username} = useParams();
  const [articleItems, setArticleItems] = useState([]);

  useEffect(() => {
    const fetchSavedArticleData = async () => {
      try {
        const response = await axios.get(`http://13.125.129.225/ssap/accounts/${profile_menu}/article/${username}/`);
        setArticleItems(response.data);                
      }catch (err) {
      }
    };
    fetchSavedArticleData();
  }, [profile_menu, username]);

  return (
    <div className='grid place-items-center px-6 lg:px-12 py-20'>
        <div className='grid place-items-center mb-10'>
            <img src="" alt="profile" className='w-40 h-40' />
            <h1 className='text-xl font-semibold'>{username}</h1>
            <h2 className=''>nation</h2>
            <h3 className=''>No introduction has been entered yet.</h3>
        </div>
        <div>
            <ProfileWrapper />
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
                articleItems.length > 0 ? articleItems.slice(0, 4).map((item, index) => (
                    <Card key={item.id} item={item} />
                )): <p>You don't have any saved content yet😊 </p>
            }
        </ul>
    </div>
  );
};

export default MyProfile