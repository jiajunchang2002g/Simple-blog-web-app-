// src/components/AddCommentForm.js

import React, { useState } from 'react';

const AddCommentForm = ({ onAddComment }) => {
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment({ body });
    setBody('');
  };

  return (
    <div>
      <h2>Add Comment</h2>
      <form onSubmit={handleSubmit}>
        <label>Comment:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default AddCommentForm;

