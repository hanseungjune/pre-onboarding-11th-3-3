import App from 'App';
import NotFound from 'pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '*', element: <NotFound /> },
      {
        path: '/issues',
      },
    ],
  },
]);

export default router;
