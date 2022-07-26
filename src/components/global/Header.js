import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { BsFillCartDashFill, BsSearch } from 'react-icons/bs';

const Nav = styled.div`
z-index: 900;
 .menu a {
    color: ${(props) => props.theme.lightAccent};
    transition: 0.2s;
    font-size: 13px;
  }
  .menu a:hover {
    background-color: transparent !important;
    border-top: 2px solid ${(props) => props.theme.lightAccent}!important;
  }
  .navbar-end a {
    color: ${(props) => props.theme.lightAccent};
    transition: 0.2s;
    font-size: 13px;
  }
  .navbar-end a:hover {
    background-color: transparent !important;
    border: 0px;!important;
  }

`;

const Buttons = styled.div`
  a {
    :hover {
      border-top: 0px !important;
    }
  }
`;

const Header = () => {
  const [navbarTransparent, setnavbarTransparent] = useState(true);
  const [color, setcolor] = useState(true);
  const [navbarLogo, setNavbarLogo] = useState('/images/logo.png');

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setnavbarTransparent(false);
      setcolor(true);
    } else {
      setnavbarTransparent(true);
      setcolor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });

  const changeLogo = () => {
    if (window.scrollY >= 60) {
      setNavbarLogo('/images/logo_black.png');
    } else {
      setNavbarLogo('/images/logo.png');
    }
  };

  useEffect(() => {
    changeLogo();
    // adding the event when scroll change Logo
    window.addEventListener('scroll', changeLogo);
  });
  return (
    <div>
      <Nav
        className={`navbar ${
          navbarTransparent ? 'navbarTransparent' : 'navbarWhite'
        } is-fixed-top`}
        role="navigation"
        aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <figure className="image">
                <Image
                  src={navbarLogo}
                  alt="logo"
                  layout="fixed"
                  height={48}
                  width={100}
                />
              </figure>
            </a>

            <a
              role="button"
              className={`navbar-burger has-text-white  ${
                color ? 'textLight' : 'lightAccent'
              }`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div
            id="navbarBasicExample"
            className="navbar-menu has-text-weight-semibold ">
            <div className="navbar-end menu ">
              <a
                className={`navbar-item is-active ${
                  color ? 'textLight' : 'lightAccent'
                }`}>
                HOME
              </a>

              <a
                className={`navbar-item ${
                  color ? 'textLight' : 'lightAccent'
                }`}>
                COURSES
              </a>
              <a
                className={`navbar-item ${
                  color ? 'textLight' : 'lightAccent'
                }`}>
                PAGES
              </a>
              <a
                className={`navbar-item ${
                  color ? 'textLight' : 'lightAccent'
                }`}>
                APP
              </a>
              <a
                className={`navbar-item ${
                  color ? 'textLight' : 'lightAccent'
                }`}>
                <BsSearch />
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item ">
                <Buttons className="buttons m-0 ">
                  <a
                    className={`is-uppercase has-text-weight-light mr-2 ${
                      color ? 'textLight' : 'lightAccent'
                    }`}>
                    Login
                  </a>
                  <div className="navbar-item ml-2">
                    <a
                      className={`is-uppercase has-text-weight-light mr-2 ${
                        color ? 'textLight' : 'lightAccent'
                      }`}>
                      <BsFillCartDashFill />
                    </a>
                  </div>
                </Buttons>
              </div>
            </div>
          </div>
        </div>
      </Nav>
    </div>
  );
};

export default Header;
