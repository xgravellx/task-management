import { Row, Col } from 'antd';

const Login = () => {
    return (
        <div className="login-container">
            <Row justify="center" className="align-items-stretch h-100">
                <Col xs={0} sm={0} md={0} lg={9}>
                    <div className="d-flex flex-column justify-content-between h-100 px-4 login-left-panel">
                        <div className="text-left">
                            <img src="/img/logo-white.png" alt="logo"/>
                        </div>
                        <Row justify="center" className="h-25 pb-5">
                            <Col xs={0} sm={0} md={0} lg={20}>
                                <div className="text-white login-text">
                                    <IntlMessage id="login_text_1" />
                                </div>
                                <div className="text-white login-text">
                                    <IntlMessage id="login_text_2" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={20} sm={20} md={24} lg={15}>
                    <div className="container d-flex flex-column justify-content-center h-100">
                        <Row justify="center">
                            <Col xs={24} sm={24} md={20} lg={12} xl={8}>
                                <h1><IntlMessage id="sign_in" /></h1>
                                <div>
                                    <LoginForm {...props}/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
