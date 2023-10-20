import Routes from 'routes';

import AppLayout from 'layouts/AppLayout/index.jsx';
import AuthLayout from 'layouts/AuthLayout/index.jsx';

const Layouts = () => {
    const isLogin = false;
    const Layout = isLogin ? AppLayout : AuthLayout;

    return (
        <Layout>
            <Routes />
        </Layout>
    );
};

export default Layouts;
