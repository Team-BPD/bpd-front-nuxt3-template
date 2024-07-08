<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    scale="0.2"
  >
    <div
      class="d-flex flex-column fill-height justify-center align-center text-white"
    >
      <h1 class="text-h4 font-weight-thin mb-4">Todo List Sample</h1>
      <h4 class="subheading">Nuxt3 + Vuetify3</h4>
      {{ $t('hi') }}
      <v-btn :text="locale" @click="toggleLocale()"></v-btn>
    </div>
  </v-parallax>
</template>

<script lang="ts" setup>
const { locale, localeProperties, localeCodes, setLocale } = useI18n();
const toggleLocale = async () => {
  const cuLocaleIdx = localeCodes.value.findIndex(v => v === locale.value);
  const nextLocale =
    localeCodes.value[
      localeCodes.value.length - 1 === cuLocaleIdx ? 0 : cuLocaleIdx + 1
      // eslint-disable-next-line prettier/prettier
      ];
  // eslint-disable-next-line prettier/prettier
  // console.log(localeCodes.value, localeCodes.value.length - 1 === cuLocaleIdx ? 0 : cuLocaleIdx + 1);
  await setLocale(nextLocale);
};
onMounted(async () => {});
</script>

<style lang="scss" scoped></style>
