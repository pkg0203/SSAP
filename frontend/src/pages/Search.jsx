import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { useParams } from 'react-router-dom';

const Search = () => {
    const searchText = useParams();

    const [query,setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window, location.search);
        const queryParam = params.get('query');
        if (queryParam) {
            setQuery(queryParam);
        }
    }, []);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://localhost:5000/api/items`, {
                    params: {q: query}
                });
                setResults(response.data);
            } catch (err) {
                setError(err.message || 'Error fetching data');
            } finally {
                setLoading(false);
            }
        }

        fetchItems();
    }, [query])


  return (
    <div className='px-6 lg:px-12 py-20'>
        <h1 className='text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>Search</h1>
        <div className='bg-[#ffddbe] md:max-w-3xl mx-auto p-4 rounded relative flex items-center'>
            
            <IoSearch className='w-5 h-5 mr-2 text-[#ff6d18]' />
            <input className='bg-[#ffddbe] outline-none w-full placeholder:text-[#ff6d18]' name='query' type='text' placeholder='Search for Tips!' id='search' required="" />
        
        </div>
        <ul>
            {
                results && results.map((item) => (
                    <li key={item._id}>{item.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Search