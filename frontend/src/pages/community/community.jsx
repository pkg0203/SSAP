import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Story from '../../componenets/Story';
import axios from 'axios'

function CategoryItem({ name, href, backgroundColor, color }) {
    const style = {
        backgroundColor: backgroundColor,
        color: color,
        borderColor: color
    };
    return (
        <div>
            <Link to={href} className='rounded-full'>
                <div className='uppercase px-6 py-2 text-center rounded-full' style={style}>{name}</div>
            </Link>
        </div>
    );
}

function CategoryList() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-8 mb-20'>
            <CategoryItem name="SHOPPING" href="/categories/SHOPPING" backgroundColor="#FFA9A9" color="#1E1D30" />
            <CategoryItem name="TRANSPORTATION" href="/categories/TRANSPORTATION" backgroundColor="#FFD8A9" color="#1E1D30" />
            <CategoryItem name="FOOD" href="/categories/FOOD" backgroundColor="#D4FFA9" color="#1E1D30" />
            <CategoryItem name="HEALTH" href="/categories/HEALTH" backgroundColor="#A9FFD1" color="#1E1D30" />
            <CategoryItem name="FESTIVAL" href="/categories/FESTIVAL" backgroundColor="#A9F0FF" color="#1E1D30" />
            <CategoryItem name="LIFESTYLE" href="/categories/LIFESTYLE" backgroundColor="#A9BCFF" color="#1E1D30" />
        </div>
    );
}

const Community = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getStories = async () => {
            try {
                const response = await axios.get('http://13.125.129.225/ssap/stories/');
                setItems(response.data);   
                console.log(response.data)             
            }
            catch (error) {
                console.error('Error fetching latest items:', error);
            }
        };
        getStories();
    }, []);

    return (
        <div className='px-5 xl:px-10 py-16'>
            <CategoryList />
            <div className="container mx-auto px-4">
                <div className="max-w-screen-xl mx-auto">
                    <div className="sm:mx-4 md:mx-8 lg:mx-40 xl:mx-60 2xl:mx-60">
                    {items.map((item, imdex) => (
                        <Story key={item.id} item={item} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Community;