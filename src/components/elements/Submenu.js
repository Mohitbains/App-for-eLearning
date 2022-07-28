import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Column = styled.div`
  border: 1px solid ${(props) => props.theme.textWhiteLight};

  :hover {
    background-color: ${(props) => props.theme.bgYellow};
    border: none;
    h1,
    p,
    svg {
      color: white !important;
    }
  }
`;
const Submenu = ({ submenu }) => {
  return (
    <Column className="column is-flex p-5 is-4">
      <div className="px-3">{submenu?.icon}</div>
      <Link href={`/course-category/${submenu.slug}`}>
        <a>
          <h1 className="is-uppercase is-size-6 has-text-weight-bold textLight">
            {submenu?.title}
          </h1>

          <p className="is-uppercase is-size-7 has-text-weight-normal textLight">
            {submenu?.subtitle}
          </p>
        </a>
      </Link>
    </Column>
  );
};

export default Submenu;
