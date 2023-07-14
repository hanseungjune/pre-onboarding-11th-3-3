import React from 'react';
import { styled } from 'styled-components';
import Lottie from 'lottie-react';
import LoadingLottie from 'lotties/loading.json';

const Loading = () => {
  return (
    <LottieWrap>
      <Lottie animationData={LoadingLottie} loop={true} className="loading" />
    </LottieWrap>
  );
};

export default Loading;

const LottieWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading {
    width: 50px;
  }
`;
