import { Navigate, Outlet } from 'react-router';

const PublicRoute = () => {
    const token = false;
    return token ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
