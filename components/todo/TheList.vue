<template>
  <v-card class="mx-auto" max-width="700" variant="tonal" color="indigo">
    <v-card-text>
      <v-list select-strategy="classic">
        <todo-list-item
          v-for="(item, index) in todoItems"
          :key="index"
          :todo-item="item"
          :index="index"
        />
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
interface Props {
  todoItems: string[];
}
const props = withDefaults(defineProps<Props>(), {
  todoItems: () => [],
});
</script>

<style lang="scss" scoped></style>
