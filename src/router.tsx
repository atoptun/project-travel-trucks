import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { withSuspenseWithoutProps } from './helpers';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const AppLayout = lazy(() => import('./components/AppLayout/AppLayout'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const CampersPage = lazy(() => import('./pages/CampersPage/CampersPage'));
const CamperDetailsPage = lazy(
  () => import('./pages/CamperDetailsPage/CamperDetailsPage'),
);

const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspenseWithoutProps(AppLayout),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: withSuspenseWithoutProps(HomePage) },
      {
        path: '/campers',
        element: withSuspenseWithoutProps(CampersPage),
      },
      {
        path: '/campers/:id',
        element: withSuspenseWithoutProps(CamperDetailsPage),
      },

      { path: '*', element: withSuspenseWithoutProps(NotFoundPage) },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
