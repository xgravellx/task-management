import { Styled } from "components/Header/styled.js";
import {LocalStorageKeys, setLocalStorage} from "src/helpers/localStorage.js";

const Header = () => {

    const toggleTheme = (theme) => {
        setLocalStorage(LocalStorageKeys.SYSTEM, theme)
    }

    return (
        <Styled>
            <nav className="navbar">
                <button onClick={(theme) => toggleTheme(theme)}>Tema</button>
            </nav>
        </Styled>
    );
};

export default Header;
