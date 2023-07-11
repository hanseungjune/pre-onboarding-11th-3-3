import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { IIssue } from 'interface/issue';
import IssueItem from './IssueItem';

const IssueDetail = () => {
  const [issueDetail, setIssueDetail] = useState<IIssue>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('mockData/issueDetail.json');
        const data = await response.json();
        setIssueDetail(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(issueDetail);

  return (
    <IssueDetailStyle>
      {issueDetail && <IssueItem data={issueDetail} />}
    </IssueDetailStyle>
  );
};

export default IssueDetail;

const IssueDetailStyle = styled.div`
  width: calc(100% - 400px);
  padding: 16px;
`;
