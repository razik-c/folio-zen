<template>
    <div class="relative flex flex-col items-center justify-center"
        :style="{ width: size + 'px', height: size + 'px' }">
        <svg class="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="#e5e7eb" stroke-width="5" fill="none" />
            <circle cx="50" cy="50" r="45" stroke="white" stroke-width="5" fill="none" stroke-linecap="round"
                :stroke-dasharray="circumference" :stroke-dashoffset="circumference - (progress / 100) * circumference"
                class="transition-all duration-700 ease-out" />
        </svg>
        <div class="relative z-10 text-center text-white">
            <h6 class="text-sm uppercase tracking-wide">{{ label }}</h6>
            <h2 class="mt-1">{{ progress }}%</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        label: string
        progress: number
        size?: number
    }>()

    const size = props.size ?? 160
    const radius = 45
    const circumference = 2 * Math.PI * radius
</script>
