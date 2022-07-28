import React from 'react';

import Layout from '../components/Layout';
import Courses from '../components/Courses';
import Heading from '../components/elements/Heading';

const courses = () => {
  return (
    <Layout>
      <Heading heading="Courses" />
      <Courses />
    </Layout>
  );
};
export default courses;
