<!-- pages/index.vue -->
<template>
  <main class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4">
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <!-- Logo/Icon -->
      <div class="animate-bounce bg-green-500 p-4 w-16 h-16 rounded-full mx-auto mb-8 shadow-lg shadow-green-500/30">
        <div class="text-2xl">💰</div>
      </div>

      <!-- Main Title with Animation -->
      <h1 class="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text animate-fade-in">
        Save Our Wallets
      </h1>

      <!-- Subtitle -->
      <p class="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
        Your personal finance companion, helping you make smarter decisions with your money. Built with Nuxt 3 and styled with Tailwind CSS.
      </p>

      <!-- Call to Action Buttons -->
      <div class="flex flex-wrap justify-center gap-4 mt-10">
        <a
          href="#"
          class="px-8 py-3 bg-green-500 rounded-full font-semibold hover:bg-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1"
        >
          Get Started
        </a>
        <a
          href="#"
          class="px-8 py-3 border-2 border-green-500 rounded-full font-semibold hover:bg-green-500/10 transition-all duration-300"
        >
          Learn More
        </a>
      </div>

      <!-- Feature Cards -->
      <div class="grid md:grid-cols-3 gap-6 mt-16">
        <div class="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm">
          <div class="text-green-500 text-2xl mb-4">📊</div>
          <h3 class="text-xl font-semibold mb-2">Track Expenses</h3>
          <p class="text-gray-400">Monitor your spending habits with intuitive tracking tools</p>
        </div>
        <div class="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm">
          <div class="text-green-500 text-2xl mb-4">🎯</div>
          <h3 class="text-xl font-semibold mb-2">Set Goals</h3>
          <p class="text-gray-400">Create and achieve your financial goals step by step</p>
        </div>
        <div class="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm">
          <div class="text-green-500 text-2xl mb-4">💡</div>
          <h3 class="text-xl font-semibold mb-2">Smart Insights</h3>
          <p class="text-gray-400">Get personalized tips to improve your financial health</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// No script needed for this simple example
</script>

<style>
/* Add custom animation */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>