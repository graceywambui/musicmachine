import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'; // Remove the .js extension

import AboutUs from './components/AboutUs';
import Register from './components/Register';
import ContactUs from './components/ContactUs';
import SocialMedia from './components/SocialMedia';
import Media from './components/Media';

const App = () => (
  <div className="App">
    {/* Homepage */}
    
    <main>
      <div className="main">
        <Header />
        <AboutUs />
        <Register />
        <ContactUs />
        <SocialMedia />
        <Media />
      </div>
    </main>
    <footer>
      <p>&copy; 2023 My Music Website</p>
    </footer>
  </div>
);

export default App;
