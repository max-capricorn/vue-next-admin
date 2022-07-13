import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/SideBar/index.vue'
const routes = <RouteRecordRaw[]>[
  {
    path: '/components',
    redirect: 'noRedirect',
    component: Layout,
    children: [
      {
        path: 'json-editor',
        name: 'json-editor',
        meta: {
          title: 'json-editor',
          icon: '--',
        },
        component: () => import('@/views/components-demo/json-editor/index.vue'),
      },
      {
        path: 'markdown',
        name: 'markdown',
        meta: {
          title: 'markdown',
          icon: '--',
        },
        component: () => import('@/views/components-demo/markdown/index.vue'),
      },
    ],
  },
]

export default routes