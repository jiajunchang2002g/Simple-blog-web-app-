import React, { useState, useEffect } from 'react';
import axios from '../services/api';

const EditPostForm = ({ post, onEditPost }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/posts/${post.id}`, { title, body });
      onEditPost(response.data);
    } catch (error) {
      console.error('Error editing post:', error);
    }
  };

  return (
    <div>
      <h3>Edit Post</h3>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPostForm;
