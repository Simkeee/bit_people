import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {BrowserRouter} from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PeopleList from './components/PeopleList';
import About from './components/About';

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then(res => res.json())
      .then(data => setPeople(data.results))
  }, []);
  const [text, setText] = useState('view_list');

  const handleClick = () => {
    if (text === 'view_list') {
      setText('view_module');
    } else {
      setText('view_list');
    }
  };

  return (
    <BrowserRouter>
      <Navbar text={text} handleClick={handleClick} />
      <Routes>
        <Route path='/' exact element={<PeopleList people={people} text={text} />} />
        <Route path='/about' exact element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

