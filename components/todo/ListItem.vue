<template>
  <!-- Todo 아이템 -->
  <v-list-item :value="index">
    <!-- 체크박스 영역  -->
    <template v-slot:prepend>
      <v-list-item-action start>
        <v-checkbox-btn
          :model-value="todoItem.chk"
          @update:model-value="(v: any) => updateCheck(v)"
        ></v-checkbox-btn>
      </v-list-item-action>
    </template>
    <!-- 삭제아이콘 영역 -->
    <template v-slot:append>
      <v-list-item-action end>
        <v-btn
          icon="mdi-delete-outline"
          variant="text"
          @click.prevent.stop="$emit('deleteItem', index)"
        ></v-btn>
      </v-list-item-action>
    </template>
    <!-- Todo 아이템 제목 영역 -->
    <v-list-item-title :style="textStyle(todoItem.chk)">
      {{ todoItem.text }}
    </v-list-item-title>
  </v-list-item>
</template>

<script lang="ts" setup>
/**
 * @description Todo 항목 컴포넌트
 *   - Todo 항목을 취소
 *   - Todo 항목을 제거
 */

import type { TodoItem } from '~/utils/interface';

// 로컬 Props 인터페이스 선언
interface Props {
  todoItem: TodoItem;
  index: number;
}

// props 변수 정의
const { todoItem = { chk: false, text: '' }, index = -1 } =
  defineProps<Props>();

// emit 이벤트 메소드 정의
const emits = defineEmits<{
  updateChk: [chk: boolean, idx: number];
  deleteItem: [idx: number];
}>();

/**
 * 체크여부에 따른 취소선 처리
 * @param chk true: 취소선처리, false: 미처리
 */
const textStyle = (chk: boolean) => {
  return chk ? 'text-decoration: line-through;' : '';
};

/**
 * 체크 클릭 이벤트 메소드
 * @param chk true: 체크됨, false: 체크되지 않음
 */
const updateCheck = (chk: boolean) => {
  // emit으로 이벤트 전달
  emits('updateChk', chk, index);
  // 취소선처리
  textStyle(chk);
};
</script>

<style lang="scss" scoped></style>
