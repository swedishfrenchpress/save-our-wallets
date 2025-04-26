<!-- pages/index.vue -->
<template>
  <main class="min-h-screen bg-navy-900 text-white">
    <!-- Hero Section -->
    <section class="relative py-20 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <!-- Main Heading -->
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          Protect your right to<br />
          transact freely.
        </h1>
        
        <!-- Subtitle -->
        <p class="text-xl md:text-2xl mb-8">
          Support H.R. 1747: The Blockchain Regulatory Certainty Act
        </p>

        <!-- CTA Button -->
        <button class="bg-coral-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-coral-600 transition-colors">
          Contact your representatives
        </button>
      </div>
    </section>

    <!-- Why This Bill Matters Section -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16">
          Why This Bill Matters
        </h2>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-navy-800 rounded-xl p-8">
            <div class="text-6xl text-coral-500 mb-4">1</div>
            <h3 class="text-2xl font-bold mb-4">Safe Harbor Protection</h3>
            <p class="text-gray-300">
              Provides clear guidelines for blockchain developers and service providers who don't control user assets.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-navy-800 rounded-xl p-8">
            <div class="text-6xl text-coral-500 mb-4">2</div>
            <h3 class="text-2xl font-bold mb-4">Developer Freedom</h3>
            <p class="text-gray-300">
              Removes unnecessary licensing burdens while maintaining appropriate oversight where needed.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-navy-800 rounded-xl p-8">
            <div class="text-6xl text-coral-500 mb-4">3</div>
            <h3 class="text-2xl font-bold mb-4">Balanced Approach</h3>
            <p class="text-gray-300">
              Ensures America stays competitive in blockchain innovation while protecting consumers.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- What The Bill Does Section -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        <!-- Decorative line -->
        <div class="flex justify-center mb-8">
          <div class="w-24 h-1 bg-coral-500 rounded-full"></div>
        </div>

        <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
          What The Bill Does
        </h2>
        
        <div class="max-w-4xl mx-auto space-y-8">
          <!-- Main description -->
          <p class="text-xl text-gray-700 leading-relaxed">
            The Blockchain Regulatory Certainty Act creates a safe harbor from licensing and registration requirements for blockchain developers and service providers who:
          </p>

          <!-- Bullet points -->
          <ul class="space-y-4 text-xl text-gray-700 list-none pl-8">
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-coral-500 rounded-full"></span>
              <span>Don't control consumer funds</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-coral-500 rounded-full"></span>
              <span>Only provide software or computing services</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-coral-500 rounded-full"></span>
              <span>Don't act as financial intermediaries</span>
            </li>
          </ul>

          <!-- Closing statement -->
          <p class="text-xl text-gray-700 leading-relaxed pt-4">
            This clarity helps encourage innovation while ensuring appropriate oversight of actual financial services.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
// No script needed for this layout
</script>

<style>
/* Add custom colors to your tailwind.config.js instead of here */
</style>