<template>
  <FloatingComposer
    @product-added="onProductAdded"
    @product-updated="onProductUpdated"
  />

  <section class="container text-ink bg-[#f8f8f8] relative">
    <div class="grid grid-cols-12">
      <div class="col-span-12">
        <div class="flex gap-1 justify-end items-center">
          <div class="rounded-full border-2 bg-white px-4 py-1 cursor-pointer text-ink">
            <div class="text-[14px] font-primary flex flex-col">Typing</div>
          </div>
          <div class="rounded-full border-2 px-4 py-1 cursor-pointer hover:bg-tint hover:text-white text-ink">
            <div class="text-[14px] font-primary flex flex-col">Audio</div>
          </div>
          <div class="rounded-full border-2 px-4 py-1 cursor-pointer hover:bg-tint hover:text-white text-ink">
            <div class="text-[14px] font-primary flex flex-col">Image</div>
          </div>
          <div class="rounded-full border-2 px-4 py-1 cursor-pointer hover:bg-tint hover:text-white text-ink">
            <div class="text-[14px] font-primary flex flex-col">Barcode</div>
          </div>
        </div>
      </div>

      <div class="col-span-12 mt-6">
        <div class="grid grid-cols-12">
          <div class="col-span-12 grid grid-cols-12 bg-white border-2 rounded-full">
            <div class="col-span-1 text-gray-400 ps-5 py-2 text-[14px] font-semibold">SKU</div>
            <div class="col-span-2 text-gray-400 ps-5 py-2 text-[14px] font-semibold">Name</div>
            <div class="col-span-2 text-gray-400 ps-5 py-2 text-[14px] font-semibold">Expiry Date</div>
            <div class="col-span-2 text-gray-400 ps-5 py-2 text-[14px] font-semibold">Stock Count</div>
            <div class="col-span-2 text-gray-400 ps-12 py-2 text-[14px] font-semibold">Status</div>
            <div class="col-span-2 text-gray-400 ps-5 py-2 text-[14px] font-semibold">Actions</div>
            <div class="col-span-1 text-gray-400 ps-3 py-2 text-[14px] font-semibold">Last Checked</div>
          </div>

          <div class="col-span-12 grid grid-cols-12 products mt-2 gap-2">
            <div
              v-for="p in products"
              :key="p.id"
              class="col-span-12 grid grid-cols-12 bg-white rounded-full py-2"
            >
              <div class="col-span-1 ps-5 py-1 text-[14px] text-ink font-primary flex items-center">
                {{ p.sku || '—' }}
              </div>
              <div class="col-span-2 ps-5 py-1 text-[14px] text-ink font-primary">
                <div class="flex items-center gap-4">
                  <div class="rounded-full h-fit max-h-8">
                    <NuxtImg src="/avatar.png" alt="ExpiryAware logo" width="32" class="h-fit max-h-8 m-0" />
                  </div>
                  <div class="text-[14px] text-ink font-primary flex items-center">
                    {{ p.product_name }}
                  </div>
                </div>
              </div>
              <div class="col-span-2 ps-5 py-1 text-[14px] text-ink font-primary flex items-center">
                {{ p.expiry_date ? formatDate(p.expiry_date) : '—' }}
              </div>
              <div class="col-span-2 ps-5 py-1 text-[14px] text-ink font-primary flex items-center">
                {{ p.count ?? 0 }}
              </div>
              <div class="col-span-2 ps-5 py-1 flex items-center">
                <p
                  :class="[
                    '!text-[12px] font-bold text-white px-3 rounded-full w-fit',
                    p.status === 'Error'
                      ? 'bg-red-500'
                      : p.status === 'Expired'
                        ? 'bg-red-500'
                        : p.status === 'Expiring Soon'
                          ? 'bg-yellow-500'
                          : p.status === 'Pending'
                            ? 'bg-gray-400'
                            : 'bg-green-500'
                  ]"
                >
                  {{ p.status || 'Unknown' }}
                </p>
              </div>
              <div class="col-span-2 ps-5 py-1 text-[14px] text-primary flex items-center gap-2 cursor-pointer">
                <span>Edit</span> | <span>Delete</span>
              </div>
              <div class="col-span-1 ps-3 py-3 text-[8px] text-ink font-primary flex items-center">
                {{ p.last_checked ? formatDateTime(p.last_checked) : '—' }}
              </div>
            </div>

            <div v-if="!products.length" class="col-span-12 text-center text-sm text-gray-400 py-6">
              No products yet.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'dashboard' })

type Product = {
  id: string | number
  sku: string
  product_name: string
  expiry_date: string | null
  count: number
  status: string
  last_checked?: string | null
}

const { data } = await useFetch<Product[]>('/api/products')
const products = ref<Product[]>(data.value ?? [])

function onProductAdded(p: Product) {
  products.value.unshift(p)
}

function onProductUpdated(payload: {
  tempId: string
  sku?: string
  product_name?: string
  expiry_date?: string
  count?: number
  status?: string
}) {
  const i = products.value.findIndex(x => x.id === payload.tempId)
  if (i === -1) return
  const current = products.value[i]
  products.value[i] = {
    ...current,
    ...(payload.sku ? { sku: payload.sku } : {}),
    ...(payload.product_name ? { product_name: payload.product_name } : {}),
    ...(payload.expiry_date ? { expiry_date: payload.expiry_date } : {}),
    ...(typeof payload.count === 'number' ? { count: payload.count } : {}),
    ...(payload.status ? { status: payload.status } : {})
  }
}

const formatDate = (iso: string) => new Date(iso).toLocaleDateString()
const formatDateTime = (iso: string) => new Date(iso).toLocaleString()
</script>
