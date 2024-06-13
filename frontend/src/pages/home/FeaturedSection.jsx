import React from 'react'
import 따릉이 from '../../assets/따릉이.png'
import { Link } from 'react-router-dom'

const FeaturedSection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:pk-10'>
        <div className='relative'>
            <div className='absolute top-4 left-5 bg-white text-secondary px-3 py-1 rounded-md uppercase tracking-wider'>How about these tips?</div>
            <img src={따릉이} alt="따릉이" />
        </div>
        <div className='text-start sm:w-1/2'>
            <h2 className='text-2xl font-semibold text-secondary sm:text-3xl sm:leading-relaxed'>You haven't ridden 따릉이 yet?</h2>
            <p className='text-xl mt-4 text-[#5c5c5c]'>Ttareungyi has no concept of reservation. In the past, a grace period of about one minute was given to proceed with the rental process, but this is only a preliminary time to complete the rental process.</p>
            <div className='lg:mt-0 lg:flex-shrink-0'>
                <div className='mt-12 inline-flex'>
                    <Link to="/feat"> 
                        <button className='py-4 px-8 hover:bg-[#71ff64] text-secondary hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#71ff64] focus:outline-none rounded-lg'>Check out the Tip</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedSection