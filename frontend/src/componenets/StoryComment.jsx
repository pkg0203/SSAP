import React, { useState } from 'react';

const StoryComment = ({ comment, storyId }) => {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [newReply, setNewReply] = useState('');

    const handleReplySubmit = async (e) => {
        e.preventDefault();
        // Handle the reply submission logic here
        // Example: sending the new reply to the server

        // Reset the input field and hide the reply form after submission
        setNewReply('');
        setShowReplyForm(false);
    };

    return (
        <div className='comment'>
            <p>{comment.content}</p>
            <small>Posted by: {comment.username} at {new Date(comment.created_at).toLocaleString()}</small>
            <button onClick={() => setShowReplyForm(!showReplyForm)}>
                {showReplyForm ? 'Cancel' : 'Reply'}
            </button>
            {showReplyForm && (
                <form onSubmit={handleReplySubmit}>
                    <textarea
                        value={newReply}
                        onChange={(e) => setNewReply(e.target.value)}
                        placeholder="Write a reply..."
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
            {comment.replies && comment.replies.length > 0 && (
                <div className='replies'>
                    {comment.replies.map(reply => (
                        <StoryComment key={reply.id} comment={reply} storyId={storyId} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default StoryComment;
