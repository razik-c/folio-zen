<template>
  <div
    v-show="open"
    class="fixed left-1/2 -translate-x-1/2 bottom-32 w-1/3 rounded-xl z-50"
  >
    <form
      @submit.prevent="send"
      class="flex items-center gap-2 px-2 bg-ink rounded-full shadow-xl border border-white/15"
    >
      <div class="flex w-full">
        <textarea
          ref="ta"
          v-model="text"
          :rows="1"
          @input="autoGrow"
          @keydown.enter.exact.prevent="send"
          @keydown.shift.enter.prevent="newline"
          @keydown.esc.prevent="maybeClose"
          placeholder="Add your product here eg - SKU/ Name/ Date/ Count"
          class="w-full max-h-40 resize-none bg-ink text-white m-2 rounded-lg px-3 py-3 text-[14px] leading-5 outline-none"
        />
      </div>

      <button
        type="submit"
        :disabled="!text.trim() || sending"
        class="p-2 rounded-full text-white bg-primary disabled:opacity-50"
        title="Send"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits<{
  (e: 'product-added', product: {
    id: string
    sku: string
    product_name: string
    expiry_date: string | null
    count: number
    status: string
  }): void
  (e: 'product-updated', payload: {
    tempId: string
    sku?: string
    product_name?: string
    expiry_date?: string
    count?: number
    status?: string
  }): void
}>()

const open = ref(true)
const text = ref('')
const sending = ref(false)
const ta = ref<HTMLTextAreaElement | null>(null)

function onGlobalKey(e: KeyboardEvent) {
  const el = document.activeElement as HTMLElement | null
  if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) return
  if (e.metaKey || e.ctrlKey || e.altKey) return
  if (e.key === '/') {
    e.preventDefault()
    summon('')
    return
  }
  if (e.key.length === 1) {
    e.preventDefault()
    summon(e.key)
  }
  if (e.key === 'Enter') {
    e.preventDefault()
    summon('')
  }
}

function summon(initial: string) {
  open.value = true
  if (initial) text.value = text.value ? text.value + initial : initial
  nextTick(() => {
    ta.value?.focus()
    autoGrow()
  })
}

function maybeClose() {
  if (!text.value.trim()) open.value = false
}

function autoGrow() {
  if (!ta.value) return
  ta.value.style.height = '0px'
  ta.value.style.height = Math.min(ta.value.scrollHeight, 160) + 'px'
}

function newline() {
  const el = ta.value
  if (!el) return
  const start = el.selectionStart
  const end = el.selectionEnd
  text.value = text.value.slice(0, start) + '\n' + text.value.slice(end)
  nextTick(() => {
    if (!ta.value) return
    ta.value.selectionStart = ta.value.selectionEnd = start + 1
    autoGrow()
  })
}

async function send() {
  const payload = text.value.trim()
  if (!payload) return

  // optimistic insert
  const tempId = `temp-${Date.now()}`
  emit('product-added', {
    id: tempId,
    sku: '',
    product_name: payload.split(' ')[0] || 'New product',
    expiry_date: null,
    count: 0,
    status: 'Pending'
  })

  // clear UI fast
  text.value = ''
  await nextTick()
  autoGrow()

  sending.value = true
  try {
    const res = await $fetch('/api/parse', {
      method: 'POST',
      body: { text: payload }
    }) as {
      sku: string
      product_name: string
      expiry_date: string
      count: number
    }

    emit('product-updated', {
      tempId,
      sku: res.sku,
      product_name: res.product_name,
      expiry_date: res.expiry_date,
      count: res.count,
      status: 'Fresh'
    })
  } catch (err) {
    console.error('parse failed', err)
    emit('product-updated', {
      tempId,
      status: 'Error'
    })
  }
  sending.value = false
}

onMounted(() => window.addEventListener('keydown', onGlobalKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onGlobalKey))
</script>
