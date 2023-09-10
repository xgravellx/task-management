import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            'src': path.resolve(__dirname, './src'),
            'assets': path.resolve(__dirname, './src/assets'),
            'components': path.resolve(__dirname, './src/components'),
            'configs': path.resolve(__dirname, './src/configs'),
            'helpers': path.resolve(__dirname, './src/helpers'),
            'hooks': path.resolve(__dirname, './src/hooks'),
            'pages': path.resolve(__dirname, './src/pages'),
            'routes': path.resolve(__dirname, './src/routes'),
        }
    }
});
