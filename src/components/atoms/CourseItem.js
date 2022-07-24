import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Media = styled.div`
  .image {
    border-radius: 8px;
  }

  .block-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 15px 30px;
    background: linear-gradient(to bottom, transparent 0, #000 100%);
    border-radius: 8px;
  }

  .block-content .block-title a::before {
    content: '';
    height: 100%;
    width: 4px;
    border-radius: 2px;
    background: #ffae29;
    display: block;
    position: absolute;
    left: -10px;
    top: 0;
  }
  .category p {
    letter-spacing: 2px;
  }
  .category p::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background: #ffae29;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .category :hover p::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const CourseItem = ({ course }) => {
  return (
    <div className="column is-4">
      <Media className="is-relative media">
        <a>
          <Image
            className="image"
            src={course.image}
            alt="Picture of the author"
            width={768}
            height={460}
          />
        </a>
        <div className="block-content has-text-left">
          <div className="block-title is-relative">
            <a>
              <h4 className=" has-text-white title  is-size-3 has-text-weight-normal  is-spaced">
                {course.title}
              </h4>
            </a>
          </div>
          <div className="category ">
            <a className="">
              <p className=" is-relative has-text-white has-text-weight-semibold subtitle py-3 is-uppercase is-size-7 ">
                {course.category}
              </p>
            </a>
          </div>
        </div>
      </Media>
    </div>
  );
};

export default CourseItem;
