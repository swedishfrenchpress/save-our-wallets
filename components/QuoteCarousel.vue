<template>
  <section class="py-20 bg-navy-900 px-4 scroll-reveal">
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
          <transition :name="transitionName" mode="out-in">
            <div
              class="flex flex-col md:flex-row items-center gap-8 w-full"
              :key="quotes[currentQuote].author"
              style="min-height: 260px;"
            >
              <div class="flex-1">
                <blockquote class="relative pl-8 border-l-4 border-coral-500">
                  <p class="text-lg md:text-2xl text-white leading-relaxed mb-8" v-html="quotes[currentQuote].text"></p>
                  <div class="flex flex-col">
                    <cite class="text-lg md:text-xl text-coral-500 font-bold not-italic">{{ quotes[currentQuote].author }}</cite>
                    <span class="text-white/70">{{ quotes[currentQuote].title }}</span>
                  </div>
                </blockquote>
              </div>
              <div class="w-48 h-48 relative flex-shrink-0 mx-auto md:mx-0">
                <img 
                  :src="quotes[currentQuote].image"
                  :alt="quotes[currentQuote].author"
                  class="w-full h-full object-cover rounded-lg shadow-lg"
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

const quotes = [
  {
    text: `For too long, federal regulators and lawmakers have jammed the blockchain ecosystem into statutory definitions that just do not make sense. It should be simple: <span class="text-coral-500 font-semibold">If you don't custody consumer funds, you aren't a money transmitter.</span> My bill provides that necessary confirmation for the blockchain community.`,
    author: 'Tom Emmer',
    title: 'Congressman (House Majority Whip)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Tom_Emmer_Congressional_Photo_2.jpg'
  },
  {
    text: `The Blockchain Regulatory Certainty Act reflects a thoughtful, bipartisan effort to get digital asset policy right...The United States should be the global home for responsible innovation, not a place where developers are punished for building open-source software or experimenting with new technologies...`,
    author: 'Ritchie Torres',
    title: 'Congressman (Bronx, New York)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Ritchie_Torres_117th_U.S_Congress.jpg/1200px-Ritchie_Torres_117th_U.S_Congress.jpg'
  }
]

const currentQuote = ref(0)
const direction = ref('right')
let intervalId = null

const goToNext = () => {
  direction.value = 'right'
  currentQuote.value = (currentQuote.value + 1) % quotes.length
}

const goToPrev = () => {
  direction.value = 'left'
  currentQuote.value = (currentQuote.value - 1 + quotes.length) % quotes.length
}

const transitionName = computed(() => direction.value === 'right' ? 'carousel-slide-right' : 'carousel-slide-left')

onMounted(() => {
  intervalId = setInterval(() => {
    goToNext()
  }, 6000)
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
