<!-- components/ContactModal.vue -->
<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!-- Background overlay -->
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="closeModal"></div>

    <!-- Modal panel -->
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
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
              Contact
            </h3>
            
            <!-- Representative Form -->
            <div class="rep-form">
              <h2 class="font-space-grotesk text-xl md:text-3xl text-navy-900 font-bold mb-2 md:mb-4 text-center">
                Contact your representatives:
              </h2>
              <p class="text-navy-900 text-base md:text-lg mb-4 md:mb-6 text-center">
                Tell them you support Section 109 of the CLARITY Act!
              </p>
              
              <!-- Primary Action: Zip Code -->
              <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-center justify-center mb-4 w-full">
                <input 
                  v-model="zipCode"
                  type="text" 
                  placeholder="Zip Code" 
                  class="w-full px-4 py-3 bg-white border border-navy-900/20 text-navy-900 placeholder-navy-900/50 focus:outline-none focus:border-coral-500 text-base md:text-lg rounded-lg"
                >
                <button
                  type="submit"
                  :disabled="!isValidZip || loading"
                  class="w-full bg-coral-500 text-white px-6 py-3 font-bold hover:bg-coral-400 transition-colors text-base md:text-lg flex items-center justify-center rounded-lg">
                  <span v-if="loading" class="loading-spinner mr-2"></span>
                  {{ loading ? 'Searching...' : 'Find Representatives' }}
                </button>
              </form>

              <!-- Representatives Results Container -->
              <div class="rep-results-container">
                <!-- Error Message -->
                <div v-if="error" class="text-coral-500 mb-4 fade-in">
                  {{ error }}
                </div>

                <!-- Loading Placeholder -->
                <div v-if="loading" class="space-y-6 w-full">
                  <div v-for="i in 3" :key="`skeleton-${i}`" class="bg-navy-900/5 p-6 rounded-lg animate-pulse">
                    <div class="flex flex-col md:flex-row gap-6">
                      <div class="w-32 h-32 bg-navy-900/10 rounded-lg"></div>
                      <div class="flex-1">
                        <div class="h-6 bg-navy-900/10 rounded w-1/3 mb-2"></div>
                        <div class="h-4 bg-navy-900/10 rounded w-1/2 mb-2"></div>
                        <div class="h-4 bg-navy-900/10 rounded w-3/4 mb-4"></div>
                        <div class="space-y-2">
                          <div class="h-4 bg-navy-900/10 rounded w-1/4 mb-2"></div>
                          <div class="h-4 bg-navy-900/10 rounded w-1/3 mb-4"></div>
                          <div class="h-4 bg-navy-900/10 rounded w-1/2 mt-4 mb-2"></div>
                          <div class="h-4 bg-navy-900/10 rounded w-3/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Results -->
                <transition-group 
                  name="rep-list" 
                  tag="div" 
                  class="space-y-6 w-full"
                  @before-enter="beforeEnter"
                  @enter="enter"
                >
                  <div v-if="representatives.length > 0 && !loading" key="container" class="space-y-6 w-full">
                    <div 
                      v-for="(rep, index) in representatives" 
                      :key="rep.id" 
                      class="bg-navy-900/5 p-6 rounded-lg rep-item"
                      :style="{ '--rep-index': index }"
                    >
                      <div class="flex flex-col md:flex-row gap-6">
                        <img
                          :src="rep.photoURL"
                          :alt="rep.name"
                          class="w-32 h-32 object-cover rounded-lg mx-auto md:mx-0 mb-4 md:mb-0"
                        >
                        <div class="flex-1">
                          <h3 class="text-xl font-bold mb-2 text-navy-900">{{ rep.name }}</h3>
                          <p class="text-navy-900/70 mb-2">{{ rep.party }} - {{ rep.area }}</p>
                          <p class="text-navy-900/70 mb-4">{{ rep.reason }}</p>
                          <div class="space-y-2">
                            <p class="font-bold text-coral-500">Main Office:</p>
                            <p class="text-navy-900">{{ rep.phone }}</p>
                            <div v-if="rep.field_offices && rep.field_offices.length > 0">
                              <p class="font-bold text-coral-500 mt-4 mb-2">Local Offices:</p>
                              <div v-for="(office, officeIndex) in rep.field_offices" :key="officeIndex" class="text-navy-900">
                                {{ office.city }}: {{ office.phone }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition-group>
                
                <!-- Empty State Placeholder -->
                <div 
                  v-if="!loading && representatives.length === 0 && !error && zipCodeEntered" 
                  class="text-navy-900/70 text-center py-8 fade-in"
                >
                  No representatives found for this zip code.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

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

const zipCode = ref('')
const representatives = ref([])
const error = ref('')
const loading = ref(false)
const zipCodeEntered = ref(false)

const isValidZip = computed(() => {
  return /^\d{5}$/.test(zipCode.value)
})

async function submitForm() {
  if (!isValidZip.value) return
  
  loading.value = true
  error.value = ''
  representatives.value = []
  zipCodeEntered.value = true
  
  await findRepresentatives()
  
  loading.value = false
}

async function findRepresentatives() {
  if (!isValidZip.value) {
    error.value = 'Please enter a valid 5-digit zip code'
    return
  }

  error.value = ''
  try {
    const response = await fetch(`https://saveourwallets.org/rep-lookup/${zipCode.value}`)
    const data = await response.json()

    if (data.error) {
      error.value = data.error
      representatives.value = []
      return
    }

    representatives.value = data.representatives || []
  } catch (e) {
    error.value = 'An error occurred while fetching representatives. Please try again.'
    representatives.value = []
  }
}

// Custom enter animation for staggered reveal
const beforeEnter = (el) => {
  el.style.opacity = 0
}

const enter = (el, done) => {
  const delay = 150  // Base delay
  
  setTimeout(() => {
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    el.style.opacity = 1
    done()
  }, delay)
}
</script>

<style scoped>
.rep-results-container {
  min-height: 100px;
  position: relative;
  transition: height 0.5s ease-out;
  overflow: hidden;
}

.rep-list-enter-active,
.rep-list-leave-active {
  transition: all 0.5s ease-out;
}

.rep-list-enter-from,
.rep-list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.rep-item {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  animation: rep-item-reveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: calc(var(--rep-index) * 150ms);
  opacity: 0;
  transform: translateY(20px);
}

@keyframes rep-item-reveal {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.loading-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Animation for loading placeholder */
@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.3; }
}

.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}
</style> 