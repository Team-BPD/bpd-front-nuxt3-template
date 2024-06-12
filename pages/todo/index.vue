<template>
  <v-card flat>
    <TodoTheHead @change="v => items.push(v)" :erase-text="true" />
    <TodoTheList :todo-items="items" />
  </v-card>
</template>

<script lang="ts" setup>
const keyword = ref('');
const items = reactive([]) as string[];
</script>

<style lang="scss" scoped></style>
