// Home.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Custom styles for the homepage

const Home = () => {
  return (
    <div className="homepage">
      <img
  src={process.env.PUBLIC_URL + '/logo1.png'}
  alt="Logo 1"
  className="img-fluid"
/>
    </div>
  );
};

export default Home;
