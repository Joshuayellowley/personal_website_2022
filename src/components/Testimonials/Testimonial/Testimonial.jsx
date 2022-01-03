import React from "react";

// Styles
import "./testimonial.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";

const Testimonial = ({ testimonial }) => {
  console.log(testimonial.text);
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
