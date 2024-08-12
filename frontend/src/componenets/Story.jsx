import React from 'react'
import { Link } from 'react-router-dom'

// 카테고리 버튼 색 지정
const Story = ({item}) => {
    const categoryStyles = {
        shoppong: {backgroundColor: "#FFA9A9", color: "#1E1D30"},
        transportation: {backgroundColor: "#FFD8A9", color: "#1E1D30"},
        food: {backgroundColor: "#D4FFA9", color: "#1E1D30"},
        health: {backgroundColor: "#A9FFD1", color: "#1E1D30"},
        festival: {backgroundColor: "#A9F0FF", color: "#1E1D30"},
        lifestyle: {backgroundColor: "#A9BCFF", color: "#1E1D30"},
        default: {backgroundColor: "#FFFFFF", color: "#1E1D30"},
    };
    const getCategoryStyle = (category) => {
        return categoryStyles[category] || categoryStyles.default;
    }
    const categoryStyle = getCategoryStyle(item?.category);

    const truncate = (str, n) => {
        return str.length > n ? str.substr(0, n-1) + '...' : str;
      };

    const date = new Date(item.created_at);

    const formattedDate = date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
      
    const formattedTime = date.toLocaleTimeString('ko-KR', {
        hour: 'numeric',
        minute: 'numeric'
    });

    return (
        <div className="font-sans mb-4 bg-white rounded-lg shadow-md p-4 h-40">
            <div className="flex">
                <Link to={`/community/${item.id}`}>
                    <div className="flex-grow overflow-hidden">
                        <h2 className="text-lg font-semibold mb-2 truncate">{truncate(item.title, 50)}</h2>
                        <p className="text-gray-500 mb-2 line-clamp-2">{truncate(item.content, 100)}</p>
                    </div>
                </Link>
                {item.img && (
                <div className="ml-4 flex-shrink-0">
                    <Link to={`/community/${item.id}`}>
                        <img src={item.img} alt="Post image" className="w-24 h-24 object-cover rounded" />
                    </Link>
                </div>
                )}
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex"> 
                    <img src alt="Avatar" className="w-6 h-6 rounded-full mr-2" />
                    <span className="text-gray-400 mr-2">{item.user}</span>
                    <span className="text-gray-400 mr-2">•</span>
                    <span className="text-gray-400 mr-2">{formattedDate} {formattedTime}</span>
                </div> 
                <div className="text-sm text-gray-400 mt-1">댓글 0 • 추천 0 • 조회수 0</div>
            </div>
        </div>
    )
}

export default Story
    // <div className='container mx-auto flex justify-center md:justify-start'>
    //     <div className='max-w-sm'>
    //         <div className='bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg'>
    //             <img className='rounded-t-lg' src={item?.img} alt='image' />
    //             <div className='py-6 px-5 rounded-lg bg-white'>
    //                 <Link to={`/community/${item.id}`}>
    //                     <h1 className='text-gray-700 font-bold text-2x1 mb-8 hover:text-gray-900 hover:cursor-pointer'>{item?.title}</h1>
    //                 </Link>

    //                 {/* 스토리별 카테고리 표시 */}
    //                 <div>
    //                     <button className={'mt-6 py-2 px-4 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300'}
    //                     style={{
    //                         backgroundColor: categoryStyle.backgroundColor,
    //                         color: categoryStyle.color
    //                     }}
    //                     >{item?.category}</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>