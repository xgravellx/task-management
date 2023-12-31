import { Styled } from 'components/Header/styled.js';
import { LocalStorageKeys, SetLocalStorage } from 'helpers/LocalStorageHelper.js';

const Header = () => {

    const toggleTheme = (theme) => {
        SetLocalStorage(LocalStorageKeys.SYSTEM, theme);
    };

    return (
        <Styled>
            <nav className="navbar">
                <button onClick={(theme) => toggleTheme(theme)}>Tema</button>
            </nav>
        </Styled>
    );
};

export default Header;
