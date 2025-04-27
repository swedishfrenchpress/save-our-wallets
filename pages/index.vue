<!-- pages/index.vue -->
<template>
  <main class="min-h-screen bg-navy-900 text-white">
    <!-- Navigation Bar -->
    <nav class="sticky top-0 z-50 bg-navy-900/80 backdrop-blur-lg border-b border-white/20 px-4 shadow-lg">
      <div class="max-w-6xl mx-auto h-20 md:h-32 flex items-center justify-between">
        <div class="font-bold text-white text-2xl tracking-tight">
          <img src="@/assets/images/sow-logo.svg" alt="Save Our Wallets" class="w-[75px] h-[75px] md:w-[112px] md:h-[112px]">
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-12">
          <a 
            href="#why-matters" 
            class="text-white font-bold text-lg uppercase tracking-wider hover:text-coral-500 transition-all duration-300 relative group"
          >
            Why
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-coral-500 transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a 
            href="#what-happening" 
            class="text-white font-bold text-lg uppercase tracking-wider hover:text-coral-500 transition-all duration-300 relative group"
          >
            What
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-coral-500 transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a 
            href="#take-action" 
            class="bg-coral-500 text-white px-8 py-3 rounded-lg font-bold text-lg uppercase tracking-wider hover:bg-coral-400 hover:transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
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
    <div class="relative h-screen">
      <!-- Background image with enhanced gradient overlay -->
      <div class="absolute inset-0 bg-[url('@/assets/images/save-our-wallets.png')] bg-cover bg-center">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/80 to-navy-900"></div>
      </div>

      <!-- Hero content -->
      <div class="relative flex flex-col items-center text-center px-4 pt-[20vh] md:pt-[45vh]">
        <h1 class="font-space-grotesk font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl uppercase text-white">
          Protect your right to transact freely.
        </h1>
        
        <div class="mt-4 md:mt-12">
          <h2 class="bg-coral-500 text-white px-6 py-4 rounded-lg font-space-grotesk font-semibold text-xl sm:text-2xl md:text-3xl uppercase max-w-3xl mx-auto">
            Support H.R. 1747: The Blockchain Regulatory Certainty Act
          </h2>
        </div>
      </div>

      <!-- Zip Code Section - now inside the hero, positioned in the gradient area -->
      <div class="absolute md:bottom-12 bottom-4 left-0 right-0 px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="font-space-grotesk text-xl md:text-3xl text-white font-bold mb-2 md:mb-4">
            Contact your representatives:
          </h2>
          <p class="text-white text-base md:text-xl mb-4 md:mb-8">
            Tell them your peer-to-peer transaction rights matter!
          </p>
          
          <div class="bg-navy-800/30 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg">
            <p class="text-white text-sm md:text-base mb-4 md:mb-6">
              Enter your zip code to find your representatives
            </p>
            
            <div class="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-center mb-3 md:mb-4">
              <input 
                type="text" 
                placeholder="Zip Code" 
                class="w-full md:w-64 px-4 py-2 md:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-coral-500 text-base md:text-lg"
              >
              <button class="w-full md:w-auto bg-coral-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold hover:bg-coral-400 transition-colors text-base md:text-lg">
                Find Representatives
              </button>
            </div>
            
            <p class="text-white/70 text-xs md:text-sm">
              Your information will only be used to look up your congressional representatives.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Why This Bill Matters Section -->
    <section id="why-matters" class="py-20 bg-white px-4">
      <div class="max-w-6xl mx-auto">
        <div class="bg-navy-900 inline-block px-6 py-3 mb-12">
          <h2 class="font-space-grotesk font-bold text-3xl uppercase">
            WHY H.R. 1747 MATTERS
          </h2>
        </div>

        <!-- Three Feature Boxes Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Box 1 -->
          <div class="bg-navy-900/5 p-8 relative">
            <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
            <div class="text-coral-500 text-6xl font-bold mb-4">01</div>
            <h3 class="text-2xl font-bold text-navy-900 mb-4">Wallet Freedom</h3>
            <p class="text-navy-900/70 text-2xl">
              Ensures your favorite wallet stays available by shielding service providers who don't control user assets from overburdensome regulations they can't comply with anyway.
            </p>
          </div>

          <!-- Box 2 -->
          <div class="bg-navy-900/5 p-8 relative">
            <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
            <div class="text-coral-500 text-6xl font-bold mb-4">02</div>
            <h3 class="text-2xl font-bold text-navy-900 mb-4">Developer Protection Rights</h3>
            <p class="text-navy-900/70 text-2xl">
              Removes unnecessary licensing cost while maintaining appropriate oversight where needed.
            </p>
          </div>

          <!-- Box 3 -->
          <div class="bg-navy-900/5 p-8 relative">
            <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
            <div class="text-coral-500 text-6xl font-bold mb-4">03</div>
            <h3 class="text-2xl font-bold text-navy-900 mb-4">Balanced Approach</h3>
            <p class="text-navy-900/70 text-2xl">
              Ensures that America stays competitive while protecting consumers.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Matt Corallo Quote Section -->
    <section class="py-20 bg-white px-4">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row items-start gap-12">
          <div class="flex-1">
            <blockquote class="relative pl-8 border-l-4 border-coral-500">
              <p class="text-xl md:text-2xl text-navy-900 leading-relaxed mb-8">
                Without clear legal protections, we risk losing the very tools that make bitcoin sovereign and censorship-resistant. H.R. 1747 is critical to ensure that building or using non-custodial wallets isn't treated like a crime. If we don't act, innovation will leave the United States — and with it, our financial freedom.
              </p>
              <div class="flex flex-col">
                <cite class="text-xl text-coral-500 font-bold not-italic">Matt Corallo</cite>
                <span class="text-navy-900/70">Bitcoin Core Developer</span>
              </div>
            </blockquote>
          </div>

          <div class="w-64 h-64 relative flex-shrink-0">
            <img 
              src="@/assets/images/mc.jpg"
              alt="Matt Corallo" 
              class="w-full h-full object-cover rounded-lg"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- What Is Happening Section -->
    <section id="what-happening" class="py-20 bg-navy-900 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="bg-coral-500 inline-block px-6 py-3 mb-12">
          <h2 class="font-space-grotesk font-bold text-3xl uppercase">
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
                <p class="text-2xl text-white leading-relaxed">
                  The leading market structure bills currently moving through congress could prohibit US persons from utilizing non-custodial wallets and service providers.
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
                <p class="text-2xl text-white leading-relaxed">
                  The long-standing view of FinCEN (the regulator for money transmission) has been that wallets and services that do not have control over user assets are not "money transmitters" (as they cannot transmit what they do not control). The Biden DOJ decided to charge developers for this anyway.
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
                <p class="text-2xl text-white leading-relaxed">
                  This has led to some wallets and services banning United States customers, and created a chilling effect which has prevented many new wallets from coming to market.
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
                <p class="text-2xl text-white leading-relaxed">
                  If we don't fix the law, this will push yet more wallets and Americans towards custodians that censor transactions they don't like and expose many more Americans to rug-pulls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="py-20 bg-navy-900 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row items-start gap-12">
          <div class="flex-1">
            <blockquote class="relative pl-8 border-l-4 border-coral-500">
              <p class="text-xl md:text-2xl text-white leading-relaxed mb-8">
                For too long, federal regulators and lawmakers have jammed the blockchain ecosystem into statutory definitions that just do not make sense. It should be simple: 
                <span class="text-coral-500 font-semibold">If you don't custody consumer funds, you aren't a money transmitter.</span> 
                My bill provides that necessary confirmation for the blockchain community.
              </p>
              <div class="flex flex-col">
                <cite class="text-xl text-coral-500 font-bold not-italic">Tom Emmer</cite>
                <span class="text-white/70">Congressman (House Majority Whip)</span>
              </div>
            </blockquote>
          </div>

          <div class="w-64 h-64 relative flex-shrink-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/Tom_Emmer_Congressional_Photo_2.jpg"
              alt="Congressman Tom Emmer"
              class="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-navy-900 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- What The Bill Does Section -->
    <section class="py-20 bg-navy-900 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="bg-coral-500 inline-block px-6 py-3 mb-12">
          <h2 class="font-space-grotesk font-bold text-3xl uppercase">
            WHAT THE BILL DOES
          </h2>
        </div>

        <!-- Intro text - full width to match boxes -->
        <div class="mb-12">
          <p class="text-2xl text-white leading-relaxed">
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
                <div class="text-4xl font-bold text-coral-500/20 w-20">01</div>
                <p class="text-2xl text-white font-medium flex-1">Don't control consumer funds</p>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="group bg-navy-800 rounded-lg overflow-hidden transition-all hover:bg-navy-700">
            <div class="relative flex items-center">
              <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
              <div class="absolute top-0 left-0 w-16 h-1 bg-coral-500"></div>
              <div class="p-8 pl-12 flex items-center w-full">
                <div class="text-4xl font-bold text-coral-500/20 w-20">02</div>
                <p class="text-2xl text-white font-medium flex-1">Only provide software or computing services</p>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="group bg-navy-800 rounded-lg overflow-hidden transition-all hover:bg-navy-700">
            <div class="relative flex items-center">
              <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
              <div class="absolute top-0 left-0 w-16 h-1 bg-coral-500"></div>
              <div class="p-8 pl-12 flex items-center w-full">
                <div class="text-4xl font-bold text-coral-500/20 w-20">03</div>
                <p class="text-2xl text-white font-medium flex-1">Don't act as financial intermediaries</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Conclusion text - full width to match boxes -->
        <div>
          <p class="text-2xl text-white leading-relaxed">
            This clarity helps encourage innovation while ensuring appropriate oversight of actual financial services.
          </p>
        </div>
      </div>
    </section>

    <!-- Take Action Section -->
    <section id="take-action" class="py-20 bg-white px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="mb-12">
          <div class="bg-navy-900 inline-block px-6 py-3 mb-8">
            <h2 class="font-space-grotesk font-bold text-3xl uppercase">
              TAKE ACTION NOW
            </h2>
          </div>
          <p class="text-xl md:text-2xl text-navy-900/80 leading-relaxed">
            Your voice matters! Tell your representatives why clear blockchain regulation is important for American innovation.
          </p>
        </div>

        <!-- Action Cards -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Updates Card - Navy -->
          <div class="bg-navy-900 rounded-xl p-8 flex flex-col group hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
            <div class="w-16 h-16 mb-6 text-coral-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>

            <div class="flex flex-col items-start">
              <h3 class="text-2xl font-bold text-white mb-2 relative group-hover:text-navy-900 transition-colors duration-300 ease-in-out">
                Updates
                <div class="absolute bottom-0 left-0 right-0 h-1 bg-coral-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></div>
              </h3>
            </div>
            <p class="text-white/70 text-lg mt-6 group-hover:text-navy-900/70 transition-colors duration-300 ease-in-out">
              Get the latest updates on this legislation and how you can help.
            </p>
          </div>

          <!-- Contact Card - Grey -->
          <div class="bg-navy-900/5 rounded-xl p-8 flex flex-col group hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
            <div class="w-16 h-16 mb-6 text-coral-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>

            <div class="flex flex-col items-start">
              <h3 class="text-2xl font-bold text-navy-900 mb-2 relative transition-colors duration-300 ease-in-out">
                Contact
                <div class="absolute bottom-0 left-0 right-0 h-1 bg-coral-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></div>
              </h3>
            </div>
            <p class="text-navy-900/70 text-lg mt-6 transition-colors duration-300 ease-in-out">
              Find and contact your congressional representatives.
            </p>
          </div>

          <!-- Facts Card - Coral -->
          <div class="bg-coral-500 rounded-xl p-8 flex flex-col group hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
            <div class="w-16 h-16 mb-6 text-white transition-colors duration-300 ease-in-out group-hover:text-coral-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>

            <div class="flex flex-col items-start">
              <h3 class="text-2xl font-bold text-navy-900 mb-2 relative transition-colors duration-300 ease-in-out">
                Facts
                <div class="absolute bottom-0 left-0 right-0 h-1 bg-coral-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></div>
              </h3>
            </div>
            <p class="text-navy-900/70 text-lg mt-6 transition-colors duration-300 ease-in-out">
              Download our fact sheet about the Blockchain Regulatory Certainty Act.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-4 bg-white border-t border-navy-900/10">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <!-- Left Side -->
        <div class="mb-6 md:mb-0">
          <div class="font-bold text-navy-900 flex items-center gap-4">
            <img src="@/assets/images/sow-logo.svg" alt="Save Our Wallets" class="w-[75px] h-[75px]">
            <div>
              SAVE OUR WALLETS
              <br>
              <span class="font-mono font-normal">Block Height: 894116</span>
              <br>
              <span class="font-mono font-normal">📍On-Chain</span>
            </div>
          </div>
        </div>

        <!-- Right Side -->
        <div class="text-right">
          <div class="text-navy-900 font-bold">
            DESIGN BY <a href="https://bitcoin.design/" class="hover:text-coral-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer">BITCOIN DESIGN</a> COMMUNITY
          </div>
          <div class="text-navy-900/70 font-sans italic">
            (<a href="https://bitcoindesignfoundation.org/" class="hover:text-coral-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer">Support Bitcoin Design</a>)
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup>
const isMenuOpen = ref(false)

// Optional: Add scroll lock when menu is open
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
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
</style>