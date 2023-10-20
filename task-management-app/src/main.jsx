import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <I18nextProvider i18n={i18n}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </I18nextProvider>,
);
