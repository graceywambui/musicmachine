import React from 'react';
import AboutUs from './components/AboutUs.js';
import Register from './components/Register.js';
import ContactUs from './components/ContactUs.js';
import SocialMedia from './components/SocialMedia.js';
import Media from './components/Media.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>MUSIC MACHINE</h1>
    </header>
    <main>
      <div class="main">
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
