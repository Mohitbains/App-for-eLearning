import React from 'react';

const FeauterItem = ({ feature }) => {
  return (
    <div className="column is-3">
      <div>
        <div>{feature?.icon}</div>
        <h3 className="title is-size-5 textDark is-spaced">{feature?.title}</h3>
        <p className="subtitle is-size-6 textLight">{feature?.subtitle}</p>
      </div>
    </div>
  );
};

export default FeauterItem;
