import React, { useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../componenets/Card';
import Story from '../componenets/Story';

const Search = () => {
    const { query } = useParams();
    const [searchQuery, setSearchQuery] = useState(query);
    const [articleItems, setArticleItems] = useState([]);
    const [storyItems, setStoryItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (query) {
            setSearchQuery(query);
        }
    }, [query]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const queryParam = params.get('query');
        if (queryParam) {
            setSearchQuery(queryParam);
        }
    }, []);

    useEffect(() => {
        const fetchItems = async () => {
            if (!searchQuery) return;
            setLoading(true);
            try {
                const response = await axios.get('http://13.125.129.225/ssap/search', {
                    params: { query: searchQuery }
                });
                setArticleItems(response.data.articles || []); 
                setStoryItems(response.data.stories || []); 
            } catch (err) {
                setError(err.message || 'Error fetching data');
            } finally {
                setLoading(false);
            }
        };
        fetchItems();
    }, [searchQuery]);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className='px-6 lg:px-12 py-20'>
            <h1 className='text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>Search</h1>
            <div className='bg-[#bec8ff] md:max-w-3xl mx-auto p-4 rounded relative flex items-center'>
                <IoSearch className='w-5 h-5 mr-2 text-[#505bff]' />
                <form className='flex w-full'>
                    <input
                        className='bg-[#bec8ff] outline-none w-full placeholder:text-[#505bff]'
                        name='query'
                        type='search'
                        placeholder='Search for Tips!'
                        id='search'
                        required
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                </form>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p>Unknown Error Happens...</p>}

            <div className='mt-20 flex justify-between'>
                <h2 className='text-3xl mt-7 mb-11 font-semibold text-secondary'>Contents</h2>
                <Link to='/contents' className='mt-16 text-lg font-semibold text-secondary'>View All</Link>
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
                <Link to='/community' className='mt-16 text-lg font-semibold text-secondary align-text-bottom'>View All</Link>
            </div>

            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {storyItems.length > 0 ? (
                    storyItems.slice(0, 4).map((item) => (
                        <Story key={item.id} item={item} />
                    ))
                ) : (
                    <p>You're the one who gets to write the first post🥰</p>
                )}
            </ul>
        </div>
    );
};

export default Search;
