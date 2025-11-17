<template>
  <div class="flex flex-col mt-20 py-20 bg-surface">

    <footer class="prose md:prose-tablet lg:prose-desktop mt-auto">
      <div class="container">
        <div class="grid grid-cols-12 items-center text-center xl:text-start gap-6">
          <div class="xl:col-start-2 col-span-12 xl:col-span-5">
            <h3>
              Learn how to turn outbound into a repeatable engine. Let's connect.
            </h3>
          </div>
          <div class="col-span-12 flex justify-center items-center xl:col-span-4 xl:col-start-10">
            <NuxtLink to="/contact-us"
              class="group no-underline border-2 w-fit border-primary rounded-full ps-4 pe-2 py-2 text-primary flex items-center gap-4 cursor-pointer transition-colors duration-200 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
              Contact Us
              <span
                class="bg-primary text-white rounded-full p-2 transition-colors duration-200 group-hover:bg-white group-hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                  stroke="currentColor" class="size-4 transition-transform duration-200 group-hover:-rotate-45">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </NuxtLink>
          </div>
          <div class="col-span-12 xl:col-span-10 xl:col-start-2 border-0.5 bg-muted/20 border-muted/40 h-0.5 w-full my-6"></div>

          <div class="col-span-12 xl:col-span-6">
            <p class="text-ink/50 !text-[16px]">
              © 2025 LeadMails, All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
