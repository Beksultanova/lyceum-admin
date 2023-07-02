<template>
    <div v-if="loaded" class="grid">
        <div class="col-12">
            <div class="card">
                <Toast />
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="flex flex-column align-items-start">
                            <h1 class="title">Жетишкендиктер</h1>
                            <Breadcrumb :home="home" :model="itemsBread" />
                        </div>
                    </template>
                </Toolbar>
                <div class="card">
                    <h2 class="title mb-5">Толугураак маалымат кошуу</h2>
                    <Editor v-model="value" editorStyle="height: 300px" />
                    <Button class="mt-4" label="Сактоо" />
                </div>
                <div class="card">
                    <h2 class="title mb-5">Өзгөчөлүктөр</h2>
                    <Editor v-model="value" editorStyle="height: 300px" />
                    <Button class="mt-4" label="Сактоо" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Editor from 'primevue/editor';
import axios from 'axios';
const loaded = ref(false);
const items = ref([]);
const route = useRoute();
const value = ref('');

const getData = async () => {
    const { data } = await axios.get(`http://localhost:5094/api/v1/Achievement/${params.id}`);
    items.value = data.items;
};

onMounted(async () => {
    await getData();
    loaded.value = true;
});

const home = ref({
    icon: 'pi pi-home',
    to: '/'
});
const itemsBread = ref([{ label: 'Achievements' }, { label: 'Achievement' }]);
</script>

<style scoped lang="scss">
@import '@/assets/demo/styles/badges.scss';
</style>
