import { IssueApi } from 'apis/issueApi';
import { IIssue, IIssueDetail, IRepository } from 'interface/issue';
import React, { createContext, useContext } from 'react';

interface Props {
  children: React.ReactNode;
  issueApi: IssueApi;
}

const IssueConextDefaultValue = {
  repository: () => Promise.resolve({} as IRepository),
  issueList: () => Promise.resolve({} as IIssue[]),
  issueDetail: () => Promise.resolve({} as IIssueDetail),
};

type IssueContextValue = {
  repository: () => Promise<IRepository>;
  issueList: (page: number) => Promise<IIssue[]>;
  issueDetail: (issueNum: number) => Promise<IIssueDetail>;
};

const IssueContext = createContext<IssueContextValue>(IssueConextDefaultValue);
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
