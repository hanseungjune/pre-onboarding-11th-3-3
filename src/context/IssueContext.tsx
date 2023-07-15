import React, { createContext, useContext } from 'react';

interface Props {
  children: React.ReactNode;
  issueApi: any;
}

const IssueContext = createContext({});
export const useIssue = () => useContext(IssueContext);

export const IssueProvider = ({ children, issueApi }: Props) => {
  const repository = issueApi.repository.bind(issueApi);
  const issueList = issueApi.issueList.bind(issueApi);
  const issueDetail = issueApi.issueDetail.bind(issueApi);

  return (
    <IssueContext.Provider value={{ repository, issueList, issueDetail }}>
      {children}
    </IssueContext.Provider>
  );
};

export default IssueProvider;
