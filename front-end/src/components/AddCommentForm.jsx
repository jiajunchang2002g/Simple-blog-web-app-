import React, { useState } from 'react';
import axios from '../services/api';

const AddCommentForm = ({ postId, onAddComment }) => {
  const [commenter, setCommenter] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/posts/${postId}/comments`, { commenter, body });
      onAddComment(response.data);
      setCommenter('');
      setBody('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div>
      <h3>Add Comment</h3>
      <form onSubmit={handleSubmit}>
        <label>Commenter:</label>
        <input
          type="text"
          value={commenter}
          onChange={(e) => setCommenter(e.target.value)}
        />
        <label>Comment:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default AddCommentForm;
