import App from 'App';
import IssueDetail from 'components/IssueDetail';
import Issue from 'pages/Issue';
import NotFound from 'pages/NotFound';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Issue />,
        errorElement: <Navigate to="/notFound" />,
        children: [
          {
            path: '/issues',
            element: <Navigate to="/" />,
          },
          {
            path: '/issues/:id',
            element: <IssueDetail />,
          },
        ],
      },
      { path: '/notFound', element: <NotFound /> },
      { path: '*', element: <Navigate to="/notFound" /> },
    ],
  },
]);

export default router;
