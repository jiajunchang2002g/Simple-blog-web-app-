import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.commenter}</strong>: {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
