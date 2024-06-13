import React from 'react'
import { Link } from 'react-router-dom'

// 카테고리 버튼 색 지정
const Card = ({item}) => {
    const categoryStyles = {
        SHOPPING: {backgroundColor: "#FFA9A9", color: "#1E1D30"},
        TRANSPORTATION: {backgroundColor: "#FFD8A9", color: "#1E1D30"},
        FOOD: {backgroundColor: "#D4FFA9", color: "#1E1D30"},
        HEALTH: {backgroundColor: "#A9FFD1", color: "#1E1D30"},
        FESTIVAL: {backgroundColor: "#A9F0FF", color: "#1E1D30"},
        LIFESTYLE: {backgroundColor: "#A9BCFF", color: "#1E1D30"},
        default: {backgroundColor: "#FFFFFF", color: "#1E1D30"},
    };
    const getCategoryStyle = (category) => {
        return categoryStyles[category] || categoryStyles.default;
    }
    const categoryStyle = getCategoryStyle(item?.category);

    console.log({item})

  return (
    <div className='container mx-auto flex justify-center md:justify-start'>
        <div className='max-w-sm'>
            <div className='bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg'>
                <img className='rounded-t-lg' src={item?.img} alt='image' />
                <div className='py-6 px-5 rounded-lg bg-white'>
                    <Link to={`/contents/${item.id}`}>
                        <h1 className='text-gray-700 font-bold text-2x1 mb-8 hover:text-gray-900 hover:cursor-pointer'>{item?.title}</h1>
                    </Link>

                    {/* 카드별 카테고리 표시 */}
                    <div className='flex justify-between items-center flex-wrap'>
                        <button className={'mt-6 py-2 px-4 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300'}
                        style={{
                            backgroundColor: categoryStyle.backgroundColor,
                            color: categoryStyle.color
                        }}
                        >{item?.category}</button>

                        {/* <div className='flex items-center py-2 mt-6'>
                            <span className='ml-2'>{item?.created_at}</span>    
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card