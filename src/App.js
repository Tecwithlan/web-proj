import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import FloatingActionButton from './components/FloatingActionButton';
import Home from './pages/Home';
import TestimonialsPage from './pages/TestimonialsPage';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Profile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
        <FloatingActionButton />
      </div>
    </Router>
  );
}

export default App;