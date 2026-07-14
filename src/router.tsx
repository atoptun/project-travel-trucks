import { lazy,Suspense, type ComponentType } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage/ErrorPage';

const AppLayout = lazy(() => import('./components/AppLayout/AppLayout'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const CampersPage = lazy(() => import('./pages/CampersPage/CampersPage'));
const CamperDetailsPage = lazy(
  () => import('./pages/CamperDetailsPage/CamperDetailsPage'),
);


export const withSuspense = (Component: ComponentType) => {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Component />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(AppLayout),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: withSuspense(HomePage) },
      {
        path: '/campers',
        element: withSuspense(CampersPage),
      },
      {
        path: '/campers/:id',
        element: withSuspense(CamperDetailsPage),
      },

      { path: '*', element: withSuspense(NotFoundPage) },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
