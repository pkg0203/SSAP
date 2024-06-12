import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Comments from '../../componenets/Comments';

const SingleContent = () => {
    const item = useLoaderData();

    return (
        <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
            <div className='bg-[#ffffff] p-8 md:my-[1rem] md:py-8 pb-8 md:rounded-xl'>
                <picture>
                    <img src={item.img} alt="" className='md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto' />
                </picture>

                <div className='mb-12 px-8'>
                    <h1 className='text-4xl mb-12 mt-12 text-secondary'>{item.title}</h1>
                    <article>
                        {item.content.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </article>
                </div>

                <div className='comments-section'>
                    <Comments comments={item.article_comments} articleId={item.id} />
                </div>

                <div className='recommended-section'>
                    <h3 className='text-2xl mb-4 mt-12'>How about these tips?</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                        {/* {recommended.map((rec) => (
                            <Card key={rec.id} item={rec} />
                        ))} */}
                    </div>
                </div>
                    
            </div>
        </section>
    )
}

export default SingleContent;
