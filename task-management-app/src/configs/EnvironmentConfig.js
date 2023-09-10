const apis = {
    development: {
        baseURL: 'http://127.0.0.1:5173/api/v1'
    },
    production: {
        baseURL: 'http://127.0.0.1:5173/api/v1'
    }
};

export const env = apis[process.env.NODE_ENV];
