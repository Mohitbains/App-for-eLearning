import React from 'react';
import Image from 'next/image';

const BrandItems = ({ brand }) => {
  return (
    <div className="column is-3">
      <div>
        <Image
          src={brand?.brandimage}
          alt="Picture of the Brand"
          width={160}
          height={62}
        />
      </div>
    </div>
  );
};

export default BrandItems;
