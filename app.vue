<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { Buffer } from 'buffer';
onNuxtReady(() => {
  const cryptoStore = useCrtStore();
  if (cryptoStore.getIv === '') {
    cryptoStore.setIv(
      Buffer.from(crypto.getRandomValues(new Uint8Array(12))).toString(
        'base64',
      ),
    );
  }
  if (cryptoStore.getKey === '') {
    cryptoStore.setKey(
      Buffer.from(crypto.getRandomValues(new Uint8Array(32))).toString(
        'base64',
      ),
    );
  }
});
</script>
