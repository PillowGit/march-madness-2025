<script setup lang="ts">
const { signIn } = useAuth();
</script>

<template>
  <button
    @click="($event: any) => signIn('github')"
    class="border-2 border-[#464646] rounded-lg transition hover:scale-110 hover:bg-[#464646] hover:text-white"
  >
    <h1 class="my-2 mx-4">Log In</h1>
  </button>
</template>
