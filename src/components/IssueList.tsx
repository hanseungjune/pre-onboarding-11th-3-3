import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { BsListCheck } from 'react-icons/bs';
import COLOR from 'constants/color';
import { Link } from 'react-router-dom';
import IssueItem from './IssueItem';
import { useIssue } from 'context/IssueContext';
import { IIssue } from 'interface/issue';

const IssueList = () => {
  const [list, setList] = useState<IIssue[]>([]);
  const { issueList }: any = useIssue();

  useEffect(() => {
    (async () => {
      try {
        setList(await issueList(2));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [issueList, setList]);

  return (
    <IssueListStyle>
      <h2>
        <BsListCheck />
        Issue List
      </h2>
      <IssueUlStyle>
        {list.length > 0
          ? list.map(issue => (
              <IssueLiStyle key={issue.id}>
                <Link to={`/${issue.number}`}>
                  <IssueItem data={issue} />
                </Link>
              </IssueLiStyle>
            ))
          : 'Loading...'}
      </IssueUlStyle>
    </IssueListStyle>
  );
};

export default IssueList;

const IssueListStyle = styled.div`
  width: 430px;
  height: calc(100vh - 109px);
  border-right: 1px solid ${COLOR.DarkBorder};

  h2 {
    padding: 16px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      font-size: 30px;
    }
  }
`;

const IssueUlStyle = styled.ul`
  padding: 16px;
  overflow-y: auto;
  height: calc(100% - 62px);
`;

const IssueLiStyle = styled.li`
  padding: 15px 10px;
  border-radius: 10px;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    background-color: ${COLOR.DarkHover};

    h3 {
      text-decoration: underline;
      color: ${COLOR.White};
    }
  }
`;
