import React from 'react';
import axios from '../services/api';

const DeletePostButton = ({ postId, onDeletePost }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      onDeletePost(postId);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeletePostButton;
