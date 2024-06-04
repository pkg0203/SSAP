// Article 상세 화면

import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleContent = () => {
    const item = useLoaderData();
    
    useEffect(() => {
        window.scrollTo(0, 0)
    })

  return (
    <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
        <div className='bg-[#ffefcb] p-8 md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>
            <picture>
                <img src={item.image} alt="" className='md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto' />
            </picture>

            <div className='px-8'>
                <h1 className='text-4xl mt-12 text-secondary'>{item.title}</h1>
                <p className='mt-6'></p>
                <article>
                    <h2>{item.content}</h2>
                </article>
            </div>
        </div>
    </section>
  )
}

export default SingleContent