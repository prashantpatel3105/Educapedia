import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Landing from './Landing';
import Courses from './Components/Courses';
import Educator from './Components/Educator';
import Contact from './Components/Contact';
// import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Courses' element={<Courses/>}></Route>
      <Route path='/Educator' element={<Educator/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
