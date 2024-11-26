// src/App.jsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';  // Import necessary components
import PostsComponent from './components/PostsComponent';  // Import your PostsComponent

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap the app in QueryClientProvider to provide the React Query context to the app
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
