import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components.Header.js';
import Home from './components/Home.js';
import AboutUs from './components/AboutUs.js';
import Register from './components/Register.js';
import ContactUs from './components/ContactUs.js';
import SocialMedia from './components/SocialMedia.js';
import Media from './components/Media.js';
 

const App = () => (
  <div className="App">
    {/* Homepage */}
    <Header />
    <Home />
    
    <main>
      <div className="main">
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
