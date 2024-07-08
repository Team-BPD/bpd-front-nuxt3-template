// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  ssr: true,

  nitro: {
    preset: 'node-server',
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
  },
  modules: [
    '@nuxtjs/i18n',
    'nuxt-security',
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
    '@vueuse/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],

  i18n: {
    // set nuxt i18n configuration options.
    // https://i18n.nuxtjs.org/docs/getting-started/usage
    // * 베트남 고객사이트 적용 샘플
    strategy: 'no_prefix',
    locales: [
      // {
      //   code: 'vi',
      //   name: 'Tiếng Việt',
      //   file: 'vi-VN.ts',
      //   fullLocale: 'vi-VN',
      //   customCode: 'vn',
      // },
      {
        code: 'en',
        name: 'English',
        file: 'en-US.ts',
        customCode: 'en',
        iso: 'en-US',
        temperature: 'fahrenheit',
      },
      {
        code: 'ko',
        name: '한국어',
        file: 'ko-KR.ts',
        customCode: 'ko',
        iso: 'ko-KR',
        temperature: 'celsius',
      },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
    // */
  },
  security: {
    removeLoggers: {
      external: [],
      consoleType:
        process.env.ENV_MODE === 'PROD'
          ? ['log', 'debug', 'warn']
          : ['log', 'warn'],
      include: [/\.[jt]sx?$/, /\.vue\??/],
      exclude: [/node_modules/, /\.git/],
    },
    headers: {
      contentSecurityPolicy: {
        'form-action': false,
        'script-src': ['\'unsafe-inline\'', 'https:', 'http:', 'wasm-eval'],
        'script-src-attr': false,
        'connect-src': ['ws:', 'http:', 'https:'],
        'worker-src': ['blob:'],
        'child-src': ['blob:'],
        'img-src': ['data:', 'https:', 'http:'],
        'upgrade-insecure-requests':
          process.env.ENV_MODE != 'PROD' ? false : true,
      },
      crossOriginEmbedderPolicy:
        process.env.ENV_MODE != 'PROD' ? 'unsafe-none' : 'unsafe-none',
      crossOriginResourcePolicy: 'cross-origin',
      permissionsPolicy: {
        // 'web-share': false,
      },
    },
  },
  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: 'esbuild',
    },
    envDir: process.cwd(),
    define: {
      'process.env.DEBUG': false,
      'window.global': {},
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
