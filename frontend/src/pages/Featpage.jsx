import React from 'react'
import 따릉이 from '../assets/따릉이.png'

const Featpage = () => {
  return (
    <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
        <div className='bg-[#ffffff] p-8 md:my-[1rem] md:py-8 pb-8 md:rounded-xl'>
            <picture>
                <img src={따릉이} alt="따릉이" className='md:max-w-[100%] w-full md:h-[570px] md:rounded-xl md:mx-auto' />
            </picture>

            <div className='mb-12 px-8'>
                <h1 className='text-4xl mb-12 mt-12 text-secondary'>You haven't ridden 따릉이 yet?</h1>
                <article>
                    
                </article>
            </div>

            <div className='comments-section'>
                Comments
            </div>

            <div className='recommended-section'>
                <h3 className='text-2xl mb-4 mt-12'>How about these tips?</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    
                </div>
            </div>        
        </div>
    </section>
  )
}

export default Featpage