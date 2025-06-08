<!-- pages/index.vue -->
<template>
  <div class="email-form">
    <!-- Secondary Action: Email Signup -->
    <h3 class="text-white text-base md:text-lg mb-4 text-center">
      Sign up for the mailing list to stay informed on the campaign.
    </h3>
    <form @submit.prevent="submitForm" v-if="!signed_up" class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-center justify-center w-full">
      <input 
        type="email" 
        placeholder="Email" 
		ref="email"
        class="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-coral-500 text-base md:text-lg"
      >
      <button type="submit" :disabled="submitting" class="w-full border border-coral-500 text-coral-500 px-6 py-3 font-bold hover:bg-coral-500 hover:text-white transition-colors text-base md:text-lg bg-transparent">
        <span v-if="submitting" class="loading-spinner mr-2"></span>
        {{ submitting ? 'Signing up...' : 'Sign Up' }}
      </button>
    </form>
    <p v-if="result != ''">
      {{result}}
    </p>

    <p class="text-white/70 text-xs md:text-sm text-center mt-4">
      Your information will only be used to look up your congressional representatives or keep you updated.
    </p>
  </div>
</template>

<script setup>
async function submitForm() {
  submitting.value = true
  try {
    grecaptcha.execute()
  } catch(e) {
    result.value = "reCAPTCHA failed to initialize, please refresh the page and try again"
    submitting.value = false
  }
}
</script>

<script>
const email = useTemplateRef('email')
const result = useTemplateRef('result')
const signed_up = useTemplateRef('signed_up')
const submitting = useTemplateRef('submitting')

export async function recaptchaApproved(token) {
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
export default {
  mounted() {
    window.recaptchaApproved = recaptchaApproved;
  }
};
</script>

<style>
</style>
