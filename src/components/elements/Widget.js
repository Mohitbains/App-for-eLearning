import React from 'react';
import styled from 'styled-components';

const WidgetItem = styled.div`
  hr {
    border-top: 1px solid ${(props) => props.theme.textWhiteLight};
  }
  a {
    :hover .list {
      color: #ffae29 !important;
    }
  }
`;
const Widget = ({ widget }) => {
  return (
    <div className="column is-12 ">
      <WidgetItem className="bgWhiteLight px-4 py-4">
        <h4 className="title textDark is-size-6 py-2 ">{widget.title}</h4>
        <div>
          {widget.lists.map((item) => (
            <div>
              <a key={item.id}>
                <p className="list textDark is-size-6">{item.subtitle}</p>
              </a>
              <hr className="my-2" />
            </div>
          ))}
        </div>
      </WidgetItem>
    </div>
  );
};

export default Widget;
