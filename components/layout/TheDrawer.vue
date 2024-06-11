<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-avatar="/img/duldulgi.png"
        subtitle="BPD@dw.com"
        title="dulgi"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-outline"
        title="Home"
        value="home"
        @click="navigateTo('/', { replace: true })"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-format-list-checks"
        title="Todo List"
        value="todolist"
        @click="navigateTo('/todo', { replace: true })"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
