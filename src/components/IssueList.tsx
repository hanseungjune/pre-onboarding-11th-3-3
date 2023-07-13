import React, { useState, useEffect, useRef, useCallback } from 'react';
import { styled } from 'styled-components';
import { BsListCheck } from 'react-icons/bs';
import COLOR from 'constants/color';
import { Link } from 'react-router-dom';
import IssueItem from './IssueItem';
import { useIssue } from 'context/IssueContext';
import { IIssue } from 'interface/issue';
import Lottie from 'lottie-react';
import LoadingLottie from 'lotties/loading.json';

const IssueList = () => {
  const [list, setList] = useState<IIssue[]>([]);
  const [page, setPage] = useState(1);

  const { issueList }: any = useIssue();

  const [loading, setLoading] = useState(false);
  const preventRef = useRef(true);
  const obsRef = useRef(null);
  const endRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, {
      threshold: 0.5,
      rootMargin: '80px',
    });
    if (obsRef.current) observer.observe(obsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    getPost();
  }, [page]);

  const obsHandler = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage(prev => prev + 1);
    }
  };

  const getPost = useCallback(async () => {
    setLoading(true);
    try {
      const res = await issueList(page);
      console.log(res);
      if (res) {
        endRef.current = true;
        setList(prev => [...prev, ...res]);
        preventRef.current = true;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  return (
    <IssueListStyle>
      <h2>
        <BsListCheck />
        Issue List
      </h2>
      <IssueUlStyle>
        {list.length > 0 &&
          list.map(issue => (
            <IssueLiStyle key={issue.id}>
              <Link to={`/${issue.number}`}>
                <IssueItem data={issue} />
              </Link>
            </IssueLiStyle>
          ))}
        {loading && (
          <LottieWrap>
            <Lottie
              animationData={LoadingLottie}
              loop={true}
              className="loading"
            />
          </LottieWrap>
        )}
        <div ref={obsRef} />
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

const LottieWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading {
    width: 50px;
  }
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
