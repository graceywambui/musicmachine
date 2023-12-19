// Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="bg-white py-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="mb-0">Music Machine</h1>
          </div>
          <div className="col-md-6 text-md-right">
            <a href="/blog" className="text-dark mx-2 d-inline-block">Blog</a>
            <a href="/register" className="text-dark mx-2 d-inline-block">Register</a>
            <a href="/about-us" className="text-dark mx-2 d-inline-block">About Us</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
