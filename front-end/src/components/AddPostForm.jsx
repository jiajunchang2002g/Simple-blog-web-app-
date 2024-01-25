// src/components/AddPostForm.js

import React, { useState } from 'react';

const AddPostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Body:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPostForm;

