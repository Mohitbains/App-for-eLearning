import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image'

const Nav = styled.div`
  .navbar {
    background: transparent !important;
  }
  a {
    color: ${(props) => props.theme.darkAccent};
    transition: 0.2s;
  }
  a:hover {
    color: ${(props) => props.theme.mainBrandColor};
    background-color: transparent;
  }
`;

const Header = () => {
  return (
    <div className='container'>
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
            <figure className="image">
              <Image src={'/images/logo_black.png'} alt="djy" layout="fixed" height={48} width={ 100} />
    </figure></a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <a className="navbar-item">
        HOME
      </a>

      <a className="navbar-item">
        COURSES
            </a>
            <a className="navbar-item">
        PAGES
            </a>
            <a className="navbar-item">
        APP
      </a>


        </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
      </nav>
      </div>
  );
};

export default Header;