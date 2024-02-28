<script setup>
import { reactive } from 'vue';
import AddButton from "./AddButton.vue";

const props = defineProps({
    product_data: { type: Object }
})

const BUTTON_LABEL = reactive({
    name: "Add to Cart",
    icon: "./images/icon-cart.svg"
})
</script>

<template>
    <picture class="w-full">
        <source :srcset="product_data.images.desktop" media="(min-width:790px)" />
        <img :src="product_data.images.mobile" alt="Picture of Chanel Perfume">
    </picture>

    <div class="py-5 px-6">
        <span class="text-xs tracking-[8px]">{{ product_data.category.toUpperCase() }}</span>
        <h1 class="font-serif font-bold text-3xl text-dark-blue my-4">{{ product_data.name }}</h1>
        <p class="text-sm text-gray-blue font-normal mb-4">{{ product_data.description }}</p>
        <div class="font-serif flex mb-4">
            <p class="text-dark-cyan text-3xl font-bold">${{ product_data.current_price }}</p>
            <span class="text-[10px] text-gray-cyan"><s>${{ product_data.previous_price }}</s></span>
        </div>
        <AddButton :icon_url="BUTTON_LABEL.icon" :button_name="BUTTON_LABEL.name" />
    </div>
</template>