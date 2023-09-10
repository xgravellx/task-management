import { AppConfigs } from 'configs/appConfigs.js';

import {
    LocalStorageKeys, setLocalStorage,
    updateLocalStorage, getLocalStorage
} from 'helpers/localStorage.js';

const defaultSystemConfig = {
    language: 'tr'
};

export const getLocalSystemConfig = () => {
    const localData = getLocalStorage(LocalStorageKeys.SYSTEM);
    let result = { ...defaultSystemConfig };

    if (localData) {
        result = { ...localData };

        if (localData.version !== AppConfigs.version) {
            // merged version
        }
    } else {
        setLocalStorage(LocalStorageKeys.SYSTEM, result);
    }

    return result;
};

export const updateSystemConfig = (key, value) => {
    const oldLocalData = getLocalStorage(LocalStorageKeys.SYSTEM);
    let newLocalData;
    if (oldLocalData) {
        newLocalData = {
            ...oldLocalData,
            [key]: value,
        };
    } else {
        newLocalData = {
            ...defaultSystemConfig,
            [key]: value,
        };
    }

    updateLocalStorage(LocalStorageKeys.SYSTEM, newLocalData);
};

export const getLanguage = () => {
    const localData = getLocalStorage(LocalStorageKeys.SYSTEM);
    const result = localData || defaultSystemConfig;
    return result.language;
};
