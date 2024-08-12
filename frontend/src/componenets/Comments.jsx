import React, { useState } from 'react';
import Comment from './Comment';

const Comments = ({ comments, articleId }) => {
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        // Handle the comment submission logic here
        // Example: sending the new comment to the server

        // Reset the input field after submission
        setNewComment('');
    };

    return (
        <div>
            <h3>Comments</h3>
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} articleId={articleId} />
            ))}
        </div>
    )
}


export default Comments;
