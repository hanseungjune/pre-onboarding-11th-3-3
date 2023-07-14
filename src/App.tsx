import GlobalStyle from './GlobalStyle';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { IssueApi } from 'apis/issueApi';
import { HttpClient } from 'httpClient/httpClient';
import IssueProvider from 'context/IssueContext';

const httpClient = new HttpClient(process.env.REACT_APP_BASE_URL);
const issueApi = new IssueApi(httpClient);

function App() {
  return (
    <>
      <GlobalStyle />
      <IssueProvider issueApi={issueApi}>
        <Header />
        <Outlet />
      </IssueProvider>
    </>
  );
}

export default App;
