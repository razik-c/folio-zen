<template>
  <div
    v-show="open"
    class="fixed left-1/2 -translate-x-1/2 bottom-6 w-1/3 rounded-xl"
  >
    <form @submit.prevent="send" class="flex items-center gap-2 px-2 bg-white rounded-full shadow-xl border border-black/5">
      <div class="flex w-full">
        <textarea
          ref="ta"
          v-model="text"
          :rows="1"
          @input="autoGrow"
          @keydown.enter.exact.prevent="send"        
          @keydown.shift.enter.prevent="newline"     
          @keydown.esc.prevent="maybeClose"          
          placeholder="Type your product…  e.g. A101, Yogurt, 2025-11-10, 50, Fresh"
          class="w-full max-h-40 resize-none bg-white m-2 rounded-lg px-3 py-3 text-[14px] leading-5 outline-none
                 focus:ring-none focus:ring-none focus:border-none"
        />
      </div>

      <button
        type="submit"
        :disabled="!text.trim() || sending"
        class="p-2 rounded-full text-white bg-primary disabled:opacity-50"
        title="Send"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'

const open = ref(true)
const text = ref('')
const sending = ref(false)
const ta = ref<HTMLTextAreaElement | null>(null)

// open when user types anywhere not inside an input/textarea/contentEditable
function onGlobalKey(e: KeyboardEvent) {
  const el = document.activeElement as HTMLElement | null
  if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) return
  if (e.metaKey || e.ctrlKey || e.altKey) return

  // hotkeys
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
  if (initial) {
    text.value = text.value ? text.value + initial : initial
  }
  nextTick(() => {
    if (!ta.value) return
    ta.value.focus()
    // move caret to end
    const len = text.value.length
    ta.value.selectionStart = ta.value.selectionEnd = len
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
  sending.value = true


  text.value = ''
  await nextTick()
  autoGrow()
  sending.value = false
  open.value = false
}

onMounted(() => window.addEventListener('keydown', onGlobalKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onGlobalKey))
</script>
