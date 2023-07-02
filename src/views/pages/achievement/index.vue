<template>
    <div v-if="loaded" class="card">
        <Toast />
        <Toolbar class="mb-4">
            <template v-slot:start>
                <div class="flex flex-column align-items-start">
                    <h1 class="title">Жетишкендиктер</h1>
                    <Breadcrumb :home="home" :model="itemsBread" />
                </div>
            </template>
        </Toolbar>
        <DataTable
            :value="items"
            dataKey="id"
            :paginator="true"
            :lazy="true"
            :rows="10"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 25]"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            responsiveLayout="scroll"
        >
            <template #header>
                <div class="grid">
                    <div class="col-10">
                        <span class="block mt-2 md:mt-0 p-input-icon-left w-full">
                            <i class="pi pi-search" />
                            <InputText class="w-full" placeholder="Search..." />
                        </span>
                    </div>
                    <div class="col">
                        <Button label="New" icon="pi pi-plus" @click="openDialog" class="p-button-success mr-2" />
                    </div>
                </div>
            </template>
            <Column field="id" header="#" />

            <Column field="caption" header="Заголовок">
                <template #body="{ data }">
                    <span class="p-column-title">Заголовок </span>
                    <router-link :to="`/achievement/${data.id}`">
                        <span>{{ data.caption }}</span>
                    </router-link>
                </template>
            </Column>
            <Column>
                <template #body="{ data }">
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-danger mt-2" @click="remove(data.id)"></Button>
                </template>
            </Column>
        </DataTable>
        <Dialog v-model:visible="dialogVisible" :style="{ width: '450px' }" header="Жаны жетишкендикти кошуу" :modal="true" class="p-fluid">
            <div class="field">
                <label for="caption">Заголовок</label>
                <InputText id="caption" v-model.trim="item.caption" />
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
                <Button label="Добавить" icon="pi pi-check" class="p-button-text" @click="add" />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const loaded = ref(false);
const items = ref([]);
const dialogVisible = ref(false);

const item = ref({
    caption: ''
});

const openDialog = () => {
    item.value = {};
    dialogVisible.value = true;
};

const hideDialog = () => {
    dialogVisible.value = false;
};

const get = async () => {
    const { data } = await axios.get('/Achievement');
    items.value = data.items;
};

const remove = async (id) => {
    await axios.delete(`/Achievement/${id}`);
    const index = items.value.findIndex((i) => i.id === id);
    items.value.splice(index, 1);
};

const add = async () => {
    const { data } = await axios.post(`/Achievement`, item.value);
    items.value.push(data);
    dialogVisible.value = false;
};

onMounted(async () => {
    await get();
    loaded.value = true;
});

const home = ref({
    icon: 'pi pi-home',
    to: '/'
});
const itemsBread = ref([{ label: 'Achievements' }]);
</script>

<style scoped lang="scss">
@import '@/assets/demo/styles/badges.scss';
</style>
