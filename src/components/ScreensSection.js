import React from 'react';
import Image from 'next/image';
import ScreenItems from './atoms/ScreenItems';

const screens = [
  {
    id: 1,
    title: 'Mobile first design',
    paragraph:
      'The version 4 is built with mobile centeric design pattern and the latest Progressive web app technology.',
    list: [
      { id: 1, title: 'Course pursue screen for students' },
      { id: 2, title: 'Course creation module for Instructors' },
    ],
  },
];
const ScreensSection = () => {
  return (
    <div className="section backgroundBlue">
      <div className="container has-text-centered py-6">
        <div className="is-flex has-text-centered is-align-items-center is-justify-content-center  is-flex-direction-column">
          <h2 className="title is-size-3 secondayFontFamily has-text-white fontWeight100 is-spaced ">
            One app for all devices Mobile, Tablet, Desktop & TV
          </h2>
          <h5 className="subtitle is-size-6 textWhiteLight has-text-weight-normal ">
            Install and setup WPLMS version 4. Upload your App icon and splash
            image and{' '}
            <span className="has-text-white">get your App in few clicks</span>{' '}
            from the options panel
          </h5>
        </div>
        <div className="columns pt-6 is-vcentered is-multiline">
          {screens.map((item) => (
            <ScreenItems screen={item} />
          ))}
          <div className="column is-4">
            <Image
              src="/images/1-removebg-preview.png"
              alt="screen 1"
              width={350}
              height={580}
            />
          </div>
          <div className="column is-4">
            <Image
              src="/images/2-removebg-preview.png"
              alt="Screen 2"
              width={350}
              height={580}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreensSection;
