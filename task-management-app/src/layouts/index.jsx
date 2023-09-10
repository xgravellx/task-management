import { Suspense } from 'react';

import Routes from 'routes';

import AppLayout from 'src/layouts/AppLayout/index.jsx';
import AuthLayout from 'src/layouts/AuthLayout/index.jsx';

const Layout = () => {
    const isLogin = true;

    const Layout = isLogin ? AppLayout : AuthLayout;

    return (
        <Suspense fallback={<div>Yükleniyor...</div>}>
            <Layout>
                <Routes />
            </Layout>
        </Suspense>
    );
};

export default Layout;
