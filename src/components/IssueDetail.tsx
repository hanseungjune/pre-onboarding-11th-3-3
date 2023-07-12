import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import IssueItem from './IssueItem';
import { useIssue } from 'context/IssueContext';
import { IIssueDetail } from 'interface/issue';
import COLOR from 'constants/color';
import { useLocation } from 'react-router-dom';

const IssueDetail = () => {
  const [detail, setDetail] = useState<IIssueDetail>();
  const { issueDetail }: any = useIssue();
  const location = useLocation().pathname;

  useEffect(() => {
    (async () => {
      try {
        setDetail(await issueDetail(location));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [location, issueDetail]);

  return (
    <IssueDetailStyle>
      <IssueDetailInnerStyle>
        {detail ? (
          <>
            <TitleAreaStyle>
              <IssueItem data={detail} />
            </TitleAreaStyle>
            <p>{detail.body}</p>
          </>
        ) : (
          'Loading...'
        )}
      </IssueDetailInnerStyle>
    </IssueDetailStyle>
  );
};

export default IssueDetail;

const IssueDetailStyle = styled.div`
  width: calc(100% - 430px);
  padding: 32px;
  display: flex;
  justify-content: center;
`;

const IssueDetailInnerStyle = styled.div`
  width: 80%;
`;

const TitleAreaStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid ${COLOR.DarkCountSpan};
`;
