import React from 'react'
import { HiBars3BottomRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const MobileNav = ({menuItems, logo, onClose, hideLeft, onOpen}) => {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
        <a href="/">
            <img src={logo} alt="logo" />
        </a>
        <button onClick={onOpen} className='border border-primary rounded'>
        <HiBars3BottomRight calssName='w-7 h-7'/>
        </button>

        <div className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-center`}>
            <button onClick={onClose} className='absolute right-8 top-32'>
                <RiCloseCircleLine calssName='w-7 h-7'/>
            </button>

            <div>
                <ul className='flex flex-col gap-5'>
                    {
                        menuItems?.map((menu,index) => (
                            <li key={index}>
                                <Link to={menu} className='font-medium capitalize text-secondary text-2xl'>{menu}</Link>
                            </li>
                        ))
                    }
                </ul>

                {/* 회원가입 로그인 */}
                <ul className='flex items-center gap-4 font-medium mt-20'>
                    <li>
                        <button className='text-secondary px-4 py-2 rounded border'>Sign in</button>
                    </li>
                    <li>
                        <button className='text-secondary px-4 py-2 rounded border'>Sign up</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MobileNav