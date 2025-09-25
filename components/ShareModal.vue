<!-- components/ShareModal.vue -->
<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!-- Background overlay -->
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="closeModal"></div>

    <!-- Modal panel -->
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-2xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
        <!-- Close button -->
        <div class="absolute right-0 top-0 pr-4 pt-4">
          <button
            type="button"
            class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
            @click="closeModal"
          >
            <span class="sr-only">Close</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Modal content -->
        <div class="flex flex-col items-center">
          <h3 class="text-2xl font-bold leading-6 text-gray-900 mb-6" id="modal-title">
            Share This Campaign
          </h3>
          <img
            :src="ogImage"
            alt="Shareable Campaign Image"
            class="w-full max-w-md rounded-2xl border border-gray-200 mb-4"
          >
          <div class="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              :href="ogImage"
              download="save-our-wallets.png"
              class="flex-1 bg-coral-500/90 backdrop-blur-sm text-white font-bold py-3 px-6 rounded-xl text-center hover:bg-coral-400/90 transition-colors"
            >
              Download Image
            </a>
            <button
              @click="shareOnTwitter"
              class="flex-1 flex items-center justify-center gap-2 bg-black/90 backdrop-blur-sm text-white font-bold py-3 px-6 rounded-xl hover:bg-gray-800/90 transition-colors"
            >
              <span class="font-extrabold text-xl" aria-hidden="true">X</span>
              Share on X
            </button>
          </div>
          <p class="text-gray-500 text-xs text-center mt-4">
            Download and share this image, or post directly to X (Twitter) to help spread the word!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ogImage from '@/assets/images/og_image2.png'
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

function shareOnTwitter() {
  const text = encodeURIComponent(
    "Protect your right to transact freely! Support Section 109 of the CLARITY Act. Learn more at https://saveourwallets.org @saveourwalets #SaveOurWallets #CLARITYAct"
  )
  const url = 'https://twitter.com/intent/tweet?text=' + text
  window.open(url, '_blank')
}
</script>

<style scoped>
</style> 