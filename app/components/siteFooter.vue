<template>
  <div class="flex flex-col mt-32">

    <footer class="prose md:prose-tablet lg:prose-desktop mt-auto">
      <div class="rounded-t-[64px] bg-ink">
        <div class="flex flex-col xl:flex-row justify-center py-12 px-5 xl:px-32 items-center xl:items-end">
          <div class="w-full flex flex-col items-center">
            <NuxtLink to="/" class="flex items-center gap-2 no-underline">
              <NuxtImg src="/logo.png" alt="ExpiryAware logo" width="32" height="32" class="filter invert brightness-0" />
              <h6 class="text-white">ExpiryAware</h6>
            </NuxtLink>
            <h6 class="text-white text-center xl:text-start">A user friendly product made with care</h6>
          </div>
          <p class="text-white text-[12px] xl:!text-[16px] !font-bold mt-12 xl:mt-0">
            Copyright © ExpiryAware, 2025
          </p>
        </div>

        <div class="flex justify-center items-center gap-4 py-4">
          <div class="bg-white p-2 rounded-full cursor-pointer">
            <!-- Instagram SVG -->
          </div>
          <div class="bg-white p-2 rounded-full cursor-pointer">
            <!-- Facebook SVG -->
          </div>
          <div class="bg-white p-2 rounded-full cursor-pointer">
            <!-- X SVG -->
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
