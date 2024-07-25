import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CategoryWrapper from './CategoryWrapper';
import axios from 'axios';
import Card from '../../componenets/Card';
import Story from '../../componenets/Story';

const CategoryPage = () => {
    const {category} = useParams();
    const [articleItems, setArticleItems] = useState([]);
    const [storyItems, setStoryItems] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategoryData = async () => {
            // setLoading(true);
            try {
                const response = await axios.get(`http://13.125.129.225/ssap/categories/${category}`);
                setArticleItems(response.data.Articles); 
                setStoryItems(response.data.Stories); 

            } catch (err) {              
            }
        };
        fetchCategoryData();
    }, [category]);

  return (
    <div className='px-6 lg:px-12 py-20'>
        <h1 className='text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize'>{category}</h1>
        <CategoryWrapper />

        <div className='mt-20 flex justify-between'>
            <h2 className='text-3xl mt-7 mb-11 font-semibold text-secondary'>Contents</h2>
            <Link to="/contents" className='mt-16 text-lg font-semibold text-secondary'>View All</Link>
        </div>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
                articleItems.length > 0 ? articleItems.slice(0, 4).map((item, index) => (
                    <Card key={item.id} item={item} />
                )): <p>We don't have any tips to share at this time, but please be patient😊 </p>
            }
        </ul>

        <div className='mt-20 flex justify-between'>
            <h2 className='text-3xl mt-7 mb-11 font-semibold text-secondary'>Community</h2>
            <Link to="/community" className='mt-16 text-lg font-semibold text-secondary align-text-bottom'>View All</Link>
        </div>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
                storyItems.length > 0 ? storyItems.slice(0, 4).map((item, index) => (
                    <Story key={item.id} item={item} />
                )): <p>You're the one who gets to write the first post🥰</p>
            }
        </ul>
    </div>
  )
}

export default CategoryPage