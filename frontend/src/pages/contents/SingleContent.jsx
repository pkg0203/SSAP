import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleContent = () => {
    const item = useLoaderData();
  return (
    <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
        <div className='bg-[#ffefcb] p-8 md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>
            <picture>
                <img src={item.image} alt="" className='md:max-w-[90%] w-full md:h-[570px] md:rounded-xl' />
            </picture>

            <div className='px-8'>
                <h1 className='text-4xl mt-12 text-secondary'>{item.title}</h1>
                <p className='mt-6'>{item.content}</p>
                <article>
                    <h2></h2>
                </article>
            </div>
        </div>
    </section>
  )
}

export default SingleContent