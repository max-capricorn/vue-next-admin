<template>
  <div class="h-full">
    <el-container class="h-full">
      <div class="flex flex-col">
        <Logo />
        <Slider />
      </div>
      <!-- <el-aside class="h-full w-64"> -->
      <!-- </el-aside> -->
      <el-container>
        <el-header class="flex items-center">
          <el-icon 
            :size="20"
            @click="toggerClick"
          >
            <Fold v-if="!app.isCollapse" />
            <Expand v-else />
          </el-icon>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script lang="ts" setup>
import { Expand, Fold } from '@element-plus/icons-vue'
import Slider from './components/Slider.vue'
import Logo from './components/logo.vue'
import { useAppStore } from '@/store'

const app = useAppStore()
// const isCollapse = ref(false)
const toggerClick = () => {
  app.isCollapse = !app.isCollapse
}

</script>