<template>
  <v-card flat>
    <TodoTheHead
      @change="v => items.push({ chk: false, text: v })"
      :erase-text="true"
    />
    <TodoTheList
      :todo-items="items"
      @change-chk="
        (chk, idx) => {
          changeTodoList(chk, idx);
        }
      "
      @delete-item="idx => items.splice(idx, 1)"
    />
  </v-card>
</template>

<script lang="ts" setup>
import type { TodoItem } from '~/utils/interface';

const keyword = ref('');
const items = reactive([]) as TodoItem[];

const changeTodoList = (chk: boolean, idx: number) => {
  items[idx].chk = chk;
};
</script>

<style lang="scss" scoped></style>
