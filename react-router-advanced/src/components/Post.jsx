// src/pages/Post.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { postId } = useParams();
  return <div>Displaying post with ID: {postId}</div>;
}

export default Post;
