// Home.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Custom styles for the homepage

const Home = () => {
  return (
    <div className="homepage">
      <img
        src="./LOGOMUSIC.png"
        alt="Music Machine Logo"
        className="img-fluid"
      />
    </div>
  );
};

export default Home;
