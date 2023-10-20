import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {
    // const isLogin = useSelector(...);
    const token = false;

    if (!token) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
};

export default PrivateRoute;
