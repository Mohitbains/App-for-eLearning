import React from 'react';
import FooterItem from '../atoms/FooterItem';

const items = [
  {
    id: 1,
    image: '/images/logo.png',
    navItems: [{ id: 1, name: 'We make create apps' }],
  },
  {
    id: 2,
    title: 'About Company',
    navItems: [
      { id: 1, name: 'Register', href: '/' },
      { id: 2, name: 'Activate', href: '/' },
      { id: 3, name: 'All Courses', href: '/' },
      { id: 4, name: 'Groups Directory', href: '/' },
      { id: 5, name: 'Members Directory', href: '/' },
    ],
  },
  {
    id: 3,
    title: 'Top Courses',
    navItems: [
      { id: 1, name: 'Top Courses', href: '/' },
      { id: 2, name: 'Internet of Things Security', href: '/' },
      { id: 3, name: 'Deep Virtual Reality', href: '/' },
      { id: 4, name: 'Artificial Intelligence', href: '/' },
      { id: 5, name: 'Machine Learning Tools', href: '/' },
    ],
  },
  {
    id: 4,
    title: 'Popular Categories',
    navItems: [
      { id: 1, name: 'Register', href: '/' },
      { id: 2, name: 'Activate', href: '/' },
      { id: 3, name: 'All Courses', href: '/' },
      { id: 4, name: 'Groups Directory', href: '/' },
      { id: 5, name: 'Members Directory', href: '/' },
    ],
  },
];
const Footer = () => {
  return (
    <div className="section backgroundBlue has-text-centered py-6">
      <div className="container">
        <div className="columns has-text-centered  is-multiline">
          {items.map((item) => (
            <FooterItem key={item.id} footer={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
