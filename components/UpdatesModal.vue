<!-- components/UpdatesModal.vue -->
<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!-- Background overlay -->
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="closeModal"></div>

    <!-- Modal panel -->
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
            <h3 class="text-2xl font-bold leading-6 text-navy-900 mb-6" id="modal-title">
              Stay Updated
            </h3>
            
            <!-- Email Form -->
            <div class="email-form">
              <h3 class="text-navy-900 text-base md:text-lg mb-4 text-center">
                Sign up for the mailing list to stay informed on the campaign.
              </h3>
              <form @submit.prevent="submitForm" v-if="!signed_up" class="grid grid-cols-1 gap-4 items-center justify-center w-full">
                <input 
                  type="email" 
                  placeholder="Email" 
                  ref="email"
                  class="w-full px-4 py-3 bg-white border border-navy-900/20 text-navy-900 placeholder-navy-900/50 focus:outline-none focus:border-coral-500 text-base md:text-lg rounded-lg"
                >
                <button type="submit" :disabled="submitting" class="w-full border border-coral-500 text-coral-500 px-6 py-3 font-bold hover:bg-coral-500 hover:text-white transition-colors text-base md:text-lg bg-transparent rounded-lg">
                  <span v-if="submitting" class="loading-spinner mr-2"></span>
                  {{ submitting ? 'Signing up...' : 'Sign Up' }}
                </button>
              </form>
              <p v-if="result != ''" class="text-navy-900 mt-4 text-center">
                {{result}}
              </p>

              <p class="text-navy-900/70 text-xs md:text-sm text-center mt-4">
                Your information will only be used to keep you updated on the campaign.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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

const email = ref(null)
const result = ref('')
const signed_up = ref(false)
const submitting = ref(false)

async function submitForm() {
  submitting.value = true
  try {
    grecaptcha.execute()
  } catch(e) {
    result.value = "reCAPTCHA failed to initialize, please refresh the page and try again"
    submitting.value = false
  }
}

async function recaptchaApproved(token) {
  try {
    const res = await fetch(`https://saveourwallets.org/email-signup/?token=${token}&email=${email.value.value}`)
    if (!res.ok) {
      result.value = "Failed to submit email, please try again"
    } else {
      signed_up.value = true
      result.value = "Thank you for signing up to stay informed!"
    }
  } catch (e) {
    result.value = "Failed to submit email, please try again"
  }
  submitting.value = false
}

onMounted(() => {
  window.recaptchaApproved = recaptchaApproved
})

onUnmounted(() => {
  delete window.recaptchaApproved
})
</script>

<style scoped>
.loading-spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style> 