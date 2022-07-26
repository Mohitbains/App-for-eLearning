import React from 'react';

import Image from 'next/image';

const FooterItem = ({ footer }) => {
  return (
    <div className="column is-3">
      <div className="block-content has-text-left">
        {footer.image && (
          <div className="block-title is-relative">
            <figure className="image">
              <Image
                src={footer.image}
                alt="logo"
                layout="fixed"
                height={48}
                width={100}
              />
            </figure>
          </div>
        )}
        {footer.title && (
          <div className="block-title is-relative">
            <h4 className=" footerColer title  fontSizeSmall has-text-weight-semibold  is-spaced">
              {footer.title}
            </h4>
          </div>
        )}
        <div className="category">
          {footer?.navItems?.map((item) => (
            <div key={item.id}>
              {item.href ? (
                <a className="">
                  <p className=" is-relative pt-3 footerColer has-text-weight-normal  subtitle fontSizeSmall">
                    {item.name}
                  </p>
                </a>
              ) : (
                <p className=" is-relative footerColer has-text-weight-normal subtitle fontSizeSmall">
                  {item.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterItem;
