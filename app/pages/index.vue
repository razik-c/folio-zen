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
                • New: live company search • Auto-personalised cold emails • AI reply summaries with next steps
              </p>
              <p class="!text-[14px] text-ink/80" aria-hidden="true">
                • New: live company search • Auto-personalised cold emails • AI reply summaries with next steps
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
        <div class="col-span-12 xl:col-span-8 text-center xl:col-start-3">
          <h1>A smarter way to handle <br class="hidden xl:block"></br>all your outreach.</h1>
          <div class="flex justify-center items-center">
            <div class="max-w-[600px]">
              <p class="pt-4 text-center">
                Source the best leads, send them a automised custom email, and turn every reply into a clear summary and
                next step.
              </p>
            </div>
          </div>
          <div class="flex pt-6 justify-center items-center gap-2 mt-6">
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
      </div>
    </div>
  </section>

  <section class="px-5 xl:px-0 mt-16 xl:mt-32">
    <div class="container bg-ink rounded-[48px] pt-12 pb-4 xl:py-32">
      <div class="container relative">
        <div class="grid grid-cols-12">
          <div class="xl:col-start-3 xl:col-span-5 col-span-12 text-center xl:text-start">
            <h1 class="text-white">
              Discover, Connect and Improve
            </h1>
          </div>
          <div class="col-span-12 text-center xl:text-start xl:col-span-6 xl:col-start-3 mt-4">
            <p class="text-white">
              Find ideal companies, automate your cold emails, and understand which audiences and messages reply, so you
              can improve each campaign and repeat what works.
            </p>
          </div>
        </div>
        <div class="xl:absolute bottom-[-150px] right-32 flex justify-center items-center">
          <NuxtImg src="/phone.png" alt="Outreach platform preview" class="max-h-[500px]" width="260" height="100%" />
        </div>
      </div>

    </div>
  </section>




  <section class="mt-16 xl:mt-32">
    <div class="container">
      <div class="xl:grid grid-cols-12 items-center gap-16">
        <div class="col-span-12 xl:col-span-6 mt-4">
          <div class="flex flex-col">
            <div class="text-start">
              <h1 class="text-ink">Your time is expensive, don't waste it.</h1>
            </div>
            <p class="pt-4 text-ink text-start">
              Let the system handle the busywork while you focus on real conversations.
            </p>
          </div>
        </div>

        <div class="col-span-12 xl:col-span-6 xl:col-start-7 
            flex flex-col xl:grid grid-cols-1 xl:grid-cols-2 gap-8 w-full mt-6 xl:mt-0 ">

          <div class="flex items-start gap-6 w-full">
            <div class="flex flex-col w-full">
              <h5 class="text-ink">Manual Prospect Lists</h5>
              <p class="pt-3">
                Add companies or people you already know, then let automated campaigns handle the outreach and tracking.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-6 w-full">
            <div class="flex flex-col w-full">
              <h5 class="text-ink mb-2">Niche Company Search</h5>
              <p class="pt-3">
                Search by niche, location, and size to instantly build targeted lists of companies and decision makers.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-6 w-full">
            <div class="flex flex-col w-full">
              <h5 class="text-ink mb-2">AI Email Writing</h5>
              <p class="pt-3">
                Describe what you want. The system drafts personalised, on-brand cold emails for every prospect.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-6 w-full">
            <div class="flex flex-col w-full">
              <h5 class="text-ink mb-2">Reply Summaries & More</h5>
              <p class="pt-3">
                Every reply is summarised with sentiment, intent, and suggested next action so you can move fast.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>


  <section class="mt-16 xl:mt-32">

    <div class="container">
      <div class="grid grid-cols-12 items-center">
        <div class="col-span-12 xl:col-span-6 xl:col-start-4 text-center">
          <h1>Who we help and why they choose us</h1>
        </div>
        <div class="col-span-12 xl:col-span-6 xl:col-start-4 text-center">
          <p class="pt-4">Discover how our platform empowers users to find the right companies, launch effective
            campaigns, and get more replies.</p>
        </div>

        <div class="col-span-full mb-16"></div>
        <div class="col-span-12 xl:col-span-4 xl:col-start-3">
          <NuxtImg src="/laptop-guy.png" class="rounded-[40px]" alt="Outreach platform preview" width="580"
            height="400" />
        </div>
        <div class="col-span-12 xl:col-span-5 xl:col-start-8  text-center xl:text-start">
          <h4>Connecting People With Better Career Opportunities.</h4>
          <p class="pt-4">Users have been discovering companies in their niche and contacting hiring teams directly to
            uncover real
            opportunities faster.
          </p>
        </div>

        <div class="col-span-12 xl:col-span-4 xl:col-start-8">
          <NuxtImg src="/digital-agency.png" class="rounded-[40px] block xl:hidden" alt="Outreach platform preview"
            width="580" height="400" />
        </div>

        <div class="col-span-12 xl:col-span-5 xl:col-start-2  text-center xl:text-start">
          <h4>Digital Agencies With the Right Companies.</h4>
          <p class="pt-4">
            Agencies have been finding niche-specific businesses and reaching key decision-makers to secure more
            qualified opportunities.
          </p>
        </div>

        <div class="col-span-12 xl:col-span-4 xl:col-start-8">
          <NuxtImg src="/digital-agency.png" class="rounded-[40px] hidden xl:block" alt="Outreach platform preview"
            width="580" height="400" />
        </div>
        <div class="col-span-12 xl:col-span-4 xl:col-start-3">
          <NuxtImg src="/freelancers.png" class="rounded-[40px]" alt="Outreach platform preview" width="580"
            height="400" />
        </div>
        <div class="col-span-12 xl:col-span-5 xl:col-start-8  text-center xl:text-start">
          <h4>Freelancers and Web Developers</h4>
          <p class="pt-4">
            Developers have been finding local companies without an online presence and contacting them directly to
            convert these gaps into real projects.
          </p>
        </div>

        <div class="col-span-12 xl:col-span-4 xl:col-start-8 block xl:hidden">
          <NuxtImg src="/manymore.png" class="rounded-[40px]" alt="Outreach platform preview" width="580"
            height="400" />
        </div>

        <div class="col-span-12 xl:col-span-5 xl:col-start-2 text-center xl:text-start">
          <h4>And Many Many More…</h4>
          <p class="pt-4">
            From sales teams and videographers to consultants and service providers, users across sectors benefit from
            our platform.
          </p>
        </div>

        <div class="col-span-12 xl:col-span-4 xl:col-start-8 hidden xl:block">
          <NuxtImg src="/manymore.png" class="rounded-[40px]" alt="Outreach platform preview" width="580"
            height="400" />
        </div>
      </div>
    </div>
  </section>

  <section class="mt-20 overflow-hidden">
    <div class="container">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12">
          <h1>Everything Our Platform Offers</h1>
          <p class="pt-4">
            A complete set of tools designed to make your outreach faster and more effective.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-20 container">
      <ClientOnly>
        <div class="relative">

          <swiper-container ref="containerRef" :slides-per-view="'auto'" :space-between="32" :init="false"
            class="mt-8 !overflow-visible">
            <swiper-slide v-for="(item, idx) in features" :key="idx" class="!w-[240px] sm:!w-[280px] md:!w-[600px]">
              <div class="flex flex-col items-start gap-4 relative">
                <div class="flex flex-col max-w-[400px]">
                  <p>[{{ idx + 1 }}]</p>
                  <h5 class="text-ink pt-2">{{ item.title }}</h5>
                  <p class="text-sm text-gray-600 pt-2">
                    {{ item.body }}
                  </p>
                </div>

                <NuxtImg :src="item.image" width="700" height="400" class="object-cover xl:min-h-[400px]" />
                <div
                  class="absolute bottom-[-150px] rounded-[24px] left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-[500px] xl:h-[300px] bg-white border-[8px] border-surface">
                  <NuxtImg src="/dashboard.png" width="100%" height="100%"
                    class="object-cover m-0 p-0 rounded-[12px] max-w-[240px] xl:max-w-[485px]" />
                </div>
              </div>
            </swiper-slide>
          </swiper-container>

        </div>

        <div class="w-full flex justify-center items-center mt-20 xl:mt-32">
          <div class="pointer-events-none flex items-center">
            <div class="flex pointer-events-auto gap-6 items-center">

              <button class="rounded-full bg-muted/15 flex items-center justify-center" @click="swiper.prev()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5 mx-4 my-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>

              <div class="rounded-full bg-muted/15 flex items-center justify-center px-10 py-5">
                <div class="flex justify-center items-center gap-2">
                  <button v-for="(item, i) in features" :key="'dot-' + i" class="h-2 w-2 rounded-full transition-all"
                    :class="i === activeIndex ? 'bg-ink scale-110' : 'bg-ink/40'" />
                </div>
              </div>

              <button class="rounded-full bg-muted/15 flex items-center justify-center" @click="swiper.next()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5 mx-4 my-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>

            </div>
          </div>
        </div>

      </ClientOnly>
    </div>

  </section>



  <section class="mt-16 xl:mt-32">
    <div class="container">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 mb-5 xl:mb-12">
          <div class="text-center flex justify-center items-center flex-col gap-2">

            <h1 class="text-ink">
              Our plans
            </h1>
            <p>
              Pick a plan that matches how much you want to send.
            </p>
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

              <h6 class="text-ink">Up to 50 contacts stored</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">One outbound campaign</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">Basic niche/company search</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">AI reply summaries (lite)</h6>
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

              <h6 class="text-ink">Unlimited contacts & campaigns</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">AI email writing & reply analysis</h6>
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

              <h6 class="text-ink">Multi-device access</h6>
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
          <h1 class="!font-bold text-center">$19<span class="!font-bold"> per month</span></h1>
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

              <h6 class="text-ink">API access & CRM integrations</h6>
            </div>
            <div class="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd" />
              </svg>

              <h6 class="text-ink">Advanced routing & permissions</h6>
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

              <h6 class="text-ink">Team access (up to 10 users)</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 
  <section class="mt-16 xl:mt-32">
    <div class="container">
      <h3>Frequently Asked Questions</h3>
      <p class="pt-2">Missing the answer you're looking for? Contact us.</p>
      <div class="flex gap-2 mt-5 items-center">
        <NuxtLink to="/demo"
          class="group no-underline border-2 border-tint rounded-full px-6 py-[6px] text-ink flex items-center gap-4 cursor-pointer transition-colors duration-200 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
          Mail Us
        </NuxtLink>
      </div>

      <div class="flex justify-center items-center">
        <div class="accordion-single s-acc-single w-full max-w-[800px] rounded-2xl">
          <div class="accordion-single-item js-acc-item bg-muted/10  rounded-2xl my-4">
            <h6 class="accordion-single-title js-acc-single-trigger text-ink">
              How is this platform priced this low?
            </h6>
            <div class="accordion-single-content">
              <p>
                We focus on one job: find leads, send emails, and summarise replies. No bloated CRM or unused modules,
                which keeps infra, support, and your price low.
              </p>
            </div>
          </div>

          <div class="accordion-single-item js-acc-item bg-muted/10  rounded-2xl my-4">
            <h6 class="accordion-single-title js-acc-single-trigger text-ink">
              What do I get in the free plan?
            </h6>
            <div class="accordion-single-content">
              <p>
                You can store up to 50 contacts, run one outbound campaign, search for a niche, and get basic AI reply
                summaries. Ideal for testing or very small lists.
              </p>
            </div>
          </div>

          <div class="accordion-single-item js-acc-item bg-muted/10  rounded-2xl my-4">
            <h6 class="accordion-single-title js-acc-single-trigger text-ink">
              When do I need the Plus plan?
            </h6>
            <div class="accordion-single-content">
              <p>
                When you’re sending regularly, need more contacts and campaigns, and want AI to write emails, analyse
                replies, and show which campaigns are actually working.
              </p>
            </div>
          </div>

          <div class="accordion-single-item js-acc-item bg-muted/10  rounded-2xl my-4">
            <h6 class="accordion-single-title js-acc-single-trigger text-ink">
              How do you keep costs predictable?
            </h6>
            <div class="accordion-single-content">
              <p>
                We batch AI calls, avoid background jobs you didn’t trigger, and cap intensive actions per plan. You pay
                based on clear usage, not surprise overages.
              </p>
            </div>
          </div>

          <div class="accordion-single-item js-acc-item bg-muted/10  rounded-2xl my-4">
            <h6 class="accordion-single-title js-acc-single-trigger text-ink">
              Can I use it on mobile and desktop?
            </h6>
            <div class="accordion-single-content">
              <p>
                Yes. It works on web, tablet, and mobile so one person can build lists while another handles replies,
                wherever they are.
              </p>
            </div>
          </div>

          <div class="accordion-single-item js-acc-item bg-muted/10  rounded-2xl my-4">
            <h6 class="accordion-single-title js-acc-single-trigger text-ink">
              Do you store my emails forever?
            </h6>
            <div class="accordion-single-content">
              <p>
                No. We keep the conversation context and metadata needed for summaries and analytics. We don’t need to
                keep raw data longer than necessary to power your account.
              </p>
            </div>
          </div>

          <div class="accordion-single-item js-acc-item bg-muted/10  rounded-2xl my-4">
            <h6 class="accordion-single-title js-acc-single-trigger text-ink">
              Can this work for agencies or solo founders?
            </h6>
            <div class="accordion-single-content">
              <p>
                Yes. Agencies, SaaS founders, recruiters, and consultants can all use it to find prospects, automate
                email outreach, and get clear next steps for every reply.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section> -->


</template>


<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'


let triggers: HTMLElement[] = []

const toggleAccordion = (event: Event) => {
  const thisItem = (event.currentTarget as HTMLElement).parentNode as HTMLElement
  const items = document.querySelectorAll<HTMLElement>('.js-acc-item')

  items.forEach((item) => {
    if (item === thisItem) {
      item.classList.toggle('is-open')
    } else {
      item.classList.remove('is-open')
    }
  })
}

onMounted(() => {
  triggers = Array.from(document.querySelectorAll<HTMLElement>('.js-acc-single-trigger'))
  triggers.forEach((t) => t.addEventListener('click', toggleAccordion))
})

onBeforeUnmount(() => {
  triggers.forEach((t) => t.removeEventListener('click', toggleAccordion))
})

const containerRef = ref<any>(null)
const activeIndex = ref(0)

const features = [
  {
    title: 'Lead Generation',
    body: 'Find companies that match your niche and uncover new opportunities instantly.',
    image: '/outdoor.png',
  },
  {
    title: 'Niche Prospecting',
    body: 'Filter by tech stack, industry, or location so you only reach out to the right people.',
    image: '/desert.avif',
  },
  {
    title: 'Reply Insights',
    body: 'Scan replies, get quick summaries, and see which messages actually convert.',
    image: '/peoples.jpg',
  },
  {
    title: 'Advanced Data Visualisation',
    body: "Get clean dashboards that reveal which emails land, which don't visually.",
    image: '/peoples.jpg',
  },
  
]

const swiper = useSwiper(containerRef, {
  slidesPerView: 'auto',
  spaceBetween: 0,
  on: {
    afterInit(s: any) {
      activeIndex.value = s.realIndex ?? s.activeIndex ?? 0
    },
    slideChange(s: any) {
      activeIndex.value = s.realIndex ?? s.activeIndex ?? 0
    },
  },
})

</script>

<style lang="css">
swiper-slide {
  width: auto;
  height: auto;
}

swiper-container::part(container) {
  overflow: visible;
}
</style>