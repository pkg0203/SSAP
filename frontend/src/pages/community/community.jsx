import React, { useState, useEffect } from 'react'
import APiClient from '../api/APiClient'
import Pagenation from '../pagenation/Pagenation'
import { Link } from 'react-router-dom'
import './community.css'

function CategoryItem({ name, href, backgroundColor, color }) {
    const style = {
        backgroundColor: backgroundColor,
        color: color,
        borderColor: color
    };
    return (
        <div>
            <Link to={href} className='roundede-full'>
                <div className='uppercase px-6 py-2 text-center rounded-full' style={style}>{name}</div>
            </Link>
        </div>
    );
}

function CategoryList() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-8'>
            <CategoryItem name="shopping" href="/categories/shopping" backgroundColor="#FFA9A9" color="#1E1D30" />
            <CategoryItem name="traffic" href="/categories/traffic" backgroundColor="#FFD8A9" color="#1E1D30" />
            <CategoryItem name="food" href="/categories/food" backgroundColor="#D4FFA9" color="#1E1D30" />
            <CategoryItem name="health" href="/categories/health" backgroundColor="#A9FFD1" color="#1E1D30" />
            <CategoryItem name="festival" href="/categories/festival" backgroundColor="#A9F0FF" color="#1E1D30" />
            <CategoryItem name="lifestyle" href="/categories/lifestyle" backgroundColor="#A9BCFF" color="#1E1D30" />
        </div>
    );
}

const Community = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [endPages, setEndPages] = useState(1);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await APiClient.get(`/api/posts?page=${currentPage}`);
                setPosts(response.data.results);
                setEndPages(Math.ceil(response.data.count / response.data.page_size));
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, [currentPage]);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    return (
        <div className="community-container">
            <header className="community-header">
                <h1>SSAP</h1>
                <p>All tips for your life in Korea</p>
                <nav className="community-nav">
                    <a href="/contents">Contents</a>
                    <a href="/community" className="active">Community</a>
                    <button className="signup-btn">Sign Up</button>
                </nav>
            </header>
            <main className="community-main">
                <CategoryList />
                {selectedPost ? (
                    <div className="content-detail">
                        <h2>{selectedPost.title}</h2>
                        <div className="community-post">
                            <img src={selectedPost.profile_image} alt="Profile" className="community-profile-img" />
                            <div>
                                <h3>{selectedPost.author}</h3>
                                <p>{selectedPost.description}</p>
                            </div>
                        </div>
                        <p className="community-body-text">{selectedPost.body}</p>
                        <button onClick={() => setSelectedPost(null)}>Back</button>
                    </div>
                ) : (
                    <div className="content-list">
                        {posts.map((post) => (
                            <div className="community-content" key={post.id} onClick={() => handlePostClick(post)}>
                                <h2>{post.title}</h2>
                                <div className="community-post">
                                    <img src={post.profile_image} alt="Profile" className="community-profile-img" />
                                    <div>
                                        <h3>{post.author}</h3>
                                        <p>{post.description}</p>
                                    </div>
                                </div>
                                <p className="community-body-text">{post.body.substring(0, 100)}...</p>
                            </div>
                        ))}
                        <Pagenation 
                            currentPage={currentPage} 
                            endPages={endPages} 
                            onPageChange={(page) => setCurrentPage(page)} 
                        />
                    </div>
                )}
            </main>
        </div>
    );
};

export default Community