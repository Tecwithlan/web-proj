import React from 'react';
import './Testimonials.css';

function Testimonials() {
    const testimonials = [
        {id: 1, name: 'John Doe', message: 'I love this company!'},
        {id: 1, name: 'John Doe', message: 'I love this company!'},
        {id: 1, name: 'John Doe', message: 'I love this company!'}, 
    ];
    
    return (
        <div className="testimonials">
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.text}</p>
                </div>
            ))}
        </div>
    );
}

export default Testimonials