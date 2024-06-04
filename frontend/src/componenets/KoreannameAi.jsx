import React from 'react'
import axios from 'axios';

const KoreannameAI=({access_token}) =>{
    return (
        <div className='flex flex-col justify-center items-center w-full py-20'>
            <div className='h1'>  
                Find your korean Name!
            </div>
            <input type="text" className='border'/>
            <button className=''>submit</button>
        </div>
    )
}

export default KoreannameAI