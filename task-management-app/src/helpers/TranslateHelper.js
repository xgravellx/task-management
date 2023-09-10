import i18next from 'i18next';

export const Translate = (key) => {
    if (!key) return '';
    return i18next.t(key);
};

export const FormatTranslate = (params) => {
    const { key, format } = params;
    return i18next.t(key, { ...format });
};

export const ChangeLanguage = (key) => {
    i18next.changeLanguage(key);
};

