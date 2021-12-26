import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Portfolio from './pages/portfolio/Portfolio';

const App = () => {
  return (
   <Router>
    <Navbar/>
   
    <Routes>
        <Route exact path="/JustPlayMusicOffical" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="portfolio" element={<Portfolio/>} />
      </Routes>
      <Routes>
        <Route path="contact" element={<Contact/>} />
      </Routes>
      <Routes>
        <Route path="about" element={<About/>} />
      </Routes>
      
    
   </Router>
  );
}

export default App;
