import React from "react";

// Styles
import "./testimonial.css";

// Icons
const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="source-icon">{testimonial.company}</div>
      <div className="details">
        <div className="name">{testimonial.date}: <span className="country">{testimonial.title}</span></div>
          
        { testimonial.text.map(line => ( <p className="text">{line}</p>))}

        <a
          href={testimonial.url}
          target="_blank"
          rel="noopener noreferrer"
          className="url"
        >
          
        </a>
      </div>
    </div>
  );
};

export default Testimonial;
