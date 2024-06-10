import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../../componenets/Card';
import { Link } from 'react-router-dom';

const LatestContent = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getLatestItems = async () => {
            try {
                const response = await axios.get('http://13.125.129.225/ssap/articles/');
                setItems(response.data); // Update state with response data                
            }
            catch (error) {
                console.error('Error fetching latest items:', error);
            }
        };        
        getLatestItems();
    }, []);

    console.log(items)

  return (
    <div className='px-5 xl:px-10 py-16'>
        <h2 className='text-3xl mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>Just came up!</h2>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
                items.length > 0 ? items.slice(0, 4).map((item, index) => (
                    <Card key={item.id} item={item} />
                )) : <p>Loading...</p>
            }
        </div>

        <div className='sm:w-64 mx-auto mt-16'>
            <Link to="/contents">
                <button className='py-4 px-8 hover:bg-[#64ceff] text-secondary hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#64ceff] focus:outline-none rounded-lg'>View All Tips!</button>
            </Link>
        </div>
    </div>
  )
}

export default LatestContent