import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery) {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    return (
        <div className='px-5 xl:px-10 md:w-1/2 mb-10'>
            <h1 className='mt-6 mb-10 text-5xl x1:text-6xl text-center font-bold text-[#1E1D30] leading-nomal xl:leading-relaxed'>Choose the Tips you need!</h1>
            <form onSubmit={handleSearch} className='bg-[#bec8ff] p-4 rounded relative flex items-center'>
                <IoSearch className='w-5 h-5 mr-2 text-[#505bff]' />
                <input
                    className='bg-[#bec8ff] outline-none w-full placeholder:text-[#505bff]'
                    name='query'
                    type='text'
                    placeholder='Search for Tips!'
                    id='search'
                    required
                    value={searchQuery}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
}

export default Hero;
