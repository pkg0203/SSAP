import React, { useState, useEffect } from 'react';
import APiClient from '../api/APiClient';
import { useParams } from 'react-router-dom';
import './community.css';

const CommunityDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await APiClient.get(`/api/posts/${postId}`);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        const fetchComments = async () => {
            try {
                const response = await APiClient.get(`/api/posts/${postId}/comments`);
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchPost();
        fetchComments();
    }, [postId]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="community-container">
            <main className="community-main">
                <div className="content-detail">
                    <h2>{post.title}</h2>
                    <div className="community-post">
                        <img src={post.profile_image} alt="Profile" className="community-profile-img" />
                        <div>
                            <h3>{post.author}</h3>
                            <p>{post.description}</p>
                        </div>
                    </div>
                    <p className="community-body-text">{post.body}</p>
                </div>
                <div className="comments-section">
                    {comments.map((comment) => (
                        <div className="community-comment" key={comment.id}>
                            <img src={comment.profile_image} alt="Profile" className="community-profile-img" />
                            <div>
                                <h3>{comment.author}</h3>
                                <p>{comment.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default CommunityDetail;


