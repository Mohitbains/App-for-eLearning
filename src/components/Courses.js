import React from 'react';
import styled from 'styled-components';
import CourseItem from './atoms/CourseItem';

const Button = styled.div`
  background-color: #ffae29;
  border: 0px;
`;
const courses = [
  {
    id: 1,
    image: '/images/course4.png',
    title: 'Software training reloaded',
    category: ' MACHINE LEARNING TECHNOLOGY',
  },
  {
    id: 2,
    image: '/images/course3.png',
    title: 'Data mining',
    category: ' DATA',
  },
  {
    id: 3,
    image: '/images/course2-1.png',
    title: 'Design Dynamics',
    category: ' DESIGN INFORMATION TECH',
  },
  {
    id: 4,
    image: '/images/course6.png',
    title: 'Understanding Color Psychology',
    category: ' DESIGN',
  },
  {
    id: 5,
    image: '/images/course7.png',
    title: 'Impact of a Minimalist Design',
    category: ' DESIGN',
  },
  {
    id: 6,
    image: '/images/course1.png',
    title: 'Machine Learning Tools',
    category: ' INTELLIGENCE TECHNOLOGY',
  },
];
const Courses = () => {
  return (
    <div className="section has-text-centered py-6">
      <div className="container">
        <div className="is-flex has-text-centered is-align-items-center is-justify-content-center  is-flex-direction-column">
          <h2 className="title is-size-2 secondayFontFamily textDark fontWeight100 is-spaced ">
            Get <b>unlimited access </b> to our courses.
          </h2>
          <h5 className="subtitle is-size-6 textLight has-text-weight-normal ">
            Get instant access to <b>over 2500 online courses.</b> Join{' '}
            <b>560,000 Students</b>
            enrolled in the site.
          </h5>
        </div>

        <div className="columns pt-6 has-text-centered is-vcentered is-multiline">
          {courses.map((item) => (
            <CourseItem key={item.id} course={item} />
          ))}
        </div>
        <Button
          type="submit"
          className="button mt-6 px-5 py-4 has-text-white has-text-weight-bold is-size-6 primarybutton  is-medium is-responsive ">
          See all courses ›{/* <MdKeyboardArrowRight size={20} /> */}
        </Button>
      </div>
    </div>
  );
};

export default Courses;
