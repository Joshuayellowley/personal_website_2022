import React from "react";

// Styles
import "./testimonials.css";

// Data
import { workExperience } from "data/data";

// components
import { Heading } from "components/Heading/Heading";
import Testimonial from "./Testimonial/Testimonial";

const Portfolio = () => {
  return (
    <section
      data-aos="fade-left"
      className="testimonials"
      name="testimonials"
      id="testimonials"
    >
      <Heading text="Work Experience" style={{ padding: "3rem" }} />
      <ul>
        {workExperience &&
          workExperience.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
      </ul>
    </section>
  );
};

export default Portfolio;
