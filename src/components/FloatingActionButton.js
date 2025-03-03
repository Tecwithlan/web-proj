import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingActionButton.css';

function FloatingActionButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/testimonials');
  };

  return (
    <button className="fab" onClick={handleClick}>
      Testimonials
    </button>
  );
}

export default FloatingActionButton;