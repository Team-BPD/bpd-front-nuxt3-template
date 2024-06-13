<template>
  <!-- todo 페이지 -->
  <v-card flat>
    <!-- Todo 아이템을 입력 및 추가하는 헤더 영역 -->
    <TodoTheHead
      @change="
        /* 입력값 전달받으면 데이터 변수에 값 추가 */
        v => items.push({ chk: false, text: v })
      "
      :erase-text="true"
    />

    <!-- 현재 Todo 리스트를 보여주는 바디 영역 -->
    <TodoTheList
      :todo-items="items"
      @change-chk="
        /* 체크값이 변경될때, 데이터 변수에도 변경처리 */
        (chk, idx) => {
          changeTodoList(chk, idx);
        }
      "
      @delete-item="
        /* 삭제 버튼 이벤트 발동시 데이터 변수에도 적용 */
        idx => items.splice(idx, 1)
      "
    />
  </v-card>
</template>

<script lang="ts" setup>
/**
 * @description Todo 페이지
 *   - Todo 항목을 추가
 *   - Todo 항목을 취소
 *   - Todo 항목을 제거
 */

import type { TodoItem } from '~/utils/interface';

// Todo 데이터 변수 선언
const items = reactive([]) as TodoItem[];

/**
 * Todo 리스트 항목 취소여부 처리
 * @param chk true: 취소todo, false: 활성todo
 * @param idx 처리 Todo 대상 항목 인덱스
 */
const changeTodoList = (chk: boolean, idx: number) => {
  items[idx].chk = chk;
};
</script>

<style lang="scss" scoped></style>
