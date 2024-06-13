<template>
  <!-- 헤더 바탕 영역 -->
  <v-toolbar
    image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    dark
    extended
    flat
  >
    <!-- 헤더 타이틀 영역 -->
    <v-toolbar-title class="text-grey pr-5" style="color: white !important">
      Todo List
    </v-toolbar-title>
  </v-toolbar>

  <!-- 입력 항목 Outer 영역 -->
  <v-card class="mx-auto" max-width="700" style="margin-top: -64px">
    <!-- 입력 항목 툴바 테두리 영역 -->
    <v-toolbar dense floating>
      <!-- 입력 항목 툴바 제목 영역 -->
      <v-toolbar-title class="text-grey pr-5">
        <!-- 입력 항목 컴포넌트 영역 -->
        <v-text-field
          prepend-inner-icon="mdi-playlist-plus"
          density="compact"
          label="Input your todo item."
          variant="solo"
          hide-details
          single-line
          v-model="subject"
          @keypress.enter="
            /* 엔터키가 눌렷을때 동작하는 이벤트 메소드 */
            () => {
              // 부모 컴포넌트로 이벤트 전달
              $emit('change', subject);
              // 입력테스트 삭제여부에 따라 입력값 삭제처리
              if (eraseText) subject = '';
            }
          "
        />
      </v-toolbar-title>
    </v-toolbar>

    <!-- 구분선 추가 -->
    <v-divider></v-divider>
  </v-card>
</template>

<script lang="ts" setup>
/**
 * @description Todo 헤더 컴포넌트
 *   - Todo 항목을 추가
 */

// 로컬 Props 인터페이스 선언
interface Props {
  eraseText: boolean; // 입력 값 삭제여부(true: 삭제, false: 삭제안함)
}

// Props 변수 선언
const { eraseText = false } = defineProps<Props>();

// Emit 이벤트 메소드 선언
const emits = defineEmits<{
  change: [item: string]; // 입력값이 변경될때
}>();

// 입력 값에 대한 리액티브 변수 선언
const subject = ref('');
</script>

<style lang="scss" scoped></style>
