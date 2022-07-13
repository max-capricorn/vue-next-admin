<template>
  <div class="flex h-20 justify-center bg-slate-900 items-center">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="flex items-center h-full" to="/">
        <img v-if="title" src="@/assets/logo.png" class="w-10 h-10 rounded-full">
        <h1 v-else class="text-white">{{ title }} </h1>
      </router-link>
      <router-link v-else key="expand" class="flex items-center h-full slider-width" to="/">
        <img v-if="title" src="@/assets/logo.png" class="w-10 h-10 rounded-full">
        <h1 class="text-white">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '@/store'
const app = useAppStore()
const title = 'admin'
const collapse = computed(() => app.isCollapse)
</script>
<style lang="scss" scoped>
.sidebarLogoFade-enter-active{
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter-from,
.sidebarLogoFade-leave-to {
  opacity: 0;
}
</style>
