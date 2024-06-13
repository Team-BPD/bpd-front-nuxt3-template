<template>
  <v-card class="mx-auto" max-width="700" variant="tonal" color="indigo">
    <v-card-text>
      <v-list select-strategy="classic">
        <todo-list-item
          v-for="(item, index) in todoItems"
          :key="index"
          :todo-item="item"
          :index="index"
          @update-chk="(chk, idx) => $emit('changeChk', chk, idx)"
          @delete-item="idx => $emit('deleteItem', idx)"
        />
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import type { TodoItem } from '~/utils/interface';

interface Props {
  todoItems: TodoItem[];
}

const { todoItems = [] } = defineProps<Props>();

const emits = defineEmits<{
  changeChk: [chk: boolean, idx: number];
  deleteItem: [idx: number];
}>();
</script>

<style lang="scss" scoped></style>
