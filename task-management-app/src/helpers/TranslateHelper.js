import i18next from "i18next";
import {keyframes} from "styled-components";

const Translate = (key) => {
   if (!key) return '';
   return i18next.t(key);
};

const FormatTranslate = (params) => {
    const { key, format } = params;
    return i18next.t(key, { ...format });
};

export const ChangeLanguage = (key) => {
    i18next.changeLanguage(key);
};

