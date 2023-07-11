import IssueList from 'components/IssueList';
import React from 'react';
import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';

const Issue = () => {
  return (
    <IssueStyle>
      <IssueList />
      <Outlet />
    </IssueStyle>
  );
};

export default Issue;

const IssueStyle = styled.section`
  display: flex;
`;
