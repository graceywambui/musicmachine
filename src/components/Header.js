// Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-0">Music Machine</h1>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            <a href="/blog" className="text-white">Blog</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
