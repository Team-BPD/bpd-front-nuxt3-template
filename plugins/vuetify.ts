// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr: true,
    icons: {
      defaultSet: 'mdi',
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
