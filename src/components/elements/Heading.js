import React from 'react';

const Heading = ({ heading }) => {
  return (
    <section className="section py-6 backgroundBlue">
      <div className="container">
        <h1 className="title is-size-2 has-text-weight-semibold py-6 has-text-white">
          {heading}
        </h1>
      </div>
    </section>
  );
};

export default Heading;
