import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Header from './components/Header'
import "./App.css";
import Home from './components/Home';
import Details from './components/Details';

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
          <Route exact path='/detail/:id' element={<Details />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App