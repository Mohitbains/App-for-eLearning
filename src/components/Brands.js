import React from 'react';

// import { MdKeyboardArrowRight } from 'react-icons/md';
import BrandItems from './atoms/BrandItems';

const brands = [
  {
    id: 1,
    brandimage: '/images/logo2.png',
  },
  {
    id: 2,
    brandimage: '/images/logo5.png',
  },
  {
    id: 3,
    brandimage: '/images/logo4.png',
  },
  {
    id: 4,
    brandimage: '/images/logo3.png',
  },
];

const Brands = () => {
  return (
    <div className="section bgLight has-text-centered py-6">
      <div className="container">
        <div className="is-flex has-text-centered is-align-items-center is-justify-content-center  is-flex-direction-column">
          <h2 className="title is-size-2 secondayFontFamily textDark fontWeight100 is-spaced ">
            Trusted by <b>fortune 500</b>brands
          </h2>
          <h5 className="subtitle is-size-6 textLight has-text-weight-normal ">
            From startups to fortune 500 brands. WPLMS is the number 1 choice to
            start an educational venture.
          </h5>
        </div>
        <div className="columns pt-6 has-text-centered is-vcentered is-multiline">
          {brands.map((item) => (
            <BrandItems key={item.id} brand={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
