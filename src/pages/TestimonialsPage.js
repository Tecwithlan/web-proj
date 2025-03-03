import React from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import './TestimonialsPage.css';

function TestimonialsPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="testimonials-page">
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
      <Testimonials />
    </div>
  );
}

export default TestimonialsPage;