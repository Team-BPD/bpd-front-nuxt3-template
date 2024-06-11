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
          <template v-slot:append>
            <v-list-item-action end>
              <v-btn
                icon="mdi-delete-outline"
                variant="text"
                @click.prevent.stop="() => (itemDelete = 'clicked!!!')"
              ></v-btn>
            </v-list-item-action>
          </template>
          <v-list-item-title>Sound</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
  {{ itemDelete }}
</template>

<script lang="ts" setup>
const itemDelete = ref('');
</script>

<style lang="scss" scoped></style>
