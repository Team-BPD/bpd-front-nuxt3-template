<template>
  <v-toolbar
    image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    dark
    extended
    flat
  >
    <v-toolbar-title class="text-grey pr-5" style="color: white !important">
      Todo List
    </v-toolbar-title>
  </v-toolbar>

  <v-card class="mx-auto" max-width="700" style="margin-top: -64px">
    <v-toolbar dense floating>
      <v-toolbar-title class="text-grey pr-5">
        <v-text-field
          prepend-inner-icon="mdi-playlist-plus"
          density="compact"
          label="Input your todo item."
          variant="solo"
          hide-details
          single-line
        />
      </v-toolbar-title>
    </v-toolbar>

    <v-divider></v-divider>
  </v-card>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
