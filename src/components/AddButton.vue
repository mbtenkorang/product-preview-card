<script setup>
const props = defineProps({
    button_name: { type: String, default: "Buy" },
    icon_url: { type: String }
})
</script>

<template>
    <div class="text-sm font-normal border border-dark-cyan bg-dark-cyan rounded-lg text-neutral-white flex justify-center">
        <button :name="button_name" aria-pressed="false" class="flex items-center py-4">
            <span>
                <img :src="icon_url" alt="" aria-hidden="true">
            </span>
            <span>{{ button_name }}</span>
        </button>
    </div>
</template>