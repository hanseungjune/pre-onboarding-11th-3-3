import React, { useState, useEffect, useCallback } from 'react';
import { styled } from 'styled-components';
import IssueItem from './IssueItem';
import { useIssue } from 'context/IssueContext';
import { IIssueDetail } from 'interface/issue';
import COLOR from 'constants/color';
import { useParams } from 'react-router-dom';
import Loading from './common/Loading';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ImWarning } from 'react-icons/im';

const IssueDetail = () => {
  const [detail, setDetail] = useState<IIssueDetail>();
  const [isLoading, setIsLoading] = useState(false);
  const { issueDetail } = useIssue();
  const params = useParams().id;

  const getIssueDetail = useCallback(async () => {
    try {
      setIsLoading(true);
      setDetail(await issueDetail(Number(params)));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [issueDetail, params]);

  useEffect(() => {
    getIssueDetail();
  }, [getIssueDetail]);

  return (
    <IssueDetailStyle>
      {detail ? (
        <IssueDetailInnerStyle>
          <TitleAreaStyle>
            <img src={detail.user.avatar_url} alt={detail.user.login} />
            <IssueItem data={detail} />
          </TitleAreaStyle>
          <DescAreaStyle>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              children={detail.body}
              components={{
                code({
                  node,
                  inline,
                  className,
                  style,
                  children,
                  ...props
                }: CodeProps) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      style={materialDark}
                      {...props}
                    />
                  ) : (
                    <Code className={className} {...props}>
                      {children}
                    </Code>
                  );
                },
              }}
            />
          </DescAreaStyle>
        </IssueDetailInnerStyle>
      ) : isLoading ? (
        <Loading />
      ) : (
        <WarningStyle>
          <ImWarning />
          존재하지 않는 이슈입니다
        </WarningStyle>
      )}
    </IssueDetailStyle>
  );
};

export default IssueDetail;

const IssueDetailStyle = styled.div`
  width: calc(100% - 430px);
  display: flex;
  justify-content: center;
  overflow: auto;
`;

const IssueDetailInnerStyle = styled.div`
  padding-top: 36px;
  width: 65%;

  img {
    width: 100%;
  }
`;

const TitleAreaStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid ${COLOR.DarkGray};
  gap: 16px;

  > div {
    margin-right: auto;
  }

  img {
    width: 50px;
    border-radius: 50%;
  }
`;

const DescAreaStyle = styled.div`
  padding-bottom: 52px;

  h1 {
    border-bottom: 1px solid ${COLOR.DarkCountSpan};
    padding-bottom: 10px;
  }

  ul,
  ol {
    margin: 20px 25px;
  }

  ul {
    li {
      list-style: initial;
    }
  }

  ol {
    li {
      list-style: decimal;
    }
  }

  li {
    margin: 7px 0;
    p {
      margin: 0;
    }
  }

  p {
    margin: 10px 0;
    word-break: break-word;
  }

  a {
    text-decoration: underline;
  }

  hr {
    margin: 30px 0;
  }
`;

const Code = styled.code`
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.2em 0.4em;
`;

const WarningStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #8e8e8e;

  svg {
    font-size: 6em;
    margin-bottom: 35px;
    fill: #8e8e8e;
  }
`;
