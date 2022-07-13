<template>
  <el-scrollbar>
    <el-menu
      default-active="2"
      :collapse="app.isCollapse"
      :background-color="variables.menuBg"
      :active-text-color="variables.menuActiveText"
      :text-color="variables.menuText"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <!-- <el-sub-menu index="1-4"> -->
          <!-- <template #title><span>item four</span></template> -->
          <el-menu-item index="1-4-1">item one</el-menu-item>
        <!-- </el-sub-menu> -->
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>


<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { useAppStore } from '@/store'
import variables from '@/styles/variable.module.scss'
const app = useAppStore()

</script>
<style lang="scss" scoped>
@import "@/styles/sidebar.scss"
</style>