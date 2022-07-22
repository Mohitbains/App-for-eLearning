import React from 'react';

const ScreenItems = ({ screen }) => {
  return (
    <div className="column is-4">
      <div>
        <h1 className="title fontWeight100 has-text-left secondayFontFamily is-size-4 has-text-white is-spaced">
          {screen?.title}
        </h1>
        <p className="subtitle has-text-left textWhiteLight is-size-6 textWhiteLight">
          {screen?.paragraph}
        </p>
        {screen.list.map((item) => (
          <h1
            className="subtitle has-text-left has-text-white is-size-6 "
            key={item.id}>
            {item?.title}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default ScreenItems;
