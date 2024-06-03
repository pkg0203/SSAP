import './Navbar.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FetchUser from '../../FetchUser'

const AuthenticatedNavbar = ({ username }) => {
    return (
        <nav className="navbar">
            <div className="left">
                <Link to="" className='title'>SSAP</Link>
            </div>
            <div className="right">
                <Link to="contents/">Contents</Link>
                <Link to="communities/">Community</Link>
                <Link to={`profile/${username}/`}>{username}</Link>
            </div>
        </nav>
    )
}

// 인증되지 않은 사용자를 위한 네비게이션
const UnauthenticatedNavbar = () => {
    return (
        <nav className="navbar">
            <div className="left">
                <Link to="/">SSAP</Link>
                <div>All tips</div>
            </div>
            <div className="right">
                <Link to="contents/">Contents</Link>
                <Link to="communities/">Community</Link>
                <Link to="login/">Log In</Link>
            </div>
        </nav>
    )
}

const Navbar = ({ username }) => {
    return <div>{username ? <AuthenticatedNavbar username={username} /> : <UnauthenticatedNavbar />}</div>
}
export default Navbar