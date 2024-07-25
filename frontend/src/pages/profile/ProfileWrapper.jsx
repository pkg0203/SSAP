import React from 'react'
import { Link } from 'react-router-dom'

function MenuItem ({name, href}) {
    return (
        <div>
            <Link to={href} className='roundede-full'>
                <div className='px-6 py-2 text-center rounded-full'>{name}</div>
            </Link>
        </div>
    )
}

const username = "ssap"  //여기에 유저네임을 보관할 수 있어야 함. 전역 상태로 관리해야 할 듯

function MenuList () {
    return (
        <div className='flex flex-wrap items-center justify-center gap-8 text-xl mr-10 font-semibold text-secondary'>
            <MenuItem name="Saved" href={"/profile/" + username + "/bookmarked"} />
            <MenuItem name="Likes" href={"/profile/" + username + "/liked"} />
            <MenuItem name="Posts" href={"/profile/" + username + "/posts"} />
            <MenuItem name="Comments" href={"/profile/" + username + "/comments"} />
        </div>
    )
}

const ProfileWrapper = () => {
  return (
    <div>
        <MenuList />
    </div>
  )
}

export default ProfileWrapper