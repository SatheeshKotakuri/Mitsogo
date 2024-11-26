import React, { useState } from "react";
import "./App1.css";

const testimonials = [
  {
    id: 1,
    image: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fjustin-modrak.png&w=1920&q=80",
    quote: "Hexnode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    title: "Technology Coordinator, East Troy Community School District",
  },
  {
    id: 2,
    image: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fdalibor-kruljac.png&w=1920&q=80",
    quote: "Hexnode streamlined our IT operations. Highly recommended!",
    name: "Sophia Brown",
    title: "IT Manager, Modern Enterprises",
  },
  {
    id: 3,
    image: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fchris-robinson.png&w=1920&q=80",
    quote: "A seamless experience for device management across platforms.",
    name: "Liam Carter",
    title: "System Administrator, Tech Innovations",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonial-section">
      <h2>Why should you choose Hexnode?</h2>
      <div className="slider-container">
        <button className="arrow prev" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="testimonial-card">
          <img
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className="testimonial-image"
          />
          <div className="testimonial-content">
            <blockquote className="testimonial-quote">
              "{currentTestimonial.quote}"
            </blockquote>
            <p className="testimonial-name">{currentTestimonial.name}</p>
            <p className="testimonial-title">{currentTestimonial.title}</p>
          </div>
        </div>
        <button className="arrow next" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
