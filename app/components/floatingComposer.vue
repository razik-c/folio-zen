<template>
  <div v-show="open" class="fixed left-1/2 -translate-x-1/2 bottom-32 w-1/3 rounded-xl z-50">
    <form @submit.prevent="send"
      class="flex items-center gap-2 px-2 bg-ink rounded-full shadow-xl border border-white/15">
      <div class="flex w-full">
        <textarea ref="ta" v-model="text" :rows="1" @input="autoGrow" @keydown.enter.exact.prevent="send"
          @keydown.shift.enter.prevent="newline" @keydown.esc.prevent="maybeClose" :placeholder="placeholders[stage]"
          class="w-full max-h-40 resize-none bg-ink text-white m-2 rounded-lg px-3 py-3 text-[14px] leading-5 outline-none" />
      </div>

      <button type="submit" :disabled="!text.trim() || sending"
        class="p-2 rounded-full text-white bg-primary disabled:opacity-50" title="Send">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </button>
    </form>

    <!-- short error below composer -->
    <p v-if="composerError" class="text-xs text-red-400 mt-2 px-2">
      {{ composerError }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'

type Stage = 'sku' | 'name' | 'expiry' | 'count'

const emit = defineEmits<{
  (e: 'draft-change', payload: {
    stage: Stage
    draft: {
      sku?: string
      product_name?: string
      expiry_date?: string | null
      expiry_date_display?: string
      expiry_error?: boolean
      count?: number
    }
  }): void
  (e: 'product-added', product: {
    id: string | number
    sku: string
    product_name: string
    expiry_date: string | null
    count: number
    status: string
    last_checked?: string | null
  }): void
}>()

const open = ref(true)
const text = ref('')
const sending = ref(false)
const ta = ref<HTMLTextAreaElement | null>(null)

const stage = ref<Stage>('sku')

const draft = ref<{
  sku?: string
  product_name?: string
  expiry_date?: string | null
  expiry_date_display?: string
  expiry_error?: boolean
  count?: number
}>({})

const composerError = ref('')

const placeholders: Record<Stage, string> = {
  sku: 'Enter SKU',
  name: 'Enter product name',
  expiry: 'Enter expiry, e.g. "10 oct"',
  count: 'Enter quantity'
}

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

function emitDraft() {
  emit('draft-change', {
    stage: stage.value,
    draft: { ...draft.value }
  })
}

async function normalizeExpiry(raw: string): Promise<{ iso: string | null; display: string }> {
  try {
    const res = await fetch('/api/date.parse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: raw })
    })
    const json = await res.json()
    if (json.date) {
      return { iso: json.date as string, display: json.raw || raw }
    }
    return { iso: null, display: raw }
  } catch {
    return { iso: null, display: raw }
  }
}

// new: helper to actually store
async function saveProductToApi(payload: {
  sku: string
  product_name: string
  expiry_date: string | null
  count: number
  raw?: string | null
}) {
  const res = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (!res.ok) {
    const txt = await res.text()
    throw new Error(txt || 'Failed to save')
  }
  // assuming FastAPI returns created product
  return res.json()
}

async function send() {
  const value = text.value.trim()
  if (!value) return
  sending.value = true
  composerError.value = ''

  try {
    if (stage.value === 'sku') {
      draft.value.sku = value
      draft.value.expiry_error = false
      stage.value = 'name'
      emitDraft()
    } else if (stage.value === 'name') {
      draft.value.product_name = value
      draft.value.expiry_error = false
      stage.value = 'expiry'
      emitDraft()
    } else if (stage.value === 'expiry') {
      const norm = await normalizeExpiry(value)

      if (!norm.iso) {
        // stay on expiry, show error
        draft.value.expiry_date = null
        draft.value.expiry_date_display = value
        draft.value.expiry_error = true
        composerError.value = 'Wrong date'
        emitDraft()
        return
      }

      // use the parsed ISO for both stored and displayed
      draft.value.expiry_date = norm.iso
      draft.value.expiry_date_display = norm.iso
      draft.value.expiry_error = false

      stage.value = 'count'
      emitDraft()
    } else if (stage.value === 'count') {
      const num = Number(value)
      draft.value.count = Number.isFinite(num) && num >= 0 ? num : 0

      // here we call the Nuxt server route which calls FastAPI
      const payload = {
        sku: draft.value.sku || '',
        product_name: draft.value.product_name || '',
        expiry_date: draft.value.expiry_date || null,
        count: draft.value.count ?? 0,
        raw: draft.value.expiry_date_display || null
      }

      try {
        const created = await saveProductToApi(payload)
        // emit real product from backend
        emit('product-added', {
          id: created.id ?? `tmp-${Date.now()}`,
          sku: created.sku ?? payload.sku,
          product_name: created.product_name ?? payload.product_name,
          expiry_date: created.expiry_date ?? payload.expiry_date,
          count: typeof created.count === 'number' ? created.count : payload.count,
          status: created.status ?? 'Active',
          last_checked: created.last_checked ?? null
        })
      } catch (err: any) {
        // if backend fails, still show it as Error
        emit('product-added', {
          id: `tmp-${Date.now()}`,
          sku: payload.sku,
          product_name: payload.product_name,
          expiry_date: payload.expiry_date,
          count: payload.count,
          status: 'Error'
        })
        composerError.value = err?.message || 'Failed to save product'
      }

      // reset draft and stage
      draft.value = {}
      stage.value = 'sku'
      emitDraft()
    }
  } finally {
    if (!composerError.value) {
      text.value = ''
    }
    sending.value = false
    nextTick(() => ta.value?.focus())
  }
}

onMounted(() => window.addEventListener('keydown', onGlobalKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onGlobalKey))

emitDraft()
</script>
