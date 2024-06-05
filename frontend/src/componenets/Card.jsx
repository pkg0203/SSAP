import React from 'react'
import { Link } from 'react-router-dom'

// 카테고리 버튼 색 지정
const Card = ({item}) => {
    const categoryStyles = {
        categoryname1: {backgroundColor: "#FFA9A9", color: "#1E1D30"},
        categoryname2: {backgroundColor: "#FFA9A9", color: "#1E1D30"},
        categoryname3: {backgroundColor: "#FFA9A9", color: "#1E1D30"},
        categoryname4: {backgroundColor: "#FFA9A9", color: "#1E1D30"},
        categoryname5: {backgroundColor: "#FFA9A9", color: "#1E1D30"},
        categoryname6: {backgroundColor: "#FFA9A9", color: "#1E1D30"},
        categoryname7: {backgroundColor: "#FFA9A9", color: "#1E1D30"},
        default: {backgroundColor: "#FFFFFF", color: "#1E1D30"},
    };
    const getCategoryStyle = (category) => {
        return categoryStyles[category] || categoryStyles.default;
    }
    const categoryStyle = getCategoryStyle(item?.category);
  return (
    <div className='container mx-auto flex justify-center md:justify-start'>
        <div className='max-w-sm'>
            <div className='bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg'>
                <img className='rounded-t-lg' src={item?.image} alt='image' />
                <div className='py-6 px-5 rounded-lg bg-white'>
                    <Link to={`/item/${item._id}`}>
                        <h1 className='text-gray-700 font-bold text-2x1 mb-8 hover:text-gray-900 hover:cursor-pointer'>{item?.title}</h1>
                    </Link>

                    {/* 카드별 카테고리 표시 */}
                    <div>
                        <button className={'mt-6 py-2 px-4 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300'}
                        style={{
                            backgroundColor: categoryStyle.backgroundColor,
                            color: categoryStyle.color
                        }}
                        >{item?.category}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card