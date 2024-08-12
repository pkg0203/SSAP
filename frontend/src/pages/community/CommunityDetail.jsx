import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StoryComments from '../../componenets/StoryComments';

const CommunityDetail = () => {
    const item = useLoaderData();

    return (
        <div className="font-sans max-w-2xl mx-auto p-4 mt-20 bg-white">
            <h1 className="text-xl font-bold mb-10">[왕초보] 코딩이 처음이어도 쉽게 배우는 웹개발 A to Z - 잘 못된 제목</h1>
            
            <div className="flex items-center text-xs text-gray-500 mb-16">
                <img src="author-avatar.jpg" alt="Author" className="w-5 h-5 rounded-full mr-1" />
                <span className="mr-1">김상하</span>
                <span className="mr-1">•</span>
                <span className="mr-1">2024년 8월 10일 오전 10:57</span>
                <span className="flex-grow"></span>
                <span>댓글 0 • 추천 0 • 조회수 15</span>
            </div>

            {item.img && (
                <div className="ml-4 flex-shrink-0">
                        <img src={item.img} alt="Post image" className="w-24 h-24 object-cover rounded" />
                </div>
            )}

            <div className="text-sm text-gray-700 mb-32 space-y-2">
                <p>위 제목의 강의를 들었는데 강의하시는분 위워좋은 진행되니 국비지원이 아닌다는 생각이 듭니다.</p>
                <p>고제도 영터리 로 진행되고 결과 색깔을 봤났는데 어디에서 찾아볼 수 있고 ...</p>
                <p>예 이런것에 국비 지원이 되는지...</p>
                <p>그리고 수강하시는 분들 비용이 "0" 이라고 하는데 국비 지원 금액도 안정된 것인데 과대 광고 아닌가요 ?</p>
            </div>

            <div className="flex justify-center mb-16">
                <button className="bg-gray-100 text-gray-600 px-3 py-1 text-sm rounded-md mx-3">공유</button>
                <button className="bg-gray-100 text-gray-600 px-3 py-1 text-sm rounded-md mx-3">추천해요 0</button>
            </div>

            <div className="mb-6">
                <h3 className="text-sm font-semibold mb-2">댓글 0</h3>
                <div className="border border-gray-300 rounded-md p-2">
                    <input type="text" placeholder="댓글을 남겨보세요" className="w-full outline-none text-sm" />
                </div>
            </div>

            <div className="flex justify-between text-sm">
                <button className="bg-gray-800 text-white px-3 py-1 rounded-md">목록으로</button>
                <div>
                    <button className="bg-gray-800 text-white px-3 py-1 rounded-md mr-1">
                    <span className="mr-1">&lt;</span>이전
                    </button>
                    <button className="bg-gray-800 text-white px-3 py-1 rounded-md">
                    다음<span className="ml-1">&gt;</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CommunityDetail;

        // <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
        //     <div className='bg-[#ffffff] p-8 md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>
        //         <picture>
        //             <img src={item.img} alt="" className='md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto' />
        //         </picture>

        //         <div className='px-8'>
        //             <h1 className='text-4xl mt-12 text-secondary'>{item.title}</h1>
        //             <h3>By: {item.username}</h3>
        //             <article>
        //                 <h2>{item.content}</h2>
        //             </article>
        //         </div>

        //         <div className='comments-section'>
        //             <StoryComments comments={item.story_comments} storyId={item.id} />
        //         </div>
                    
        //     </div>
        // </section>