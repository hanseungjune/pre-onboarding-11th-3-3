import App from 'App';
import Issue from 'pages/Issue';
import NotFound from 'pages/NotFound';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <Issue />,
      },
      { path: '/404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
]);

export default router;
