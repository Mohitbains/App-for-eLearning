import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Icon = styled.div`
  a::after {
    content: '';

    transition: all 0.2s ease-in-out;
  }

  :hover {
    a {
      color: #ffae29 !important;
    }

    a::after {
      color: #ffae29 !important;
      font-size: 80%;
      padding-right: 24px;
      content: '🡢';

      transform: translateX(2px);
    }
  }
`;
const TestimonialItem = ({ testimonial }) => {
  return (
    <div className="column is-4 has-text-centered">
      <div>
        <h3 className="title is-size-5 textDark is-spaced">
          {testimonial?.title}
        </h3>
        <p className="subtitle is-size-6 textLight">
          {testimonial?.subtitle}
          <span>
            <Icon>
              <a className="is-size-7 is-uppercase textDark has-text-weight-semibold">
                Read More
              </a>
            </Icon>
          </span>
        </p>
        <div className="is-flex is-justify-content-center is-align-items-center">
          <figure className="image is-64x64">
            <Image
              className="is-rounded"
              src={testimonial?.image}
              alt="Picture of the client"
              width={128}
              height={128}
            />
          </figure>
        </div>
        <h4 className="title is-size-5 pt-1 pb-3 textDark has-text-weight-medium">
          {testimonial?.name}
        </h4>
        <p className="subtitle is-size-7 textLight">{testimonial?.company}</p>
      </div>
    </div>
  );
};

export default TestimonialItem;
