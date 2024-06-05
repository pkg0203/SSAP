import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../../componenets/Card';
import { Link } from 'react-router-dom';

const Contents = () => {
  const [items, setItems] = useState([]);
    useEffect(() => {
        const getLatesItems = async () => {
            const response = await axios.get('http://127.0.0.1:8000/ssap/articles/')
        }

        getLatesItems()
    }, [])

  return (
    <div className='px-5 xl:px-10 py-16'>
        <h2 className='text-3xl mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>All Tips</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
                items.length > 0 ? items.map((item, index) => (
                    <Card key={item._id} item={item} />
                )) : <p>Loading...</p>
            }
        </div>
    </div>
  )
}

export default Contents