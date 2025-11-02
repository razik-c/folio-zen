<template>
  <section class="mt-8">
    <div class="container">
      <div class="flex justify-center items-center mt-8">
        <div
          class="relative border border-gray-200 rounded-full ps-2 py-2 pe-6 max-w-lg w-full flex items-center gap-6 bg-white overflow-hidden">
          <div class="rounded-full p-2 bg-secondary w-fit text-black shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
              <path
                d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
              <path fill-rule="evenodd"
                d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                clip-rule="evenodd" />
            </svg>
          </div>

          <div class="relative w-full overflow-hidden">
            <div class="flex gap-12 whitespace-nowrap animate-marquee will-change-transform">
              <p class="!text-[14px] text-ink/80">
                • New feature: barcode scanning • AI expiry detection now faster • Multi-device sync enabled
              </p>
              <p class="!text-[14px] text-ink/80" aria-hidden="true">
                • New feature: barcode scanning • AI expiry detection now faster • Multi-device sync enabled
              </p>
            </div>

            <div
              class="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent rounded-r-full">
            </div>

            <div
              class="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent rounded-l-full">
            </div>
          </div>

        </div>
      </div>
      <div class="grid grid-cols-12 items-center mt-8">
        <div class="col-span-12 text-center">
          <h1>Manage Your Products <br class="hidden xl:block">Safely & Smartly</h1>
          <div class="flex justify-center items-center">
            <p class="pt-4 text-center">ExpiryAware reminds you before items expire, helping you avoid <br> </br>waste
              and stay
              safe.</p>
          </div>
          <div class="flex pt-6 justify-center items-center gap-2">
            <NuxtLink to="/contact-us"
              class="group no-underline border-2 border-primary rounded-full ps-4 pe-2 py-2 text-primary flex items-center gap-4 cursor-pointer transition-colors duration-200 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
              Contact Us
              <span
                class="bg-primary text-white rounded-full p-2 transition-colors duration-200 group-hover:bg-white group-hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                  stroke="currentColor" class="size-4 transition-transform duration-200 group-hover:-rotate-45">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </NuxtLink>
            <NuxtLink to="/demo"
              class="group no-underline border-2 border-tint rounded-full px-6 py-[10px] text-ink flex items-center gap-4 cursor-pointer transition-colors duration-200 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
              See Demo
            </NuxtLink>
          </div>
        </div>
        <!-- <div class="xl:col-span-4">
          <div class="flex gap-2 items-end">
            <div class="rounded-full border-2 border-surface shadow p-2 not-prose">
              <div class="w-full h-full">
                <NuxtImg src="/avatar.png" alt="ExpiryAware logo" width="64" height="64" />
              </div>
            </div>
            <div class="flex flex-col">
              <div class="bg-surface p-5 rounded-md">
                <p class="!text-[16px]">ExpiryAware helped me take the guess work out and focus my budget where it was
                  needed.</p>
              </div>
              <div class="my-2"></div>
            </div>
          </div>
        </div> -->
      </div>


    </div>
  </section>

  <section class="px-2 mt-12 xl:mt-32">
    <div class="bg-ink rounded-3xl">
      <div class="container py-12 xl:py-24  relative">
        <div class="grid grid-cols-12">
          <div class="xl:col-start-3 xl:col-span-5 col-span-12 text-center xl:text-start">
            <h5 class="text-white"><span class="!text-[20px] xl:!text-[24px] !font-bold text-white !leading-[inherit]">
                Join a growing
              </span>
              network of <span class="!text-[20px] xl:!text-[24px] !font-bold text-white !leading-[inherit]">
                businesses
              </span> that rely on our solutions to drive <span
                class="!text-[20px] xl:!text-[24px] !font-bold text-white !leading-[inherit]">
                success
              </span></h5>
          </div>
          <div class="col-span-6"></div>
          <div class="col-span-12 xl:col-span-4 xl:col-start-3 mt-2">
            <p class="!font-bold text-white text-center xl:text-start !text-[16px]">Data is power. Get detailed analytics of your wastage and
              reduce your spending.</p>
            <div class=" rounded-full bg-primary ps-2 pe-2 py-2 mt-6 w-fit border-2 hidden xl:block">
              <form action="" class="flex gap-2 border-2 bg-primary rounded-full">
                <input type="text" class="bg-primary rounded-full px-4" placeholder="Your Email">
                <Button to="/dashboard"
                  class="group no-underline font-normal text-[16px] font-secondary bg-white rounded-full ps-4 pe-2 py-2 text-ink flex items-center gap-4 cursor-pointer transition-colors duration-200 hover:bg-tint primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                  Join the Waitlist
                  <span
                    class="bg-primary text-white rounded-full p-2 transition-colors duration-200 group-hover:bg-white group-hover:text-ink">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                      stroke="currentColor" class="size-4 transition-transform duration-200 group-hover:-rotate-45">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Button>
              </form>

            </div>
             <div class=" rounded-full  px-4 py-2 mt-6 w-full block xl:hidden">
              <form action="" class="flex flex-col gap-2 rounded-full">
                <input type="text" class="bg-ink rounded-full px-4 border-2 py-2" placeholder="Your Email">
                <Button to="/dashboard"
                  class="group no-underline w-full bg-black rounded-full ps-4 pe-2 py-2 text-white flex justify-between items-center gap-4 cursor-pointer transition-colors duration-200 hover:bg-black primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                  Join the Waitlist
                  <span
                    class="bg-white text-primary rounded-full p-2 transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                      stroke="currentColor" class="size-4 transition-transform duration-200 group-hover:-rotate-45">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Button>
              </form>

            </div>
          </div>
        </div>
        <div class="xl:absolute bottom-[-80px] right-32 flex justify-center items-center">
          <NuxtImg src="/phone.png" alt="ExpiryAware logo" width="260" height="100%" />
        </div>
      </div>

    </div>
  </section>

  <section>
    <div class="container py-6 xl:pb-12 xl:pt-32">
      <div class="grid grid-cols-12 items-center">

        <div class="col-span-12 mt-4">
          <div class="text-center">
            <h3 class="text-ink">Find What Works For You</h3>
          </div>
        </div>
        <div class="col-span-8 col-start-3">
          <p class="pt-2 text-ink text-center">Type, speak, snap, or stream, ExpiryAware has it all.</p>
        </div>

        <div class="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 gap-x-6 gap-y-8 mt-12">

          <div class="col-span-12 md:col-span-4 p-2">
            <div class="flex items-center gap-12">
              <h1 class="text-primary">1</h1>
              <div class="flex flex-col">
                <h5 class="text-ink font-semibold text-xl mb-3">Manual Entry</h5>
                <p class="xl:pt-2 text-ink">
                  Add product name, quantity, and expiry date manually quick, clear, and precise.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-4 p-2">
            <div class="flex items-center gap-12">
              <h1 class="text-primary">2</h1>
              <div class="flex flex-col">
                <h5 class="text-ink font-semibold text-xl mb-3">Voice Command</h5>
                <p class="xl:pt-2 text-ink">
                  Speak naturally ExpiryAware records product details hands-free and accurately.
                </p>
              </div>
            </div>
          </div>

          <div class="col-span-12 md:col-span-4 p-2">
            <div class="flex items-center gap-12">
              <h1 class="text-primary">3</h1>
              <div class="flex flex-col">
                <h5 class="text-ink font-semibold text-xl mb-3">Smart Capture</h5>
                <p class="xl:pt-2 text-ink">
                  Snap or upload a photo ExpiryAware instantly detects and logs data.
                </p>
              </div>
            </div>
          </div>

          <div class="col-span-12 md:col-span-4 p-2">
            <div class="flex items-center gap-10">
              <h1 class="text-primary">4</h1>
              <div class="flex flex-col">
                <h5 class="text-ink font-semibold text-xl mb-3">Barcode Scanning</h5>
                <p class="xl:pt-2 text-ink">
                  Track expiry data in real time through barcode scanning fast, seamless, and accurate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- <div class="col-span-4">
    <div class="bg-surface rounded-xl px-8 pt-8 pb-4">
      <h6 class="text-center">Analytics</h6>
      <div class="flex gap-2 mt-10 items-end justify-center">
        <div class="flex-col gap-2 items-end justify-end">
          <div class="bg-green-400 w-16 h-32 rounded-md"></div>
          <div class="bg-red-400 w-16 h-10 rounded-md mt-1"></div>
          <p class="!text-[12px] !font-bold text-muted/80 text-center pt-2">Jan</p>
        </div>
        <div class="flex-col gap-2 items-end justify-end">
          <div class="bg-green-400 w-16 h-48 rounded-md"></div>
          <div class="bg-red-400 w-16 h-8 rounded-md mt-1"></div>
          <p class="!text-[12px] !font-bold text-muted/80 text-center pt-2">Feb</p>
        </div>
        <div class="flex-col gap-2 items-end justify-end">
          <div class="bg-green-400 w-16 h-16 rounded-md"></div>
          <div class="bg-red-400 w-16 h-32 rounded-md mt-1"></div>
          <p class="!text-[12px] !font-bold text-muted/80 text-center pt-2">Mar</p>
        </div>
        <div class="flex-col gap-2 items-end justify-end">
          <div class="bg-green-400 w-16 h-32 rounded-md"></div>
          <div class="bg-red-400 w-16 h-20 rounded-md mt-1"></div>
          <p class="!text-[12px] !font-bold text-muted/80 text-center pt-2">Apr</p>
        </div>
        <div class="flex-col gap-2 items-end justify-end">
          <div class="bg-green-400 w-16 h-24 rounded-md"></div>
          <div class="bg-red-400 w-16 h-10 rounded-md mt-1"></div>
          <p class="!text-[12px] !font-bold text-muted/80 text-center pt-2">May</p>
        </div>

      </div>
    </div>
  </div> -->

  <!-- <section class="my-32">
    <div class="grid"></div>
    <div class="container relative">
      <div
        class="bg-white rounded-full p-5 mt-16 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg z-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="bg-ink" class="size-6">
          <path
            d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
      </div>
      <div class="grid grid-cols-12 relative gap-2">
        <div class="col-span-12 mt-4">
          <div class="text-center">
            <h3 class="text-ink">Find What Works For You</h3>
          </div>
        </div>
        <div class="col-span-8 col-start-3 mb-8">
          <p class="pt-2 text-ink text-center">Type, speak, snap, or stream, ExpiryAware has it all.</p>
        </div>
        <div
          class="px-2 xl:px-8 col-span-6 xl:col-start-4 xl:col-span-3 bg-primary rounded-l-2xl rounded-t-2xl py-16 shadow-sm z-10 ">
          <div class="col-span-12 mt-4">
            <div class="text-center">
              <h4 class="text-white !text-[14px] xl:!text-[32px]">Manual Entry</h4>
            </div>
          </div>
          <div class="col-span-12 pt-4">
            <p class="text-white text-center !text-[12px] xl:!text-[20px]">
              Product name, quantity, and expiry date manually quick, clear, and precise.
            </p>
          </div>
        </div>

        <div class="px-2 xl:px-8 col-span-6  xl:col-span-3 bg-primary rounded-r-2xl rounded-t-2xl shadow-md py-16 z-20">
          <div class="col-span-12 mt-4">
            <div class="text-center">
              <h4 class="text-white !text-[14px] xl:!text-[32px]">Voice Command</h4>
            </div>
          </div>
          <div class="col-span-12  pt-4">
            <p class="text-white text-center !text-[12px] xl:!text-[20px] ">
              Speak naturally the system records product details hands-free.
            </p>
          </div>
        </div>

        <div
          class="col-span-6 px-2 xl:px-8 xl:col-start-4 xl:col-span-3 items-center bg-primary rounded-l-2xl rounded-b-2xl py-16 z-30">
          <div class="col-span-12 mt-4">
            <div class="text-center">
              <h4 class="text-white !text-[14px] xl:!text-[32px]">Smart Capture</h4>
            </div>
          </div>
          <div class="col-span-12 pt-4">
            <p class=" text-white text-center !text-[12px] xl:!text-[20px]">
              From product labels to expiry prints, our visual AI detects and log data.
            </p>
          </div>
        </div>

        <div class="col-span-6 xl:col-span-3 px-2 xl:px-8 bg-primary rounded-r-2xl rounded-b-2xl shadow-xl py-16 z-40">
          <div class="col-span-12 mt-4">
            <div class="text-center">
              <h4 class="text-white !text-[14px] xl:!text-[32px]">Scanning</h4>
            </div>
          </div>
          <div class="col-span-12 pt-4">
            <p class="text-white text-center !text-[12px] xl:!text-[20px]">
              Instantly add products and data by scanning their barcodes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section> -->



  <section class="mt-20 px-5">
    <div class="container rounded-3xl w-full min-h-[500px] p-8" style="background-image: url('/desert.avif');">
      <div class="px-4 xl:px-12 py-16">
        <div class="text-start">
          <h3 class="text-white">Track everything effortlessly</h3>
          <p class="text-white pt-1">Add expiry dates with voice, image, or barcode — all in seconds.</p>
        </div>

        <div class="text-end mt-8">
          <h3 class="text-white">AI that spots patterns</h3>
          <p class="text-white pt-1">See which products expire fastest and plan purchases smarter.</p>
        </div>

        <div class="text-start mt-8">
          <h3 class="text-white">Instant expiry alerts</h3>
          <p class="text-white pt-1">Get notified before items go bad and reduce unnecessary waste.</p>
        </div>

        <div class="text-end mt-8">
          <h3 class="text-white">Multi-device sync</h3>
          <p class="text-white pt-1">Access your tracked inventory anywhere — web, mobile, or tablet.</p>
        </div>

      </div>

    </div>
  </section>

  <section class="mt-16 pt-16">
    <div class="container">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 mb-5 xl:mb-12">
          <div class="text-center">
            <h3 class="text-ink">Our Plans</h3>
            <p>We can make it work with you</p>
          </div>
        </div>
        <div class="col-span-12 xl:col-span-4 rounded-2xl bg-gray-200 py-8">
          <h2 class="text-center pt-6">FREE</h2>
          <h1 class="!font-bold text-center">$0<span class="!font-bold"> per month</span></h1>
          <div class="border border-dashed border-ink/20 mt-7"></div>
          <div class="flex flex-col gap-4 p-12 text-primary">
            <div class="flex gap-4 tems-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">Track up to 20 products</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">Manual expiry entry</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">Barcode Scanner</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">Expiry Alerts</h6>
            </div>

          </div>
        </div>
        <div class="col-span-12 xl:col-span-4 rounded-2xl border-[8px] border-primary py-12 relative">
          <div class="absolute right-1/2 translate-x-1/2 -top-5 bg-primary px-6 py-1 rounded">
            <p class="text-white !text-[12px] !font-bold">POPULAR</p>
          </div>
          <h2 class="text-center">PLUS</h2>
          <h1 class="!font-bold text-center">$9<span class="!font-bold"> per month</span></h1>
          <div class="border border-dashed border-ink/20 mt-7"></div>
          <div class="flex flex-col gap-4 p-12 text-primary">
            <div class="flex gap-4 tems-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">Unlimited products</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">AI detection (image + voice)</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">Smart analytics dashboard</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">Multi-device sync</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">Team access (up to 3 users)</h6>
            </div>
          </div>
        </div>
        <div class="col-span-12 xl:col-span-4 rounded-2xl bg-gray-200 py-12">
          <h2 class="text-center">Pro</h2>
          <h1 class="!font-bold text-center">$1 9<span class="!font-bold"> per month</span></h1>
          <div class="border border-dashed border-ink/20 mt-9"></div>
          <div class="flex flex-col gap-4 p-12 text-primary">
            <div class="flex gap-4 tems-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">Everything in Plus</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">API access for integrations</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">Priority support</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">Early feature access</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">Team access (up to 5 users)</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



  <!-- <section>
    <div class="container">
      <h2>Frequenty Asked Questions</h2>
    </div>
  </section> -->

  <section class="bg-surface mt-20">
    <div class="container py-6 xl:py-12">
      <div class="grid grid-cols-12 gap-8 items-center">
        <div class="col-span-12 xl:col-span-6 mt-6 pb-12">
          <div class="col-span-12">
            <div class="flex justify-start items-start">
              <div class=" rounded-full">
                <h6 class="!font-semibold !text-[13px] tracking-wider uppercase text-ink/60">
                  How We Do It
                </h6>
              </div>
            </div>
          </div>
          <div class="text-start max-w-2xl mt-2">
            <h3 class="text-3xl md:text-4xl font-semibold text-ink leading-tight">
              Powered by the world's most advanced AI models.
            </h3>
            <p class="pt-4 text-lg text-ink/70 leading-relaxed">
              From Whisper to GPT-4, plus some of our inhouse magic code sprinkled in.
            </p>
          </div>
        </div>
        <div class="col-span-12 xl:col-span-6 rounded-xl xl:flex grid grid-cols-12 items-center gap-6">
              <div class="rounded-2xl w-fit col-span-6">
            <NuxtImg src="/claude.png" alt="ExpiryAware logo" width="200" height="100%" />
          </div>
          <div class="rounded-2xl w-fit col-span-6">
            <NuxtImg src="/gpt.png" alt="ExpiryAware logo" width="200" height="100%" />
          </div>
          <!-- <div class="rounded-2xl w-fit">
            <NuxtImg src="/whisper.png" alt="ExpiryAware logo" width="120" height="100%" />
          </div> -->
          <div class="rounded-2xl w-fit xl:me-8 col-span-6">
            <NuxtImg src="/gemini.png" alt="ExpiryAware logo" width="200" height="100%" />
          </div>
      
        </div>
      </div>
    </div>
  </section>

  <section class="py-12 xl:py-32">
    <div class="container">
      <div class="grid grid-cols-12 items-center text-center xl:text-start gap-6">
        <div class="col-span-12 col-start-2 xl:col-span-5 xl:col-start-3">
          <h3>Learn how to leverage AI
            Let's connect.</h3>
        </div>
        <div class="col-span-12 col-start-4 xl:col-span-4 xl:col-start-9">
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
      </div>
    </div>
  </section>

  <div class="fixed right-0 top-1/2 -translate-y-1/2 bg-surface px-4 py-6 rounded-l-md z-50 cursor-pointer">
    <div class="flex flex-col gap-16 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>

      <h6 class="!text-[14px] text-ink [writing-mode:vertical-rl] rotate-180 tracking-wide">
        Talk!
      </h6>
    </div>
  </div>

</template>
