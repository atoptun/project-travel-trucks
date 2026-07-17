import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { withSuspense } from './helpers';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const AppLayout = lazy(() => import('./components/AppLayout/AppLayout'));
const AppLayoutSuspense = withSuspense(AppLayout);

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const HomePageSuspense = withSuspense(HomePage);

const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const NotFoundPageSuspense = withSuspense(NotFoundPage);

const CampersPage = lazy(() => import('./pages/CampersPage/CampersPage'));
const CampersPageSuspense = withSuspense(CampersPage);

const CamperDetailsPage = lazy(
  () => import('./pages/CamperDetailsPage/CamperDetailsPage'),
);
const CamperDetailsPageSuspense = withSuspense(CamperDetailsPage);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayoutSuspense />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePageSuspense /> },
      {
        path: '/campers',
        element: <CampersPageSuspense />,
      },
      {
        path: '/campers/:id',
        element: <CamperDetailsPageSuspense />,
      },

      { path: '*', element: <NotFoundPageSuspense /> },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
