import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { BsFillCartDashFill, BsSearch } from 'react-icons/bs';

const Nav = styled.div`
z-index: 900;
 .menu a {
    color: ${(props) => props.theme.lightAccent}!important;
    transition: 0.2s;
    font-size: 13px;
  }
  .menu a:hover {
    background-color: transparent !important;
    border-top: 2px solid ${(props) => props.theme.lightAccent}!important;
  }
  .navbar-end a {
    color: ${(props) => props.theme.lightAccent}!important;
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
  return (
    <div>
      <Nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <figure className="image">
                <Image
                  src="/images/logo.png"
                  alt="djy"
                  layout="fixed"
                  height={48}
                  width={100}
                />
              </figure>
            </a>

            <a
              role="button"
              className="navbar-burger"
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
            <div className="navbar-end menu">
              <a className="navbar-item ">HOME</a>

              <a className="navbar-item">COURSES</a>
              <a className="navbar-item">PAGES</a>
              <a className="navbar-item">APP</a>
              <a className="navbar-item">
                <BsSearch />
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <Buttons className="buttons m-0 ">
                  <a className="is-uppercase has-text-weight-light mr-2 ">
                    Login
                  </a>
                  <div className="navbar-item ml-2">
                    <a>
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
