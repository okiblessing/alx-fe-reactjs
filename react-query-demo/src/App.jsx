// src/App.jsx
import React from 'react';
import PostsComponent from './components/PostsComponent';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  return (
    <div>
      <h1>React Query Demo</h1>
      <PostsComponent />
    </div>
  );
}
<ReactQueryDevtools initialIsOpen={false} />

export default App;
