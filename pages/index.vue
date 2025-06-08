<!-- pages/index.vue -->
<template>
  <main class="min-h-screen bg-navy-900 text-white">
    <!-- Navigation Bar -->
    <nav :class="[
      'sticky top-0 z-50 bg-navy-900/80 backdrop-blur-lg border-b border-white/20 px-4 shadow-lg transition-all duration-300',
      isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-32'
    ]">
      <div class="max-w-6xl mx-auto h-full flex items-center justify-between">
        <div class="font-bold text-white text-2xl tracking-tight">
          <img src="@/assets/images/sow-logo.svg" alt="Save Our Wallets" :class="[
            'transition-all duration-300',
            isScrolled ? 'w-[50px] h-[50px] md:w-[75px] md:h-[75px]' : 'w-[75px] h-[75px] md:w-[112px] md:h-[112px]'
          ]">
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-12">
          <a 
            href="#why-matters" 
            class="text-white font-bold uppercase tracking-wider hover:text-coral-500 transition-all duration-300 relative group"
            :class="isScrolled ? 'text-base' : 'text-lg'"
          >
            Why
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-coral-500 transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a 
            href="#what-happening" 
            class="text-white font-bold uppercase tracking-wider hover:text-coral-500 transition-all duration-300 relative group"
            :class="isScrolled ? 'text-base' : 'text-lg'"
          >
            What
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-coral-500 transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a 
            href="#take-action" 
            class="bg-coral-500 text-white font-bold uppercase tracking-wider hover:bg-coral-400 hover:transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
            :class="isScrolled ? 'px-6 py-2 text-base' : 'px-8 py-3 text-lg'"
          >
            Take Action
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen" 
          class="md:hidden p-2 text-white"
        >
          <svg 
            v-if="!isMenuOpen"
            class="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg 
            v-else
            class="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu with snappier transitions -->
      <transition
        enter-active-class="transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
        enter-from-class="opacity-0 transform -translate-y-4"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-4"
      >
        <div 
          v-if="isMenuOpen" 
          class="md:hidden fixed top-[5rem] left-0 right-0 bg-navy-900/95 backdrop-blur-lg border-b border-white/20 shadow-lg"
        >
          <div 
            class="flex flex-col space-y-6 p-8"
            :class="isMenuOpen && 'animate-menuItems'"
          >
            <a 
              href="#why-matters" 
              class="text-white font-bold text-xl uppercase tracking-wider hover:text-coral-500 transition-all duration-150"
              @click="isMenuOpen = false"
            >
              Why
            </a>
            <a 
              href="#what-happening" 
              class="text-white font-bold text-xl uppercase tracking-wider hover:text-coral-500 transition-all duration-150"
              @click="isMenuOpen = false"
            >
              What
            </a>
            <a 
              href="#take-action" 
              class="bg-coral-500 text-white px-6 py-3 rounded-lg font-bold text-xl uppercase tracking-wider hover:bg-coral-400 transition-all duration-150 text-center"
              @click="isMenuOpen = false"
            >
              Take Action
            </a>
          </div>
        </div>
      </transition>
    </nav>

    <!-- Hero Section -->
    <div class="relative bg-navy-900 pt-[25vh] md:pt-0 scroll-reveal">
      <!-- Extended background for form overflow -->
      <div class="absolute inset-x-0 top-0 h-[1200px] md:h-[1400px] bg-navy-900 -z-10"></div>
      
      <!-- Desktop Hero Image (with fixed height) -->
      <div class="absolute inset-x-0 top-0 h-[850px] md:h-[1000px] bg-[url('@/assets/images/hero-3.jpg')] bg-cover bg-center hidden md:block">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/80 to-navy-900"></div>
      </div>
      <!-- Mobile Hero Image (with fixed height) -->
      <div class="absolute inset-x-0 top-0 h-[850px] bg-[url('@/assets/images/sow-mobile-2.jpg')] bg-contain bg-tile block md:hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/80 to-navy-900"></div>
      </div>
      <div class="relative flex flex-col items-center justify-start py-10 px-4 md:pt-[400px] min-h-[850px] md:min-h-[1000px]">
        <div class="max-w-6xl mx-auto w-full">
          <div class="flex flex-col items-center space-y-8 md:space-y-12 text-center">
            <h1 class="font-space-grotesk font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase text-white">
              Protect your right to transact freely.
            </h1>
            
            <h2 class="bg-coral-500 text-white px-6 py-4 font-space-grotesk font-semibold text-xl sm:text-2xl md:text-3xl uppercase w-full text-center">
              Support The Blockchain Regulatory Certainty Act
            </h2>

            <!-- Forms Section -->
            <div class="w-full max-w-2xl mx-auto mt-8 md:mt-16 relative z-10 space-y-6">
              <!-- Representative Form Section -->
              <div class="bg-navy-800/30 backdrop-blur-sm p-4 md:p-8 shadow-lg rounded-lg">
                <RepForm />
              </div>
              
              <!-- Email Form Section -->
              <div class="bg-navy-800/30 backdrop-blur-sm p-4 md:p-8 shadow-lg rounded-lg">
                <EmailForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Why This Bill Matters Section -->
    <section id="why-matters" class="py-20 bg-white px-4 scroll-reveal">
      <div class="max-w-6xl mx-auto">
        <div class="bg-navy-900 inline-block px-6 py-3 mb-12">
          <h2 class="font-space-grotesk font-bold text-2xl md:text-3xl uppercase">
            WHY THE BLOCKCHAIN REGULATORY CERTAINTY ACT MATTERS
          </h2>
        </div>

        <!-- Three Feature Boxes Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Box 1 -->
          <div class="bg-navy-900/5 p-8 relative">
            <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
            <div class="text-coral-500 text-4xl md:text-6xl font-bold mb-4">01</div>
            <h3 class="text-xl md:text-2xl font-bold text-navy-900 mb-4">Ensures Wallet Freedom</h3>
            <p class="text-navy-900/70 text-lg md:text-2xl">
              The BRCA Guarantees that your favorite wallet stays available by shielding service providers who don't control user assets from overburdensome regulations they can't comply with anyway.
            </p>
          </div>

          <!-- Box 2 -->
          <div class="bg-navy-900/5 p-8 relative">
            <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
            <div class="text-coral-500 text-4xl md:text-6xl font-bold mb-4">02</div>
            <h3 class="text-xl md:text-2xl font-bold text-navy-900 mb-4">Protects Developer Rights</h3>
            <p class="text-navy-900/70 text-lg md:text-2xl">
              The bill removes unnecessary licensing cost while maintaining appropriate oversight where needed.
            </p>
          </div>

          <!-- Box 3 -->
          <div class="bg-navy-900/5 p-8 relative">
            <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
            <div class="text-coral-500 text-4xl md:text-6xl font-bold mb-4">03</div>
            <h3 class="text-xl md:text-2xl font-bold text-navy-900 mb-4">Balanced Approach</h3>
            <p class="text-navy-900/70 text-lg md:text-2xl">
              Keeps America competitive while protecting consumers.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Developer Quotes Section -->
    <DeveloperCarousel />

    <!-- What Is Happening Section -->
    <section id="what-happening" class="py-20 bg-navy-900 px-4 scroll-reveal">
      <div class="max-w-6xl mx-auto">
        <div class="bg-coral-500 inline-block px-6 py-3 mb-12">
          <h2 class="font-space-grotesk font-bold text-2xl md:text-3xl uppercase">
            WHAT IS HAPPENING
          </h2>
        </div>

        <div class="space-y-8">
          <!-- Card 1 -->
          <div class="group bg-navy-800 rounded-lg overflow-hidden transition-all hover:bg-navy-700">
            <div class="relative">
              <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
              <div class="absolute top-0 left-0 w-16 h-1 bg-coral-500"></div>
              <div class="p-8 pl-12">
                <p class="text-lg md:text-2xl text-white leading-relaxed">
                  The leading market structure bills moving through Congress could leave US persons prohibited from utilizing non-custodial wallets and service providers.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="group bg-navy-800 rounded-lg overflow-hidden transition-all hover:bg-navy-700">
            <div class="relative">
              <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
              <div class="absolute top-0 left-0 w-16 h-1 bg-coral-500"></div>
              <div class="p-8 pl-12">
                <p class="text-lg md:text-2xl text-white leading-relaxed">
                  The long-standing view of FinCEN (the regulator for money transmission) has been that wallets and services that do not have control over user assets are not "money transmitters" since they cannot transmit what they do not control. The Biden DOJ decided to charge developers for this anyway.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="group bg-navy-800 rounded-lg overflow-hidden transition-all hover:bg-navy-700">
            <div class="relative">
              <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
              <div class="absolute top-0 left-0 w-16 h-1 bg-coral-500"></div>
              <div class="p-8 pl-12">
                <p class="text-lg md:text-2xl text-white leading-relaxed">
                  This has led to some wallets and services banning United States customers creating a chilling effect that has prevented many new wallets from coming to market.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="group bg-navy-800 rounded-lg overflow-hidden transition-all hover:bg-navy-700">
            <div class="relative">
              <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
              <div class="absolute top-0 left-0 w-16 h-1 bg-coral-500"></div>
              <div class="p-8 pl-12">
                <p class="text-lg md:text-2xl text-white leading-relaxed">
                  If we don't fix the law, more wallets and Americans will be pushed towards custodians in poorly-regulated jurisdictions who censor transactions they don't like, exposing many more Americans to rug-pulls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <QuoteCarousel />

    <!-- What The Bill Does Section -->
    <section class="py-20 bg-navy-900 px-4 scroll-reveal">
      <div class="max-w-6xl mx-auto">
        <div class="bg-coral-500 inline-block px-6 py-3 mb-12">
          <h2 class="font-space-grotesk font-bold text-2xl md:text-3xl uppercase">
            WHAT THE BILL DOES
          </h2>
        </div>

        <!-- Intro text - full width to match boxes -->
        <div class="mb-12">
          <p class="text-lg md:text-2xl text-white leading-relaxed">
            The Blockchain Regulatory Certainty Act creates a safe harbor from licensing and registration requirements for blockchain developers and service providers who:
          </p>
        </div>

        <!-- Cards -->
        <div class="space-y-6 mb-12">
          <!-- Card 1 -->
          <div class="group bg-navy-800 rounded-lg overflow-hidden transition-all hover:bg-navy-700">
            <div class="relative flex items-center">
              <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
              <div class="absolute top-0 left-0 w-16 h-1 bg-coral-500"></div>
              <div class="p-8 pl-12 flex items-center w-full">
                <div class="text-3xl md:text-4xl font-bold text-coral-500/20 w-20">01</div>
                <p class="text-lg md:text-2xl text-white font-medium flex-1">Don't control consumer funds.</p>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="group bg-navy-800 rounded-lg overflow-hidden transition-all hover:bg-navy-700">
            <div class="relative flex items-center">
              <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
              <div class="absolute top-0 left-0 w-16 h-1 bg-coral-500"></div>
              <div class="p-8 pl-12 flex items-center w-full">
                <div class="text-3xl md:text-4xl font-bold text-coral-500/20 w-20">02</div>
                <p class="text-lg md:text-2xl text-white font-medium flex-1">Only provide software or computing services.</p>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="group bg-navy-800 rounded-lg overflow-hidden transition-all hover:bg-navy-700">
            <div class="relative flex items-center">
              <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
              <div class="absolute top-0 left-0 w-16 h-1 bg-coral-500"></div>
              <div class="p-8 pl-12 flex items-center w-full">
                <div class="text-3xl md:text-4xl font-bold text-coral-500/20 w-20">03</div>
                <p class="text-lg md:text-2xl text-white font-medium flex-1">Don't act as financial intermediaries.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Conclusion text - full width to match boxes -->
        <div>
          <p class="text-lg md:text-2xl text-white leading-relaxed">
            This clarity helps encourage innovation while ensuring appropriate oversight of actual financial services. This bill is short and direct, you can read the full bill text for yourself.
          </p>
          <!-- Bill Viewing Options -->
          <div class="mt-8 space-y-4">
            <!-- Embedded Bill Viewer -->
            <div class="bg-navy-800/50 rounded-lg overflow-hidden">
              <div class="p-4 border-b border-white/20 flex justify-between items-center">
                <h3 class="text-white font-bold">H.R. 1747, Blockchain Regulatory Certainty Act</h3>
                <a
                  href="https://emmer.house.gov/_cache/files/3/9/391fb470-d4a5-4eef-aedd-df1626dfb21a/BDDB1A4E71AE7CE1CBFABC4AB43BFCB2B087D8654CEACBCF0BC3EF5792D67A7A.brca-119.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-coral-500 hover:text-coral-400 text-sm flex items-center gap-1"
                >
                  Open in new tab
                  <span class="arrow-animate">↗</span>
                </a>
              </div>
              <iframe
                src="/brca-119.pdf"
                class="w-full h-[600px] bg-white"
                title="Blockchain Regulatory Certainty Act"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Take Action Section -->
    <section id="take-action" class="py-20 bg-white px-4 scroll-reveal">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="mb-12">
          <div class="bg-navy-900 inline-block px-6 py-3 mb-8">
            <h2 class="font-space-grotesk font-bold text-2xl md:text-3xl uppercase">
              TAKE ACTION NOW
            </h2>
          </div>
          <p class="text-lg md:text-2xl text-navy-900/80 leading-relaxed">
            Your voice matters! Tell your representatives why clear, fair blockchain regulation is necessary to continue innovating in this increasingly important space. 
          </p>
        </div>

        <!-- Action Cards -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Updates Card - Navy -->
          <div 
            class="bg-navy-900 rounded-xl p-8 flex flex-col group hover:bg-white transition-all duration-300 ease-in-out cursor-pointer"
            @click="isUpdatesModalOpen = true"
          >
            <div class="w-16 h-16 mb-6">
              <img 
                src="@/assets/images/updates.png" 
                alt="Updates" 
                class="w-full h-full object-contain"
              >
            </div>

            <div class="flex flex-col items-start">
              <h3 class="text-3xl font-bold text-white mb-2 relative group-hover:text-navy-900 transition-colors duration-300 ease-in-out">
                Updates
                <div class="absolute bottom-0 left-0 right-0 h-1 bg-coral-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></div>
              </h3>
            </div>
            <p class="text-white/70 text-lg font-medium mt-6 group-hover:text-navy-900/70 transition-colors duration-300 ease-in-out">
              Get the latest updates about this legislation and how you can help support it.
            </p>
          </div>

          <!-- Contact Card - Grey -->
          <div 
            class="bg-navy-900/5 rounded-xl p-8 flex flex-col group hover:bg-white transition-all duration-300 ease-in-out cursor-pointer"
            @click="isContactModalOpen = true"
          >
            <div class="w-20 h-20 mb-6">
              <img 
                src="@/assets/images/contact.png" 
                alt="Contact" 
                class="w-full h-full object-contain"
              >
            </div>

            <div class="flex flex-col items-start">
              <h3 class="text-3xl font-bold text-navy-900 mb-2 relative transition-colors duration-300 ease-in-out">
                Contact
                <div class="absolute bottom-0 left-0 right-0 h-1 bg-coral-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></div>
              </h3>
            </div>
            <p class="text-navy-900/70 text-lg font-medium mt-6 transition-colors duration-300 ease-in-out">
              Contact your congressional representatives and tell them why you support the Blockchain Regulatory Certainty Act.
            </p>
          </div>

          <!-- Share Card - Coral -->
          <div class="bg-coral-500 rounded-xl p-8 flex flex-col group hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
            <div class="w-20 h-20 mb-6">
              <img 
                src="@/assets/images/share.png" 
                alt="Share" 
                class="w-full h-full object-contain"
              >
            </div>

            <div class="flex flex-col items-start">
              <h3 class="text-3xl font-bold text-navy-900 mb-2 relative transition-colors duration-300 ease-in-out">
                Share
                <div class="absolute bottom-0 left-0 right-0 h-1 bg-coral-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></div>
              </h3>
            </div>
            <p class="text-navy-900/70 text-lg font-medium mt-6 transition-colors duration-300 ease-in-out">
              Share the importance of sensible blockchain regulation with your friends and colleagues and ask them to reach out.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Add Modal Components -->
    <UpdatesModal 
      :is-open="isUpdatesModalOpen"
      @close="isUpdatesModalOpen = false"
    />
    <ContactModal 
      :is-open="isContactModalOpen"
      @close="isContactModalOpen = false"
    />

    <!-- Footer -->
    <footer class="py-8 px-4 bg-white border-t border-navy-900/10">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <!-- Left Side -->
        <div class="mb-6 md:mb-0 flex-1">
          <div class="font-bold text-navy-900 flex items-center gap-4">
            <img src="@/assets/images/sow-logo.svg" alt="Save Our Wallets" class="w-[75px] h-[75px]">
            <div>
              SAVE OUR WALLETS
              <br>
               <span class="font-mono font-normal">📍On-Chain</span>
              <br>
              <span class="font-mono font-normal">2025</span>
            </div>
          </div>
        </div>

        <!-- Right Side -->
        <div class="w-full md:w-auto flex flex-row items-center gap-4 md:justify-end md:flex-row-reverse flex-shrink-0">
          <a href="https://bitcoin.design/" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity duration-300 flex-shrink-0">
            <div class="w-[75px] h-[75px] flex items-center justify-center">
              <img src="@/assets/images/bdc-seal.svg" alt="Bitcoin Design Community" class="w-12 h-12">
            </div>
          </a>
          <div class="flex-1 text-left md:text-right">
            <div class="text-navy-900 font-bold">
              DESIGNED BY <a href="https://bitcoin.design/" class="hover:text-coral-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer">BITCOIN DESIGN COMMUNITY</a>
            </div>
            <div class="text-navy-900/70 font-sedgwick text-lg">
              (<a href="https://bitcoindesignfoundation.org/" class="hover:text-coral-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer">Support Bitcoin Design</a>)
            </div>
          </div>
        </div>
      </div>
    </footer>
  <div class="g-recaptcha"
      data-sitekey="6LeuOkIrAAAAAAUh5HJyIw13B2YbsjyLCccDrxlF"
      data-callback="recaptchaApproved"
      data-size="invisible">
  </div>
  </main>
</template>

<script setup>
import QuoteCarousel from '@/components/QuoteCarousel.vue'
import DeveloperCarousel from '@/components/DeveloperCarousel.vue'
import UpdatesModal from '@/components/UpdatesModal.vue'
import ContactModal from '@/components/ContactModal.vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isUpdatesModalOpen = ref(false)
const isContactModalOpen = ref(false)

// Handle scroll events
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll)
  
  // Initial check
  handleScroll()

  // Load reCAPTCHA script
  const script = document.createElement('script')
  script.src = 'https://www.google.com/recaptcha/api.js'
  script.async = true
  script.defer = true
  document.head.appendChild(script)

  // Simple scroll reveal functionality
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '-50px'
  })

  // Observe all elements with scroll-reveal class
  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el)
  })
})

// Clean up event listeners when component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  const script = document.querySelector('script[src="https://www.google.com/recaptcha/api.js"]')
  if (script) {
    script.remove()
  }
})
</script>

<style>
/* Add custom colors to your tailwind.config.js instead of here */

/* Add these keyframes and animation classes to your CSS */
@keyframes menuItems {
  0% {
    opacity: 0;
    transform: translateY(-2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-menuItems {
  animation: menuItems 0.15s ease-out 0.05s forwards;
}

/* Scroll reveal animations */
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Add font family */
.font-sedgwick {
  font-family: 'Sedgwick Ave', cursive;
}

.animated-link .arrow-animate {
  display: inline-block;
  transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
}

.animated-link:hover .arrow-animate {
  transform: translateX(6px) scale(1.1);
}
</style>
