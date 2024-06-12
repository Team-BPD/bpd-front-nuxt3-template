<template>
  <v-list-item :value="index">
    <template v-slot:prepend="{ isActive }">
      <v-list-item-action start>
        <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
      </v-list-item-action>
    </template>
    <template v-slot:append>
      <v-list-item-action end>
        <v-btn
          icon="mdi-delete-outline"
          variant="text"
          @click.prevent.stop="() => {}"
        ></v-btn>
      </v-list-item-action>
    </template>
    <v-list-item-title>{{ todoItem }}</v-list-item-title>
  </v-list-item>
</template>

<script lang="ts" setup>
interface Props {
  todoItem: string;
  index: number;
}
const props = withDefaults(defineProps<Props>(), {
  todoItem: '',
  index: -1,
});
</script>

<style lang="scss" scoped></style>
