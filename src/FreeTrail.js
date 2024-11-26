import React, { useState } from "react";
import "./FreeTrail.css";

const testimonials = [
  {
    id: 1,
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fchris-robinson.png&w=1920&q=80",
    quote:
      "It seemed to be in-line with everything we were looking at so wasn't a bargain, I was the most impressed with what Hexnode had offered compared to the others.",
    name: "Chris Robinson",
    title: "Executive Account Manager, NCS",
  },
  {
    id: 2,
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fjustin-modrak.png&w=1920&q=80",
    quote:
      "Hexnode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    title: "Technology Coordinator, East Troy Community School District",
  },
  {
    id: 3,
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fdalibor-kruljac.png&w=1920&q=80",
    quote:
      "Hexnode streamlined our IT operations. Highly recommended!",
    name: "Sophia Brown",
    title: "IT Manager, Modern Enterprises",
  },
];

const FreeTrail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="container">
      {/* Left Section */}
      <div className="cta-section">
        <header className="logo">hexnode</header>
        <h1>Try Hexnode free for 14 days</h1>
        <div className="email-input">
          <input
            type="email"
            placeholder="Your work email"
            className="email-field"
          />
          <button className="cta-button">GET STARTED</button>
        </div>
        <div className="contact-info">
          <p>
            🇺🇸 +1-833-HEXNODE (439-6633) (Toll Free)
          </p>
          <p>
            🇬🇧 +44-800-3689920 (Toll Free)
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="testimonial-section">
        <div className="testimonial-card">
          <blockquote className="testimonial-quote">
            "{currentTestimonial.quote}"
          </blockquote>
          <img
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className="testimonial-image"
          />
          <div className="testimonial-details">
            <p className="testimonial-name">{currentTestimonial.name}</p>
            <p className="testimonial-title">{currentTestimonial.title}</p>
          </div>
        </div>
        <div className="testimonial-controls">
          <button onClick={handlePrev}>&#8249;</button>
          <button onClick={handleNext}>&#8250;</button>
        </div>
      </div>
    </div>
  );
};

export default FreeTrail;
