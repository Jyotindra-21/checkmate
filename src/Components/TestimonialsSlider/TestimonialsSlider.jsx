import styles from "./TestimonialsSlider.module.css";
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import Testimonial from "../Testimonial/Testimonial";
export default function TestimonialsSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Testimonial />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Testimonial />
      </Carousel.Item>
    </Carousel>
  );
}
