import React from 'react'
import { Link } from 'react-router-dom';

const MyProfile = () => {
  return (
    <div className='grid place-items-center px-6 lg:px-12 py-20'>
        <div className='mb-10'>
            <img src="" alt="profile" className='w-40 h-40' />
            <h1 className='text-center'>name</h1>
        </div>
        <div>
            <Link to='/' className='text-xl mr-10 font-semibold text-secondary'>Saved</Link>
            <Link to='/' className='text-xl mr-10 font-semibold text-secondary'>Likes</Link>
            <Link to='/' className='text-xl mr-10 font-semibold text-secondary'>Posts</Link>
            <Link to='/' className='text-xl mr-10 font-semibold text-secondary'>Commnets</Link>
        </div>

        {/* <div className='mt-20 flex justify-between'>
            <h2 className='text-3xl mt-7 mb-11 font-semibold text-secondary'>Save</h2>
            <Link to='/' className='mt-16 text-lg font-semibold text-secondary'>View All</Link>
        </div>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {articleItems.length > 0 ? (
                articleItems.slice(0, 4).map((item) => (
                    <Card key={item.id} item={item} />
                ))
            ) : (
                <p>We don't have any tips to share at this time, but please be patient😊</p>
            )}
        </ul>

        <div className='mt-20 flex justify-between'>
            <h2 className='text-3xl mt-7 mb-11 font-semibold text-secondary'>Community</h2>
            <Link to='/' className='mt-16 text-lg font-semibold text-secondary align-text-bottom'>View All</Link>
        </div>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {storyItems.length > 0 ? (
                storyItems.slice(0, 4).map((item) => (
                    <Story key={item.id} item={item} />
                ))
            ) : (
                <p>You're the one who gets to write the first post🥰</p>
            )}
        </ul> */}
    </div>
  );
};

export default MyProfile