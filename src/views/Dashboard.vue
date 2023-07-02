<script setup>
import { onMounted, ref, watch } from 'vue';
import ProductService from '@/service/ProductService';
import { useLayout } from '@/layout/composables/layout';

const { isDarkTheme } = useLayout();

const products = ref(null);

const lineOptions = ref(null);
const productService = new ProductService();

onMounted(() => {
    productService.getProductsSmall().then((data) => (products.value = data));
});

const applyLightTheme = () => {
    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };
};

const applyDarkTheme = () => {
    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            },
            y: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            }
        }
    };
};

watch(
    isDarkTheme,
    (val) => {
        if (val) {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
    },
    { immediate: true }
);
</script>

<template>
    <div class="grid">
        <div class="col-12 lg:col-6 xl:col-3">
            <router-link to="/achievement">
                <div class="card mb-0">
                    <div class="flex justify-content-between mb-3">
                        <div>
                            <div class="text-900 font-medium text-xl">achiev.</div>
                        </div>
                        <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                        </div>
                    </div></div
            ></router-link>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <router-link to="/addCourse">
                <div class="card mb-0">
                    <div class="flex justify-content-between mb-3">
                        <div>
                            <div class="text-900 font-medium text-xl">addCourse</div>
                        </div>
                        <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                        </div>
                    </div></div
            ></router-link>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <router-link to="/history">
                <div class="card mb-0">
                    <div class="flex justify-content-between mb-3">
                        <div>
                            <div class="text-900 font-medium text-xl">history</div>
                        </div>
                        <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                        </div>
                    </div></div
            ></router-link>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <router-link to="/news">
                <div class="card mb-0">
                    <div class="flex justify-content-between mb-3">
                        <div>
                            <div class="text-900 font-medium text-xl">news</div>
                        </div>
                        <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                        </div>
                    </div></div
            ></router-link>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <router-link to="/parentСommission">
                <div class="card mb-0">
                    <div class="flex justify-content-between mb-3">
                        <div>
                            <div class="text-900 font-medium text-xl">parent</div>
                        </div>
                        <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                        </div>
                    </div></div
            ></router-link>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <router-link to="/student">
                <div class="card mb-0">
                    <div class="flex justify-content-between mb-3">
                        <div>
                            <div class="text-900 font-medium text-xl">student</div>
                        </div>
                        <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                        </div>
                    </div></div
            ></router-link>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <router-link to="/teacher">
                <div class="card mb-0">
                    <div class="flex justify-content-between mb-3">
                        <div>
                            <div class="text-900 font-medium text-xl">teacher</div>
                        </div>
                        <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                        </div>
                    </div></div
            ></router-link>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <router-link to="/stakeholder">
                <div class="card mb-0">
                    <div class="flex justify-content-between mb-3">
                        <div>
                            <div class="text-900 font-medium text-xl">stakeholder</div>
                        </div>
                        <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                        </div>
                    </div></div
            ></router-link>
        </div>
    </div>
</template>
