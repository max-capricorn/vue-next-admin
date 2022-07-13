import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    isCollapse: false,
  }),
})