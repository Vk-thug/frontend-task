import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Users } from './pages';

function App() {
  return (
    <React.Fragment>
        <Router>
          <Routes>
            <Route path ="/" element= {<Home />}></Route>
            <Route path ="/user/add" element= {<Users />}></Route>
          </Routes>
        </Router>
    </React.Fragment>
  );
}

export default App;
