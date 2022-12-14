import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import {
  BsFillCartDashFill,
  BsSearch,
  BsFillTrophyFill,
  BsFillInfoCircleFill,
} from 'react-icons/bs';

import { IoColorPalette } from 'react-icons/io5';
import { MdMilitaryTech } from 'react-icons/md';
import { GiArtificialHive } from 'react-icons/gi';
import { GoDatabase } from 'react-icons/go';
import Submenu from '../elements/Submenu';

const Button = styled.div``;
const Nav = styled.div`
z-index: 900;
 .menu a {
    color: ${(props) => props.theme.lightAccent};
    transition: 1s;

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
  .dropdown-menu{
    min-width:180vh;


    left: 0 !important;
    right: 0 !important;

    transform: translate(-50%, -50%);
    top: 10rem !important;
}
.columns a:hover{
  border:0px !important;
}

`;

const Buttons = styled.div`
  a {
    :hover {
      border-top: 0px !important;
    }
  }
`;
const iconStyles = {
  color: '#697289',
  fontSize: '40',
};
const menu = [
  {
    id: 1,
    icon: <IoColorPalette style={iconStyles} />,
    title: 'Design',
    subtitle: 'Interface and Design',
    slug: 'design-thinking',
  },
  {
    id: 2,
    icon: <BsFillTrophyFill style={iconStyles} />,
    title: 'Intelligence',
    subtitle: 'Logic and implementation',
    slug: 'intelligence',
  },
  {
    id: 3,
    icon: <MdMilitaryTech style={iconStyles} />,
    title: 'Technology',
    subtitle: 'Research and Innovation',
    slug: 'information',
  },
  {
    id: 4,
    icon: <BsFillInfoCircleFill style={iconStyles} />,
    title: 'Information',

    subtitle: 'Machine learning and information',
    slug: 'information',
  },
  {
    id: 5,
    icon: <GiArtificialHive style={iconStyles} />,
    title: 'Artificial Intelligence',
    subtitle: 'Colab, pytorch & Tensors',
    slug: 'artificial-intelligence',
  },
  {
    id: 6,
    icon: <GoDatabase style={iconStyles} />,
    title: 'Data Mining',
    slug: 'data-mining',
    subtitle: 'Big Data, No sql, Rule Engine',
  },
];
const Header = () => {
  const [navbarTransparent, setnavbarTransparent] = useState(true);
  const [color, setcolor] = useState(true);
  const [navbarLogo, setNavbarLogo] = useState('/images/logo.png');
  const [isActive, setisActive] = useState(false);
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
            <Link href="/">
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
            </Link>

            <Button
              role="button"
              className={`navbar-burger has-text-white  ${
                color ? 'textLight' : 'lightAccent'
              } ${isActive ? 'is-active' : ''}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => {
                setisActive(!isActive);
              }}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </Button>
          </div>

          <div
            id="navbarBasicExample"
            className={`navbar-menu has-text-weight-semibold${
              isActive
                ? 'is-active is-flex is-flex-direction-column textLight  '
                : ''
            }`}>
            <div className="navbar-end menu ">
              <Link href="/">
                <a
                  className={`navbar-item ${
                    color ? 'textLight' : 'lightAccent'
                  } ${isActive ? 'textLight  ' : ''}`}>
                  HOME
                </a>
              </Link>
              <Link href="/courses">
                <a
                  className={`navbar-item ${
                    color ? 'textLight' : 'lightAccent'
                  } ${isActive ? 'textLight  ' : ''}`}>
                  COURSES
                </a>
              </Link>

              <div
                className={`dropdown  is-flex is-align-items-center is-right is-hoverable ${
                  isActive ? 'is-hidden-touch ' : ''
                }`}>
                <div className="dropdown-trigger">
                  <div aria-haspopup="true" aria-controls="dropdown-menu4">
                    <Link href="/course-category/design">
                      <a
                        className={`navbar-item py-5 dropdown is-hoverable ${
                          color ? 'textLight' : 'lightAccent'
                        }`}>
                        PAGES
                      </a>
                    </Link>
                  </div>
                </div>
                <div
                  className="dropdown-menu  "
                  id="dropdown-menu4"
                  role="menu">
                  <div className="columns card bgWhiteLight is-multiline">
                    {menu.map((item) => {
                      return <Submenu submenu={item} key={item.id} />;
                    })}
                  </div>
                </div>
              </div>

              {/* <a
                className={`navbar-item ${
                  color ? 'textLight' : 'lightAccent'
                }`}>
                APP
              </a> */}
              <div className="is-hidden-desktop">
                <Link href="/course-category/design-thinking">
                  <a
                    className={`navbar-item is-uppercase ${
                      color ? 'textLight' : 'lightAccent'
                    } ${isActive ? 'textLight  ' : ''}`}>
                    Design
                  </a>
                </Link>
                <Link href="/course-category/intelligence">
                  <a
                    className={`navbar-item is-uppercase ${
                      color ? 'textLight' : 'lightAccent'
                    } ${isActive ? 'textLight  ' : ''}`}>
                    Intelligence
                  </a>
                </Link>
                <Link href="/course-category/technology">
                  <a
                    className={`navbar-item is-uppercase ${
                      color ? 'textLight' : 'lightAccent'
                    } ${isActive ? 'textLight  ' : ''}`}>
                    Technology
                  </a>
                </Link>
                <Link href="/course-category/information">
                  <a
                    className={`navbar-item is-uppercase ${
                      color ? 'textLight' : 'lightAccent'
                    } ${isActive ? 'textLight  ' : ''}`}>
                    Information
                  </a>
                </Link>
                <Link href="/course-category/artificial-intelligence">
                  <a
                    className={`navbar-item is-uppercase ${
                      color ? 'textLight' : 'lightAccent'
                    } ${isActive ? 'textLight  ' : ''}`}>
                    Artificial Intelligence
                  </a>
                </Link>
                <Link href="/course-category/data-mining">
                  <a
                    className={`navbar-item is-uppercase ${
                      color ? 'textLight' : 'lightAccent'
                    } ${isActive ? 'textLight  ' : ''}`}>
                    Data Mining
                  </a>
                </Link>
              </div>

              <Link href="/">
                <a
                  className={`navbar-item is-hidden-touch ${
                    color ? 'textLight' : 'lightAccent'
                  } ${isActive ? 'textLight  ' : ''} `}>
                  <BsSearch />
                </a>
              </Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-item ">
                <Buttons className="buttons m-0 ">
                  <a
                    className={`is-uppercase has-text-weight-light mr-2 ${
                      color ? 'textLight' : 'lightAccent'
                    } ${isActive ? 'textLight  ' : ''}`}>
                    Login
                  </a>
                  <div className="navbar-item ml-2">
                    <a
                      className={`is-uppercase has-text-weight-light mr-2 ${
                        color ? 'textLight' : 'lightAccent'
                      } ${isActive ? 'textLight  ' : ''}`}>
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
