<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [
            { label: 'Главный', icon: 'pi pi-fw pi-home', to: '/' },
            { label: 'achievement', icon: 'pi pi-fw pi-box', to: '/achievement' },
            { label: 'addCourse', icon: 'pi pi-fw pi-table', to: '/addCourse' },
            { label: 'history', icon: 'pi pi-fw pi-paperclip', to: '/history' },
            { label: 'news', icon: 'pi pi-fw pi-id-card', to: '/news' },
            { label: 'parentСommission', icon: 'pi pi-fw pi-ticket', to: '/parentСommission' },
            { label: 'student', icon: 'pi pi-fw pi-users', to: '/student' },
            { label: 'teacher', icon: 'pi pi-fw pi-user', to: '/teacher' },
            { label: 'stakeholder', icon: 'pi pi-fw pi-inbox', to: '/stakeholder' }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
