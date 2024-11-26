// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';

// Fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Use useQuery hook to fetch data from API with caching and refetching options
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    // Cache for 10 minutes before it is garbage collected
    cacheTime: 10 * 60 * 1000, // 10 minutes in milliseconds

    // Consider data fresh for 5 minutes (avoid refetching during this time)
    staleTime: 5 * 60 * 1000, // 5 minutes in milliseconds

    // Avoid refetching the data when the window is focused
    refetchOnWindowFocus: false, // Set to true if you want to refetch data when the user returns to the app

    // Keep the previous data while the new query is loading (useful for pagination)
    keepPreviousData: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
