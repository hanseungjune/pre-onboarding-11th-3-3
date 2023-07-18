import COLOR from 'constants/color';
import { IIssue } from 'interface/issue';
import React from 'react';
import { styled, css } from 'styled-components';
import { BiMessage } from 'react-icons/bi';

interface Props {
  data: IIssue;
}

const IssueItem = ({ data }: Props) => {
  const date = data.updated_at.toLocaleString().slice(0, 10);

  return (
    <>
      <TitleAreaStyle>
        <H3Style>{`#${data.number} ${data.title}`}</H3Style>
        <PStyle>{`updated on ${date} by ${data.user.login}`}</PStyle>
      </TitleAreaStyle>
      {data.comments > 0 && (
        <CommentStyle>
          <BiMessage />
          {data.comments}
        </CommentStyle>
      )}
    </>
  );
};

export default IssueItem;

export const TextOverflow = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

const TitleAreaStyle = styled.div`
  width: 82%;
`;

const H3Style = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  line-height: 19px;
  ${TextOverflow}
`;

const PStyle = styled.p`
  font-size: 12px;
  color: ${COLOR.DarkSubText};
  line-height: 14px;
  ${TextOverflow}
`;

const CommentStyle = styled.span`
  font-size: 13px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${COLOR.DarkSubText};

  svg {
    font-size: 20px;
    fill: ${COLOR.DarkSubText};
  }
`;
