import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../../componenets/Card'
import { Link } from 'react-router-dom'

function CategoryItem({ name, href, backgroundColor, color }) {
    const style = {
        backgroundColor: backgroundColor,
        color: color,
        borderColor: color
    }
    return (
        <div>
            <Link to={href} className='rounded-full'>
                <div className='uppercase px-6 py-2 text-center rounded-full' style={style}>{name}</div>
            </Link>
        </div>
    )
}

function CategoryList() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-8'>
            <CategoryItem name="shopping" href="/categories/shopping" backgroundColor="#FFA9A9" color="#1E1D30" />
            <CategoryItem name="traffic" href="/categories/traffic" backgroundColor="#FFD8A9" color="#1E1D30" />
            <CategoryItem name="food" href="/categories/food" backgroundColor="#D4FFA9" color="#1E1D30" />
            <CategoryItem name="health" href="/categories/health" backgroundColor="#A9FFD1" color="#1E1D30" />
            <CategoryItem name="festival" href="/categories/festival" backgroundColor="#A9F0FF" color="#1E1D30" />
            <CategoryItem name="lifestyle" href="/categories/lifestyle" backgroundColor="#A9BCFF" color="#1E1D30" />
        </div>
    );
}

const Contents = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
      const getContents = async () => {
          try {
              const response = await axios.get('http://13.125.129.225/ssap/articles/');
              setItems(response.data); // Update state with response data                
          }
          catch (error) {
              console.error('Error fetching latest items:', error);
          }
      };        
      getContents();
  }, []);

  console.log(items)

  return (
    <div className='px-5 xl:px-10 py-16'>
        <CategoryList />
        <h2 className='text-3xl mt-10 mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>Recommended Content</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
                items.length > 0 ? items.map((item, index) => (
                    <Card key={item.id} item={item} />
                )) : <p>Loading...</p>
            }
        </div>
    </div>
  )
}

export default Contents