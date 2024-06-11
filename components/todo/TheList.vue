<template>
  <v-card class="mx-auto" max-width="700" variant="tonal" color="indigo">
    <v-card-text>
      <v-list select-strategy="classic">
        <v-list-item value="sound">
          <template v-slot:prepend="{ isActive }">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
          </template>
          <template v-slot:append="{ isActive }">
            <v-list-item-action end>
              <v-btn
                :model-value="isActive"
                icon="mdi-delete-outline"
                variant="flat"
              ></v-btn>
            </v-list-item-action>
          </template>
          <v-list-item-title>Sound</v-list-item-title>
        </v-list-item>
        <v-list-item value="sound2">
          <template v-slot:prepend="{ isActive }">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
          </template>
          <template v-slot:append="{ isActive }">
            <v-list-item-action end>
              <v-btn
                :model-value="isActive"
                icon="mdi-delete-outline"
                variant="flat"
              ></v-btn>
            </v-list-item-action>
          </template>
          <v-list-item-title>Sound2</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
