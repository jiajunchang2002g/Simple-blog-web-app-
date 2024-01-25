// src/components/PostList.js

import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <h3>Comments:</h3>
            <ul>
              {post.comments.map((comment) => (
                <li key={comment.id}>{comment.body}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

