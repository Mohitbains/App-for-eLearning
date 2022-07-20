import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  h1 {
    color: ${(props) => props.theme.lightAccent}!important;
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #444f6c90;
  width: 100%;
  height: 100%;
  .is-flex {
    height: 100%;
  }
  .title {
    font-family: ${(props) => props.theme.secondayFontFamily};
    font-weight: 100;
  }
  .primarybutton {
    background-color: #ffae29;
    border: 0px;
  }
`;

const Hero = () => {
  return (
    <>
      <div className="is-relative ">
        <figure className="image is-16by9">
          <video
            className="has-ratio"
            src="https://demos.wplms.io//learningcenter//wp-content//uploads//2020//09//Pexels-Videos-2916.mp4"
            loop
            muted
            autoPlay
          />
        </figure>
        <Overlay className="has-text-centered">
          <div className=" px-5 py-5 is-flex is-justify-content-center is-align-items-center">
            <div>
              <h1 className="title is-spaced is-1 is-size-4-mobile ">
                One App for eLearning - Web or Mobile
              </h1>
              <p className="subtitle is-6 is-size-7-mobile has-text-white ">
                WPLMS is the most modern Learning management system for Web.
              </p>
              <button className="button px-6 py-5 has-text-white has-text-weight-semibold is-size-7 is-radiusless primarybutton is-uppercase is-medium is-responsive ">
                Get your App
              </button>
            </div>
          </div>
        </Overlay>
      </div>
    </>
  );
};

export default Hero;
