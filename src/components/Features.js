import React from 'react';
import { FaUserShield, FaAppStoreIos } from 'react-icons/fa';
import { IoDesktop } from 'react-icons/io5';
import { GiVideoConference } from 'react-icons/gi';
import styled from 'styled-components';
// import { MdKeyboardArrowRight } from 'react-icons/md';
import FeauterItem from './atoms/FeatureItem';

const Button = styled.div`
  background-color: #ffae29;
  border: 0px;
`;

const iconStyles = {
  color: '#7B8397',
  fontSize: '70',
};
const features = [
  {
    id: 1,
    icon: <FaUserShield style={iconStyles} />,
    title: 'Administrator App',
    subtitle:
      'Manage the entire site, the students, the instructors and the store.',
  },
  {
    id: 2,
    icon: <FaAppStoreIos style={iconStyles} />,
    title: 'Instructor App',
    subtitle:
      'Create courses, manage students, import questions and get reports',
  },
  {
    id: 3,
    icon: <IoDesktop style={iconStyles} />,
    title: 'Student App',
    subtitle:
      'Easy access to enrolled courses. Pursue courses, join meetings in TV.',
  },
  {
    id: 3,
    icon: <GiVideoConference style={iconStyles} />,
    title: 'Custom Features',
    subtitle: 'All Wplms modules in the App. Conferencing, Calendars.',
  },
];

const Features = () => {
  return (
    <div className="section has-text-centered py-6">
      <div className="container">
        <div className="is-flex has-text-centered is-align-items-center is-justify-content-center  is-flex-direction-column">
          <h2 className="title is-size-2 secondayFontFamily textDark fontWeight100 is-spaced ">
            Get <b>Free App</b> for your Education & LMS Site.
          </h2>
          <h5 className="subtitle is-size-6 textLight has-text-weight-normal ">
            Huge savings of <b>Time and Money.</b> The WPLMS PWA plays equally
            good on <b>Mobile, Desktop, Tablets, and TV&apos;s.</b>
          </h5>
        </div>
        <div className="columns pt-6 has-text-centered is-vcentered is-multiline">
          {features.map((item) => (
            <FeauterItem feature={item} key={item.id} />
          ))}
        </div>
        <Button
          type="submit"
          className="button mt-6 px-5 py-4 has-text-white has-text-weight-bold is-size-6 primarybutton  is-medium is-responsive ">
          See all features ›{/* <MdKeyboardArrowRight size={20} /> */}
        </Button>
      </div>
    </div>
  );
};

export default Features;
