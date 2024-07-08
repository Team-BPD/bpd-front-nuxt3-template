<template>
  <!-- Todo 리스트 Outer 영역 -->
  <v-card class="mx-auto" max-width="700" variant="tonal" color="indigo">
    <!-- Todo 리스트 Inner 영역 -->
    <v-card-text>
      <!-- Todo 리스트 렌더링 영역 -->
      <v-list select-strategy="classic">
        <!-- Todo 항목 렌더링 영역 -->
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
/**
 * @description Todo 리스트 바디 컴포넌트
 *   - Todo 항목을 취소
 *   - Todo 항목을 제거
 */

import type { TodoItem } from '~/utils/interface';

// 로컬 Props 인터페이스 선언
interface Props {
  todoItems: TodoItem[]; // Todo 리스트 데이터
}

// Todo 리스트 데이터 변수 선언
const { todoItems = [] } = defineProps<Props>();

// Emit 이벤트 메소드 선언
defineEmits<{
  changeChk: [chk: boolean, idx: number]; // 취소선 처리 이벤트
  deleteItem: [idx: number]; // 삭제처리 이벤트
}>();
</script>

<style lang="scss" scoped></style>
