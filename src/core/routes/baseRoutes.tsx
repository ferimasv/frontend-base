import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

import { IRoute } from '../interfaces/IRoute.ts';
import { ROUTE_AUTH, ROUTE_MAIN_MENU, ROUTE_REGISTER, ROUTE_USER_PROFILE } from '../constants/routePath.ts';
import { Layout } from '../components/Layout';

const AuthPage = lazy(() => import('../../auth/components/AuthPage').then(module => ({ default: module.AuthPage })));
const RegisterPage = lazy(() =>
  import('../../auth/components/RegisterPage').then(module => ({ default: module.RegisterPage })),
);
const UserProfilePage = lazy(() =>
  import('../../users/components/UserProfilePage').then(module => ({ default: module.UserProfilePage })),
);

export const BASE_ROUTES: IRoute[] = [
  {
    element: <Layout />,
    children: [
      {
        path: ROUTE_AUTH,
        element: <AuthPage />,
      },
      {
        path: ROUTE_REGISTER,
        element: <RegisterPage />,
      },
      {
        path: ROUTE_USER_PROFILE,
        element: <UserProfilePage />,
      },
      {
        path: '*',
        element: <Navigate to={ROUTE_MAIN_MENU} replace={true} />,
      },
    ],
  },
];
