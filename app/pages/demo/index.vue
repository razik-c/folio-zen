<template>
  <FloatingComposer />

  <section class="container text-ink bg-[#f8f8f8] relative">
    <div class="grid grid-cols-12">
      <div class="col-span-12">
        <div class="flex gap-1 justify-end items-center">
          <div class="rounded-full border-2 bg-white px-4 py-1 cursor-pointer text-ink ">
            <div class="text-[14px] font-primary items-start flex flex-col justify-center">Typing</div>
          </div>
          <div class="rounded-full border-2 px-4 py-1 cursor-pointer hover:bg-tint hover:text-white text-ink ">
            <div class="text-[14px] font-primary items-start flex flex-col justify-center">Audio</div>
          </div>
          <div class="rounded-full border-2 px-4 py-1 cursor-pointer hover:bg-tint hover:text-white text-ink ">
            <div class="text-[14px] font-primary items-start flex flex-col justify-center">Image</div>
          </div>
            <div class="rounded-full border-2 px-4 py-1 cursor-pointer hover:bg-tint hover:text-white text-ink ">
            <div class="text-[14px] font-primary items-start flex flex-col justify-center">Barcode</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 mt-6">
        <div class="grid grid-cols-12">
          <div class="col-span-12 grid grid-cols-12 bg-white border-2 rounded-full">
            <div class="col-span-1 !font-semibold !text-[14px] text-gray-400 ps-5 py-2">SKU</div>
            <div class="col-span-2 !font-semibold !text-[14px] text-gray-400 ps-5 py-2">Name</div>
            <div class="col-span-2 !font-semibold !text-[14px] text-gray-400 ps-5 py-2">Expiry Date</div>
            <div class="col-span-2 !font-semibold !text-[14px] text-gray-400 ps-5 py-2">Stock Count</div>
            <div class="col-span-2 !font-semibold !text-[14px] text-gray-400 ps-12 py-2">Status</div>
            <div class="col-span-2 !font-semibold !text-[14px] text-gray-400 ps-5 py-2">Actions</div>
            <div class="col-span-1 !font-semibold !text-[14px] text-gray-400 ps-3 py-2">Last Checked</div>
          </div>
          <div class="col-span-12 grid grid-cols-12 products mt-2 gap-2">
            
            <div class="col-span-12 grid grid-cols-12 bg-white rounded-full">
              <div
                class="col-span-1 ps-5 py-1 text-[14px] text-ink font-primary items-start flex flex-col justify-center">
                A101</div>
              <div class="col-span-2 ps-5 py-1 text-[14px] text-ink font-primary">
                <div class="flex items-center gap-4">
                  <div class="rounded-full h-fit max-h-8" style="background-image: url('/avatar.png');">
                    <NuxtImg src="/avatar.png" alt="ExpiryAware logo" width="32" class="h-fit max-h-8 m-0" />
                  </div>
                  <div
                    class="col-span-2 py-3 text-[14px] text-ink font-primary items-start flex flex-col justify-center">
                    Yogurt
                  </div>
                </div>
              </div>
              <div
                class="col-span-2 ps-5 py-1 text-[14px] text-ink font-primary items-start flex flex-col justify-center">
                10 Nov 2025</div>
              <div
                class="col-span-2 ps-5 py-1 text-[14px] text-ink font-primary items-start flex flex-col justify-center">
                50</div>
              <div class="col-span-2 ps-5 py-1 items-start flex flex-col justify-center">
                <p
                  class="!text-[12px] font-bold text-white bg-yellow-500 px-3 rounded-full w-fit items-start flex flex-col justify-center">
                  Expiring Soon</p>
              </div>
              <div
                class="col-span-2 ps-5 py-1 text-[14px] text-primary cursor-pointer items-start flex flex-col justify-center">
                Edit | Delete</div>
              <div
                class="col-span-1 ps-3 py-3 text-[14px] text-ink font-primary items-start flex flex-col justify-center">
                Today</div>
            </div>
          </div>


        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })
</script>