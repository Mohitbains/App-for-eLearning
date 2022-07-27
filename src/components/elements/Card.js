import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import ReactStars from 'react-rating-stars-component';
import { FaUser } from 'react-icons/fa';

const CardContent = styled.div`
  border: 1px solid ${(props) => props.theme.textWhiteLight};

  hr {
    border-top: 1px solid ${(props) => props.theme.textWhiteLight};
  }
  a {
    :hover .name {
      color: #ffae29 !important;
    }
  }
`;
const User = styled.div`
  flex: 1;
  .icon {
    color: ${(props) => props.theme.textDark};
    height: 1rem;
    width: 1rem;
  }
`;
const Card = ({ post }) => {
  const starValues = {
    size: 15,
    value: post.starvalue,
  };
  return (
    <div className="column is-4">
      <CardContent className="card ">
        <div className="card-image">
          <figure className="image is-5by3">
            <Image src={post.image} alt="Picture of the author" layout="fill" />
          </figure>
        </div>
        <div className="card-content">
          <a>
            <h4 className="name is-size-5 has-text-weight-normal textDark">
              {post?.title}
            </h4>
          </a>
          <hr className="my-4" />
          <div className="is-flex is-align-items-center">
            <ReactStars {...starValues} />
            <p className="is-size-7 mx-1 textLight ">{post?.review}</p>
            <User className="is-flex is-justify-content-end is-align-items-center">
              <FaUser className="icon" />
              <p className="ml-1 has-text-weight-medium textDark">
                {post?.users}
              </p>
            </User>
          </div>
          <hr className="my-4" />
          <div className="is-flex is-align-items-center">
            <figure className="image is-32x32">
              <Image
                className="is-rounded"
                src={post.icon}
                alt="Picture of the author"
                layout="fill"
              />
            </figure>
            <a>
              <p className="name ml-2 has-text-weight-normal textDark">
                {post.name}
              </p>
            </a>
          </div>
          <hr className="my-4" />
          <div>
            {post.enroll ? (
              <p className="is-size-6 has-text-centered has-text-weight-bold textWhiteLight">
                {post.enroll}
              </p>
            ) : (
              <p className="is-size-6 has-text-centered has-text-weight-bold textDark">
                {post.price}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </div>
  );
};

export default Card;
