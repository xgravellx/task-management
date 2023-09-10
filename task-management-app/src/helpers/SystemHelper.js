import { AppConfigs } from 'configs/AppConfigs.js';

import {
    LocalStorageKeys, SetLocalStorage,
    UpdateLocalStorage, GetLocalStorage
} from 'helpers/LocalStorageHelper.js';

const defaultSystemConfig = {
    language: 'tr'
};

export const GetLocalSystemConfig = () => {
    const localData = GetLocalStorage(LocalStorageKeys.SYSTEM);
    let result = { ...defaultSystemConfig };

    if (localData) {
        result = { ...localData };

        if (localData.version !== AppConfigs.version) {
            // merged version
        }
    } else {
        SetLocalStorage(LocalStorageKeys.SYSTEM, result);
    }

    return result;
};

export const UpdateSystemConfig = (key, value) => {
    const oldLocalData = GetLocalStorage(LocalStorageKeys.SYSTEM);
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

    UpdateLocalStorage(LocalStorageKeys.SYSTEM, newLocalData);
};

export const GetLanguage = () => {
    const localData = GetLocalStorage(LocalStorageKeys.SYSTEM);
    const result = localData || defaultSystemConfig;
    return result.language;
};
