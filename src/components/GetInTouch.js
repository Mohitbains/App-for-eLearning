import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .primarybutton {
    background-color: ${(props) => props.theme.lightAccent};
    border: 0px;
    letter-spacing: 1.2px;
  }
`;
const GetInTouch = () => {
  return (
    <Section className=" bgYellow section has-text-centered py-6">
      <div className="container">
        <div className="is-flex  has-text-centered is-align-items-center is-justify-content-center  is-flex-direction-column">
          <h2 className="title has-text-white is-size-2 secondayFontFamily  fontWeight100 is-spaced ">
            Looks <b>Interesting</b> ? Get in Touch
          </h2>
          <h5 className="subtitle has-text-white is-size-6  has-text-weight-normal ">
            Think you got a great idea, get in touch with us, we can&#39;t wait
            to have you on board.
          </h5>
          <button
            type="submit"
            className="button  px-6 py-5 textDark has-text-weight-bold is-size-7  primarybutton is-uppercase is-medium is-responsive ">
            CONTACT SALES / SUPPORT
          </button>
        </div>
      </div>
    </Section>
  );
};

export default GetInTouch;
