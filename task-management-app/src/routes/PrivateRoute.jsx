import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    // const isLogin = useSelector(...);
    // const token = GetAuthInfoByKey('token');

    // if (!token && !isLogin) {
    //     return <Navigate to="/login" />;
    // }
    return <Outlet />;
};

export default PrivateRoute;
