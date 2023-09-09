import Sidebar from "components/Sidebar/index.jsx";
import { Styled } from "pages/Layout/styled.js";
import Header from "components/Header/index.jsx";

const Layout = () => {
    return (
        <Styled>
            <Header />
            <Sidebar />
        </Styled>
    );
};

export default Layout;
