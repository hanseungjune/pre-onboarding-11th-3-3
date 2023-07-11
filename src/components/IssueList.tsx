import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { BsListCheck } from 'react-icons/bs';
import COLOR from 'constants/color';
import { IIssue } from 'interface/issue';
import { Link } from 'react-router-dom';
import IssueItem from './IssueItem';

const IssueList = () => {
  const [list, setList] = useState<IIssue[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('mockData/issueList.json');
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <IssueListStyle>
      <h2>
        <BsListCheck />
        Issue List
      </h2>
      <IssueUlStyle>
        {list.length > 0 &&
          list.map(issue => (
            <IssueLiStyle key={issue.issueNum}>
              <Link to={`/${issue.issueNum}`}>
                <IssueItem data={issue} />
              </Link>
            </IssueLiStyle>
          ))}
      </IssueUlStyle>
    </IssueListStyle>
  );
};

export default IssueList;

const IssueListStyle = styled.div`
  width: 400px;
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

    span {
      background-color: rgba(255, 255, 255, 0.25);
    }
  }
`;
