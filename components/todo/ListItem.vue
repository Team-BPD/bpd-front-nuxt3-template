<template>
  <v-list-item :value="index">
    <template v-slot:prepend>
      <v-list-item-action start>
        <v-checkbox-btn
          @update:model-value="(v: any) => updateCheck(v)"
        ></v-checkbox-btn>
      </v-list-item-action>
    </template>
    <template v-slot:append>
      <v-list-item-action end>
        <v-btn
          icon="mdi-delete-outline"
          variant="text"
          @click.prevent.stop="$emit('deleteItem', index)"
        ></v-btn>
      </v-list-item-action>
    </template>
    <v-list-item-title :style="textSyle">{{ todoItem.text }}</v-list-item-title>
  </v-list-item>
</template>

<script lang="ts" setup>
import type { TodoItem } from '~/utils/interface';

/*
Props 
*/
interface Props {
  todoItem: TodoItem;
  index: number;
}

const { todoItem = { chk: false, text: '' }, index = -1 } =
  defineProps<Props>();

const emits = defineEmits<{
  updateChk: [chk: boolean, idx: number];
  deleteItem: [idx: number];
}>();

const textSyle = ref('');

const updateCheck = (chk: boolean) => {
  emits('updateChk', chk, index);
  textSyle.value = chk ? 'text-decoration: line-through;' : '';
};
</script>

<style lang="scss" scoped></style>
