export const LocalStorageKeys = {
    SYSTEM: 'HAZEL_SYSTEM',
    AUTH: 'HAZEL_AUTH'
};

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const updateLocalStorage = (key, value) => {
    const oldData = localStorage.getItem(key);
    if (oldData && value !== null) {
        const newData = {
            ...JSON.parse(oldData),
            ...value
        };
        setLocalStorage(key, newData);
    }
};

export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

export const deleteLocalStorage = (key) => {
    localStorage.removeItem(key);
};

