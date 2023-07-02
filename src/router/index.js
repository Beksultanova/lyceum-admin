import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'Dashboard',
                    component: () => import('../views/Dashboard.vue')
                },
                {
                    path: '/achievements',
                    name: 'achievement',
                    component: () => import('../views/pages/achievement/index.vue')
                },
                {
                    path: '/achievement/:id',
                    name: 'achievement-id',
                    component: () => import('../views/pages/achievement/id.vue')
                }
            ]
        }
    ]
});

export default router;
