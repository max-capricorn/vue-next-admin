
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '@/views/dashboard/index.vue'
import Layout from '@/layouts/SideBar/index.vue'
const modules = import.meta.globEager('./modules/*.ts')
console.log('modules: ', modules)
const contantsRoutes = []
for (const path in modules) {
  contantsRoutes.push(...modules[path].default as RouteRecordRaw[])
}

const routes = <RouteRecordRaw[]>[
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          title: '工作台',
          icon: '--',
        },
        component: Dashboard,
      },
    ],
  },
  ...contantsRoutes,
]

console.log('routes: ', routes)

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router






