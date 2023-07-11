import COLOR from 'constants/color';
import { IIssue } from 'interface/issue';
import React from 'react';
import { styled } from 'styled-components';

interface Props {
  data: IIssue;
}

const IssueItem = ({ data }: Props) => {
  return (
    <>
      <IssueTitleStyle>
        <h3>{`#${data.issueNum} ${data.issueTitle}`}</h3>
        <p>{`${data.date} by ${data.author}`}</p>
      </IssueTitleStyle>
      <CommentStyle>{data.comment}</CommentStyle>
    </>
  );
};

export default IssueItem;

const IssueTitleStyle = styled.div`
  width: 85%;

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    line-height: 19px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }

  p {
    font-size: 12px;
    color: ${COLOR.DarkSubText};
    line-height: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }
`;

const CommentStyle = styled.span`
  font-size: 13px;
  background-color: ${COLOR.DarkCountSpan};
  padding: 5px;
  border-radius: 10px;
`;
