<template>
  <!-- todo 페이지 -->
  <v-card flat>
    <!-- Todo 아이템을 입력 및 추가하는 헤더 영역 -->
    <TodoTheHead
      @change="v => setItem({ chk: false, text: v })"
      :erase-text="true"
    />

    <!-- 현재 Todo 리스트를 보여주는 바디 영역 -->
    <TodoTheList
      :todo-items="translateItems"
      @change-chk="
        (chk, idx) => {
          changeTodoList(chk, idx);
        }
      "
      @delete-item="idx => removeItem(idx)"
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

// Todo 데이터 스토어 가져오기(action)
const { setItem, removeItem, updateItem } = useDataStore();

// Todo 데이터 스토어 state 가져오기
const { items } = storeToRefs(useDataStore());

// 화면에 표시할 Todo 데이터 리액티브 변수 선언
const translateItems = ref([] as TodoItem[]);

// Todo 데이터 스토어 state 감시자
watch(items, async v => {
  translateItems.value = JSON.parse(await decAES256(v));
});

/**
 * Todo 리스트 항목 취소여부 스토어 반영
 * @param chk true: 취소todo, false: 활성todo
 * @param idx 처리 Todo 대상 항목 인덱스
 */
const changeTodoList = (chk: boolean, idx: number) => {
  //스토어 반영
  updateItem(chk, idx);
};

// 해당 파일이 메모리에 마운트 완료 되면 실행
onMounted(async () => {
  // 화면표시할 Todo 데이터 변수에 평문화된 Todo 데이터 대입
  translateItems.value = items.value
    ? JSON.parse(await decAES256(items.value))
    : [];
});
</script>

<style lang="scss" scoped></style>
