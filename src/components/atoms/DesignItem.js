import React from 'react';
import Card from '../elements/Card';
import Widget from '../elements/Widget';

const posts = [
  {
    id: 1,
    image: '/images/design1.png',
    title: 'Design Dynamics',
    starvalue: 3,
    review: '(2 REVIEWS)',
    users: 25,
    icon: '/images/user1.jpg',
    name: 'Pamela Key',
    enroll: 'Apply to enroll',
  },
  {
    id: 2,
    image: '/images/design2.png',
    title: 'Understanding Color Psychology',
    starvalue: 4,
    review: '(1 REVIEWS)',
    users: 91,
    icon: '/images/user1.jpg',
    name: 'Pamela Key',
    enroll: '',
    price: '$189.00 per year',
  },
  {
    id: 3,
    image: '/images/design3.png',
    title: 'Impact of a Minimalist Design',
    starvalue: 4,
    review: '(13 REVIEWS)',
    users: 19351,
    icon: '/images/user1.jpg',
    name: 'Pamela Key',
    enroll: 'FREE',
  },
  {
    id: 4,
    image: '/images/design4.png',
    title: 'UI/UX Basics and differences',
    starvalue: 3,
    review: '(1 REVIEWS)',
    users: 19,
    icon: '/images/user1.jpg',
    name: 'Pamela Key',
    enroll: 'Apply to enroll',
  },
];

const widgets = [
  {
    id: 1,
    title: 'ARCHIVES',
    lists: [
      {
        id: 1,
        subtitle: 'August 2020',
      },
    ],
  },
  {
    id: 2,
    title: 'CATEGORIES',
    lists: [
      {
        id: 1,
        subtitle: 'Uncategorized',
      },
    ],
  },
  {
    id: 3,
    title: 'META',
    lists: [
      {
        id: 1,
        subtitle: 'Register',
      },
      {
        id: 2,
        subtitle: 'Log in',
      },
      {
        id: 3,
        subtitle: 'Entries feed',
      },
      {
        id: 4,
        subtitle: 'Comments feed',
      },
      {
        id: 5,
        subtitle: 'WordPress.org',
      },
    ],
  },
];
const DesignItem = () => {
  return (
    <div className="section py-6">
      <div className="container">
        <div className="columns">
          <div className="column is-9">
            <div className="columns is-multiline">
              {posts.map((item) => {
                return <Card post={item} key={item.id} />;
              })}
            </div>
          </div>
          <div className="column">
            <div className="columns is-multiline">
              {widgets.map((item) => {
                return <Widget widget={item} key={item.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignItem;
