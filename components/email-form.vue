<!-- pages/index.vue -->
<template>
  <div class="email-form">
    <!-- Secondary Action: Email Signup -->
    <h3 class="text-white text-base md:text-lg mb-4 text-left">
      Sign up for the mailing list to stay informed on the campaign.
    </h3>
    <form class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-center justify-center w-full">
      <input 
        type="email" 
        placeholder="Email" 
        class="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-coral-500 text-base md:text-lg"
      >
      <button class="w-full border border-coral-500 text-coral-500 px-6 py-3 font-bold hover:bg-coral-500 hover:text-white transition-colors text-base md:text-lg bg-transparent">
        Sign Up
      </button>
    </form>

    <p class="text-white/70 text-xs md:text-sm text-center mt-4">
      Your information will only be used to look up your congressional representatives or keep you updated.
    </p>
  </div>
</template>

<script setup>

</script>

<style>

</style>