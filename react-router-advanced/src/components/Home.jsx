// src/pages/Home.jsx
import React from 'react';

function Home({ setIsAuthenticated }) {
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => setIsAuthenticated((prev) => !prev)}>
        Toggle Login Status
      </button>
    </div>
  );
}

export default Home;
