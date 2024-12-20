import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    resolve: {
        alias: {
            "@css": "/resources/css",
            "@bootstrap-icons": "/resources/css/icon-fonts/bootstrap-icons/icons/font/bootstrap-icons.min.css",
            "@boxicons-icfonts": "/resources/css/icon-fonts/boxicons",
            "@feather-icfonts": "/resources/css/icon-fonts/feather",
            "@line-awesome-icfonts": "/resources/css/icon-fonts/line-awesome",
            "@remixicons": "/resources/css/icon-fonts/RemixIcons/fonts/remixicon.css",
            "@tabler-icons-icfonts": "/resources/css/icon-fonts/tabler-icons",

            "@js": "/resources/js/assets/js",

        },
    },
    plugins: [
        laravel({
            input: [
                // 'resources/sass/app.scss',
                'resources/js/app.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
});
