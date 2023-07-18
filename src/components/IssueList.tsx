import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Fragment,
} from 'react';
import { styled } from 'styled-components';
import { BsListCheck } from 'react-icons/bs';
import COLOR from 'constants/color';
import { Link } from 'react-router-dom';
import IssueItem from './IssueItem';
import { useIssue } from 'context/IssueContext';
import { IIssue } from 'interface/issue';
import Loading from './common/Loading';
import InfiniteScroll from '../utils/InfiniteScroll';

const IssueList = () => {
  const [list, setList] = useState<IIssue[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const { issueList }: any = useIssue();

  const preventRef = useRef(true);
  const obsRef = useRef(null);
  const endRef = useRef(false);

  const getIssueList = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await issueList(page);
      if (response) {
        endRef.current = true;
        setList(prev => [...prev, ...response]);
        preventRef.current = true;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [issueList, page]);

  useEffect(() => {
    getIssueList();
  }, [getIssueList, page]);

  InfiniteScroll({ preventRef, obsRef, setPage });

  return (
    <IssueListStyle>
      <H2Style>
        <BsListCheck />
        Issue List
      </H2Style>
      <IssueUlStyle>
        {list.length > 0 ? (
          list.map((issue, index) => (
            <Fragment key={issue.id}>
              {index % 4 === 0 && index !== 0 && (
                <IssueLiStyle>
                  <Link to="https://www.wanted.co.kr/">
                    <ImgStyle
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
                      alt="광고"
                    />
                  </Link>
                </IssueLiStyle>
              )}
              <IssueLiStyle>
                <Link to={`/issues/${issue.number}`}>
                  <IssueItem data={issue} />
                </Link>
              </IssueLiStyle>
            </Fragment>
          ))
        ) : (
          <EmptyImgStyle src="/images/listEmpty.png" alt="listEmpty" />
        )}
        <div ref={obsRef} />
        {isLoading && <Loading />}
      </IssueUlStyle>
    </IssueListStyle>
  );
};

export default IssueList;

const IssueListStyle = styled.div`
  width: 430px;
  border-right: 1px solid ${COLOR.DarkBorder};
`;

const H2Style = styled.h2`
  padding: 16px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    font-size: 30px;
  }
`;

const IssueUlStyle = styled.ul`
  width: 100%;
  padding: 16px;
  overflow-y: auto;
  height: calc(100% - 62px);
  position: relative;
`;

const EmptyImgStyle = styled.img`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const ImgStyle = styled.img`
  background-color: #fff;
  height: 100%;
  padding: 0 35%;
`;
