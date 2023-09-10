import { Navigate, Outlet } from 'react-router';

const PublicRoute = () => {
    const token = true;
    return token ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
