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
  min-height: 100vh;
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

const Video = styled.div`
  video {
    min-height: 100vh;
    object-fit: cover;
  }
`;

const Hero = () => {
  return (
    <>
      <Video className="is-relative ">
        <Video className="image is-16by9">
          <video
            className="has-ratio"
            src="/videos/Pexels-Videos-2916.mp4"
            loop
            muted
            autoPlay
          />
        </Video>
        <Overlay className="has-text-centered">
          <div className=" px-5 py-5 is-flex is-justify-content-center is-align-items-center">
            <div className="pt-6">
              <h1 className="title is-spaced is-1  ">
                One App for eLearning - Web or Mobile
              </h1>
              <p className="subtitle is-6 has-text-white ">
                WPLMS is the most modern Learning management system for Web.
              </p>
              <button
                type="submit"
                className="button px-6 py-5 has-text-white has-text-weight-semibold is-size-7 is-radiusless primarybutton is-uppercase is-medium is-responsive ">
                Get your App
              </button>
            </div>
          </div>
        </Overlay>
      </Video>
    </>
  );
};

export default Hero;
