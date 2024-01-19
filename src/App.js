import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Services from './Components/Services';
import About from './Components/About';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element = {<Home/>} />
        <Route path="/projects" exact element = {<Projects/>} />
        <Route path="/about" exact element = {<About/>} />
        <Route path="/contact" exact element = {<Contact/>} />
        <Route path="/services" exact element = {<Services/>} />


        </Routes>
    </Router>
  );
};

export default App;
