import React from 'react';
import DesignItem from '../../components/atoms/DesignItem';

import Heading from '../../components/elements/Heading';
import Layout from '../../components/Layout';

const design = () => {
  return (
    <Layout>
      <Heading heading="Design" />
      <DesignItem />
    </Layout>
  );
};

export default design;
