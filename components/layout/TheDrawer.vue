<template>
  <!-- 왼쪽 사이드 바 영역 -->
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <!-- 프로필 아바타 영역 -->
      <v-list-item
        prepend-avatar="/img/duldulgi.png"
        subtitle="BPD@dw.com"
        title="dulgi"
      ></v-list-item>
    </v-list>

    <!-- 구분선 -->
    <v-divider></v-divider>

    <!-- 메뉴 리스트 영역 -->
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-outline"
        title="Home"
        value="home"
        @click="navigateTo('/', { replace: true })"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-format-list-checks"
        title="Todo List"
        value="todolist"
        @click="navigateTo('/todo', { replace: true })"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
/**
 * @description 왼쪽 사이드바를 구성하는 컴포넌트
 * @author 홍두표
 */
</script>

<style lang="scss" scoped></style>
