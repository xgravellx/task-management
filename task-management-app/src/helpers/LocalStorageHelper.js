export const LocalStorageKeys = {
    SYSTEM: 'HAZEL_SYSTEM',
    AUTH: 'HAZEL_AUTH'
};

export const SetLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const UpdateLocalStorage = (key, value) => {
    const oldData = localStorage.getItem(key);
    if (oldData && value !== null) {
        const newData = {
            ...JSON.parse(oldData),
            ...value
        };
        SetLocalStorage(key, newData);
    }
};

export const GetLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

export const DeleteLocalStorage = (key) => {
    localStorage.removeItem(key);
};

