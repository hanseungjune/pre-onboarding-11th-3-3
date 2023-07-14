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
        children: [
          {
            path: '/:id',
            element: <IssueDetail />,
            errorElement: <Navigate to="/notFound" />,
          },
        ],
      },
      { path: '/notFound', element: <NotFound /> },
      { path: '*', element: <Navigate to="/notFound" /> },
    ],
  },
]);

export default router;
