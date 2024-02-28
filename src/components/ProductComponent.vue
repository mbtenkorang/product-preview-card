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
    <picture class="">
        <source :srcset="product_data.images.desktop" media="(min-width:790px)" />
        <img :src="product_data.images.mobile" alt="Picture of Chanel Perfume" class="w-full">
    </picture>

    <div class="py-4 px-6">
        <span class="text-xs tracking-[8px]">{{ product_data.category.toUpperCase() }}</span>
        <h1 class="font-serif font-bold text-4xl text-dark-blue my-5">{{ product_data.name }}</h1>
        <p class="text-base text-gray-blue font-normal">{{ product_data.description }}</p>
        <div class="font-serif flex my-7">
            <p class="text-dark-cyan text-4xl mr-6 font-bold">${{ product_data.current_price }}</p>
            <span class="text-base text-gray-blue"><s>${{ product_data.previous_price }}</s></span>
        </div>
        <AddButton :icon_url="BUTTON_LABEL.icon" :button_name="BUTTON_LABEL.name" />
    </div>
</template>