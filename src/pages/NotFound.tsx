import React from 'react';
import { styled } from 'styled-components';

const NotFound = () => {
  return (
    <NotFoundStyle>
      <ImgStyle src="images/NotFound.png" alt="" />
      <h1>Page not found</h1>
    </NotFoundStyle>
  );
};

export default NotFound;

const NotFoundStyle = styled.div`
  position: relative;
  height: 400px;
  overflow-x: hidden;
`;

const ImgStyle = styled.img`
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
