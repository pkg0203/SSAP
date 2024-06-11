import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import Card from '../../componenets/Card'

const SingleContent = () => {
    const item = useLoaderData()
    const [comments, setComments] = useState([])
    const [recommended, setRecommended] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        
        const fetchComments = async () => {
            const response = await axios.get(`http://13.125.129.225/ssap/posts/${item.id}/comments`)
            setComments(response.data)
        };

        const fetchRecommended = async () => {
            const response = await axios.get('http://13.125.129.225/ssap/recommended-items/')
            setRecommended(response.data)
        };

        fetchComments()
        fetchRecommended()
    }, [item.id])

    return (
        <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
            <div className='bg-[#ffefcb] p-8 md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>
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
                    <h3 className='text-2xl mb-4'>Comments</h3>
                    {comments.map((comment) => (
                        <div key={comment.id} className='mb-4'>
                            <h4 className='text-xl'>{comment.user}</h4>
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </div>

                <div className='recommended-section'>
                    <h3 className='text-2xl mb-4'>How about these tips?</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                        {recommended.map((rec) => (
                            <Card key={rec.id} item={rec} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleContent