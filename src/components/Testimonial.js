import React from 'react';

// import { MdKeyboardArrowRight } from 'react-icons/md';
import TestimonialItem from './atoms/TestimonialItem';

const testimonials = [
  {
    id: 1,
    image: '/images/instructor3.jpg',
    title: 'A must for trainers',
    subtitle:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered...',
    name: 'JP Mcgraw',
    company: 'ABC Inc.',
  },
  {
    id: 2,
    image: '/images/instructor1.jpg',
    title: 'Great platform for low cost courses',
    subtitle:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered...',
    name: 'Martha Penn',
    company: 'ABC Inc.',
  },
  {
    id: 3,
    image: '/images/instructor2.jpg',
    title: 'Quality hands on training tool',
    subtitle:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered...',
    name: 'Mikhail',
    company: 'CEO, FinTech',
  },
];

const Features = () => {
  return (
    <div className="section has-text-centered py-6">
      <div className="container">
        <div className="is-flex py-6 has-text-centered is-align-items-center is-justify-content-center  is-flex-direction-column">
          <h2 className="title is-size-2 secondayFontFamily textDark fontWeight100 is-spaced ">
            What out <b>Customers say</b> about us
          </h2>
          <h5 className="subtitle is-size-6 textLight has-text-weight-normal ">
            Excellence speaks for itself. Coporates, Students, Instructors and
            Academy.
          </h5>
        </div>
        <div className="columns pt-6 has-text-centered is-vcentered is-multiline">
          {testimonials.map((item) => (
            <TestimonialItem testimonial={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
