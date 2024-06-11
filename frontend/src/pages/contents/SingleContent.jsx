import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Comments from '../../componenets/Comments';

const SingleContent = () => {
    const item = useLoaderData();

    return (
        <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
            <div className='bg-[#ffffff] p-8 md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>
                <picture>
                    <img src={item.img} alt="" className='md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto' />
                </picture>

                <div className='px-8'>
                    <h1 className='text-4xl mt-12 text-secondary'>{item.title}</h1>
                    <article>
                        <h2>{item.content}</h2>
                    </article>
                </div>

                <div className='comments-section'>
                    <Comments comments={item.article_comments} articleId={item.id} />
                </div>
                    
            </div>
        </section>
    )
}

export default SingleContent;
