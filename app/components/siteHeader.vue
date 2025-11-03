<template>
  <header class="site-header prose md:prose-tablet lg:prose-desktop h-fit">
    <nav class="hidden xl:flex items-center justify-between container py-4" aria-label="Primary">
      <NuxtLink to="/" class="flex items-center gap-2 no-underline">
        <NuxtImg src="/logo.png" alt="ExpiryAware logo" width="32" height="32" />
        <h6>ExpiryAware</h6>
      </NuxtLink>

      <ul class="flex items-center gap-2 font-primary list-none">

        <li>
          <NuxtLink to="/about" :aria-current="isActive('/about') ? 'page' : undefined" class="nav-link hover:bg-gray-200 rounded-full py-2 px-3"
            :class="isActive('/about') ? 'text-primary font-medium' : 'hover:underline'">About</NuxtLink>
        </li>


        <li>
          <NuxtLink to="/demo" :aria-current="isActive('/demo') ? 'page' : undefined" class="nav-link hover:bg-gray-200 rounded-full py-2 px-3"
            :class="isActive('/demo') ? 'text-primary font-medium' : 'hover:underline'">Demo</NuxtLink>
        </li>


        <li>
          <NuxtLink to="/contact" :aria-current="isActive('/contact') ? 'page' : undefined" class="nav-link hover:bg-gray-200 rounded-full py-2 px-3" 
            :class="isActive('/contact') ? 'text-primary font-medium' : 'hover:underline'">Contact Us</NuxtLink>
        </li>
      </ul>

      <!-- <div class="flex items-center gap-6">
        <NuxtLink to="/signup" class="no-underline hover:underline">Sign Up</NuxtLink>

        <NuxtLink to="/dashboard"
          class="group no-underline border-2 border-primary rounded-full ps-4 pe-2 py-2 text-primary flex items-center gap-4 cursor-pointer transition-colors duration-200 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
          My Dashboard
          <span
            class="bg-primary text-white rounded-full p-2 transition-colors duration-200 group-hover:bg-white group-hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
              stroke="currentColor" class="size-4 transition-transform duration-200 group-hover:-rotate-45">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </NuxtLink>
      </div> -->
    </nav>

    <nav class="xl:hidden container flex items-center justify-between py-3" aria-label="Primary">
      <NuxtLink to="/" class="flex items-center gap-2 no-underline">
        <NuxtImg src="/logo.png" alt="ExpiryAware logo" width="20" height="20" />
        <h6>ExpiryAware</h6>
      </NuxtLink>

      <button
        class="inline-flex items-center justify-center rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        :aria-expanded="open ? 'true' : 'false'" aria-controls="mobile-menu" @click="open = !open">
        <span class="sr-only">Toggle menu</span>
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>
    </nav>

    <Transition name="menu">
      <div v-if="open" id="mobile-menu" class="xl:hidden w-full bg-white border-t border-gray-100">
        <div class="px-6 py-4 flex flex-col gap-6 font-primary">
          <NuxtLink to="/" class="nav-link" :class="isActive('/') ? 'text-primary font-medium' : 'hover:underline'"
            @click="open = false">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link"
            :class="isActive('/about') ? 'text-primary font-medium' : 'hover:underline'" @click="open = false">About
          </NuxtLink>
          <NuxtLink to="/demo" class="nav-link"
            :class="isActive('/demo') ? 'text-primary font-medium' : 'hover:underline'" @click="open = false">Demo
          </NuxtLink>
          <NuxtLink to="/contact" class="nav-link"
            :class="isActive('/contact') ? 'text-primary font-medium' : 'hover:underline'" @click="open = false">Contact
            Us</NuxtLink>

          <!-- <div class="flex items-center gap-4 pt-2">
            <NuxtLink to="/signup" class="no-underline hover:underline" @click="open = false">Sign Up</NuxtLink>

            <NuxtLink to="/dashboard"
              class="group no-underline border-2 border-primary rounded-full ps-4 pe-1 py-1 text-primary flex items-center gap-2 transition-colors duration-200 hover:bg-primary hover:text-white"
              @click="open = false">
              My Dashboard
              <span
                class="bg-primary text-white rounded-full p-2 transition-colors duration-200 group-hover:bg-white group-hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                  stroke="currentColor" class="size-4 transition-transform duration-200 group-hover:-rotate-45">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </NuxtLink>
          </div> -->
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const open = ref(false)
const isActive = (path: string) => route.path === path
</script>

<style scoped>
.nav-link {
  @apply no-underline text-sm;
}

.separator {
  @apply h-4 border border-gray-200;
}

.site-header :deep(.prose) {
  margin: 0;
  padding: 0;
}

.menu-enter-from,
.menu-leave-to {
  transform: scaleY(0);
  opacity: 0;
}

.menu-enter-active,
.menu-leave-active {
  transition: transform 200ms ease, opacity 200ms ease;
  transform-origin: top;
}

.menu-enter-to,
.menu-leave-from {
  transform: scaleY(1);
  opacity: 1;
}
</style>
