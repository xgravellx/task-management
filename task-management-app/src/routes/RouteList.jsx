import PublicRoute from 'routes/PublicRoute.jsx';
import PrivateRoute from 'routes/PrivateRoute.jsx';

import NotFound from 'pages/NotFound.jsx';
import Dashboard from 'pages/Dashboard/index.jsx';
import Login from 'pages/Entry/Login/index.jsx';

const RouteList = [
    { path: '*', element: <NotFound /> },
    { path: '/', element: <Dashboard /> }
];

const AppRoutes = [
    { path: '', element: <PrivateRoute />, children: RouteList },
    {
        path: '',
        element: <PublicRoute />,
        children: [
            { path: '/login', element: <Login /> },
        ],
    },
];

export default AppRoutes;

