<script setup lang="ts">
const { status, data } = useAuth();
</script>

<template>
  <div
    class="min-w-screen min-h-screen flex flex-col items-center justify-center"
  >
    <LoginButton v-if="status !== 'authenticated'" />
    <div
      v-else-if="status === 'authenticated'"
      class="flex flex-col items-center"
    >
      <div class="text-3xl">You are authenticated</div>
      <div>{{ data }}</div>
      <LogoutButton />
    </div>
  </div>
</template>
