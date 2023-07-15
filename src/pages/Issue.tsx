import IssueList from 'components/IssueList';
import React from 'react';
import { styled } from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';

const Issue = () => {
  const location = useLocation().pathname;

  return (
    <IssueStyle>
      <IssueList />
      {location === '/' ? (
        <EmptyIssueDetailStyle>
          <img src="/images/empty.png" alt="Empty" />
        </EmptyIssueDetailStyle>
      ) : (
        <Outlet />
      )}
    </IssueStyle>
  );
};

export default Issue;

const IssueStyle = styled.section`
  display: flex;
  height: calc(100vh - 112px);
`;

const EmptyIssueDetailStyle = styled.div`
  width: calc(100% - 430px);
  display: flex;
  padding: 32px;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  img {
    width: 200px;
  }
`;
