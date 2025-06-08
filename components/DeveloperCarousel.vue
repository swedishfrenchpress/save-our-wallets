<template>
  <section class="py-20 bg-white px-4 scroll-reveal">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-center">
        <!-- Left Arrow (desktop only) -->
        <button
          @click="goToPrev"
          class="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-navy-800/80 hover:bg-coral-500 text-white shadow transition mx-2"
          aria-label="Previous quote"
        >
          &#8592;
        </button>
        <div class="flex-1 flex justify-center min-h-[300px]">
          <transition :name="transitionName" mode="out-in" @after-enter="onTransitionEnd">
            <div
              class="flex flex-col md:flex-row items-start gap-12 w-full"
              :key="quotes[currentQuote].author"
              style="min-height: 260px;"
            >
              <div class="flex-1">
                <blockquote class="relative pl-8 border-l-4 border-coral-500">
                  <p class="text-lg md:text-2xl text-navy-900 leading-relaxed mb-8" v-html="quotes[currentQuote].text"></p>
                  <div class="flex flex-col">
                    <cite class="text-lg md:text-xl text-coral-500 font-bold not-italic">{{ quotes[currentQuote].author }}</cite>
                    <span class="text-navy-900/70">{{ quotes[currentQuote].title }}</span>
                  </div>
                </blockquote>
              </div>
              <div class="w-64 h-64 relative flex-shrink-0">
                <img 
                  :src="quotes[currentQuote].image"
                  :alt="quotes[currentQuote].author"
                  class="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </transition>
        </div>
        <!-- Right Arrow (desktop only) -->
        <button
          @click="goToNext"
          class="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-navy-800/80 hover:bg-coral-500 text-white shadow transition mx-2"
          aria-label="Next quote"
        >
          &#8594;
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import mcImage from '@/assets/images/mc.jpg'
import pierreImage from '@/assets/images/pierre.jpg'

const quotes = [
  {
    text: `Without clear legal protections, we risk losing the very tools that make bitcoin sovereign and censorship-resistant. The BRCA is critical to ensure that building or using non-custodial wallets isn't treated like a crime. If we don't act, innovation will leave the United States — and with it, our financial freedom.`,
    author: 'Matt Corallo',
    title: 'Bitcoin Core Developer',
    image: mcImage
  },
  {
    text: `Pick up the phone and call Congress, the right to self-custody is crucial for Bitcoin's continued success. Your personal engagement in the policymaking process can change the course of history!`,
    author: 'Pierre Rochard',
    title: 'CEO of The Bitcoin Bond Company',
    image: pierreImage
  }
]

const currentQuote = ref(0)
const direction = ref('right')
let intervalId = null
const isTransitioning = ref(false)

function resetInterval() {
  if (intervalId) clearInterval(intervalId)
  intervalId = setInterval(goToNext, 6000)
}

const goToNext = () => {
  if (isTransitioning.value) return
  direction.value = 'right'
  currentQuote.value = (currentQuote.value + 1) % quotes.length
  resetInterval()
  isTransitioning.value = true
}

const goToPrev = () => {
  if (isTransitioning.value) return
  direction.value = 'left'
  currentQuote.value = (currentQuote.value - 1 + quotes.length) % quotes.length
  resetInterval()
  isTransitioning.value = true
}

const transitionName = computed(() => direction.value === 'right' ? 'carousel-slide-right' : 'carousel-slide-left')

function onTransitionEnd() {
  isTransitioning.value = false
}

onMounted(() => {
  resetInterval()
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.carousel-slide-right-enter-active, .carousel-slide-right-leave-active,
.carousel-slide-left-enter-active, .carousel-slide-left-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.carousel-slide-right-enter-from {
  opacity: 0;
  transform: translateX(60px);
}
.carousel-slide-right-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}
.carousel-slide-left-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}
.carousel-slide-left-leave-to {
  opacity: 0;
  transform: translateX(60px);
}
</style> 