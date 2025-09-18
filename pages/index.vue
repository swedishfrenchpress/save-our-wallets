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
      
      <!-- Hero Background Image with Navy Overlay -->
      <div class="absolute inset-x-0 top-0 h-[850px] md:h-[1000px] bg-[url('@/assets/images/satoshi-needs-you.png')] bg-cover bg-center">
        <div class="absolute inset-0 bg-navy-900/60"></div>
      </div>
      
      <div class="relative flex flex-col items-center justify-center py-10 px-4 min-h-[850px] md:min-h-[1000px]">
        <div class="max-w-6xl mx-auto w-full">
          <div class="flex flex-col items-center space-y-8 md:space-y-12 text-center">
            <!-- Updated Hero Title -->
            <h1 class="font-space-grotesk font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase text-white">
              SATOSHI NEEDS YOU
            </h1>
            
            <!-- Updated Hero Subtitle -->
            <h2 class="font-space-grotesk font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-coral-500">
              TO SAVE OUR WALLETS
            </h2>

            <!-- Hero Description -->
            <p class="text-lg md:text-xl text-white/90 max-w-4xl leading-relaxed">
              Protect your right to transact freely. Support Section 109 of the CLARITY Act to ensure wallet freedom and protect developer rights.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12">
              <button 
                @click="scrollToSection('contact-representatives')"
                class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 md:px-8 md:py-4 font-bold text-lg uppercase tracking-wider hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50"
              >
                Find Your Representatives
              </button>
              <button 
                @click="scrollToSection('stay-updated')"
                class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 md:px-8 md:py-4 font-bold text-lg uppercase tracking-wider hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50"
              >
                Stay Updated
              </button>
              <button 
                @click="scrollToSection('share-campaign')"
                class="bg-coral-500 text-white px-6 py-3 md:px-8 md:py-4 font-bold text-lg uppercase tracking-wider hover:bg-coral-400 transition-all duration-300 border border-coral-500 hover:border-coral-400"
              >
                Share Campaign
              </button>
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
            WHY SECTION 109 MATTERS
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
              Section 109 of the CLARITY Act guarantees that your favorite wallet stays available by shielding service providers who don't control user assets from overburdensome regulations they can't comply with anyway.
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

    <!-- What Is Happening & What The Bill Does - Combined Section -->
    <section id="what-happening" class="py-20 bg-navy-900 px-4 scroll-reveal">
      <div class="max-w-7xl mx-auto">
        <!-- Two Column Layout -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <!-- Left Column: What Is Happening -->
          <div class="space-y-8">
            <div class="bg-coral-500 inline-block px-6 py-3 mb-8">
              <h2 class="font-space-grotesk font-bold text-2xl md:text-3xl uppercase">
                What Is Happening
              </h2>
            </div>

            <div class="space-y-6">
              <!-- Card 1 -->
              <div class="group bg-navy-800 rounded-lg overflow-hidden transition-all hover:bg-navy-700">
                <div class="relative">
                  <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
                  <div class="absolute top-0 left-0 w-16 h-1 bg-coral-500"></div>
                  <div class="p-6 pl-10">
                    <p class="text-base md:text-lg text-white leading-relaxed">
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
                  <div class="p-6 pl-10">
                    <p class="text-base md:text-lg text-white leading-relaxed">
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
                  <div class="p-6 pl-10">
                    <p class="text-base md:text-lg text-white leading-relaxed">
                      This has led to some wallets and services banning United States customers creating a chilling effect that has prevented many new wallets from coming to market.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Card 4 - Final Warning -->
              <div class="group bg-navy-800 rounded-lg overflow-hidden transition-all hover:bg-navy-700 border-l-4 border-coral-500">
                <div class="relative">
                  <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
                  <div class="absolute top-0 left-0 w-16 h-1 bg-coral-500"></div>
                  <div class="p-6 pl-10">
                    <p class="text-base md:text-lg text-coral-400 font-medium leading-relaxed">
                      If we don't fix the law, more wallets and Americans will be pushed towards custodians in poorly-regulated jurisdictions who censor transactions they don't like, exposing many more Americans to rug-pulls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: What The Bill Does -->
          <div class="space-y-8">
            <div class="bg-coral-500 inline-block px-6 py-3 mb-8">
              <h2 class="font-space-grotesk font-bold text-2xl md:text-3xl uppercase">
                What The Bill Does
              </h2>
            </div>

            <!-- Intro text -->
            <div class="mb-8">
              <p class="text-base md:text-lg text-white leading-relaxed">
                Section 109 of the CLARITY Act protects from impossible licensing and registration requirements blockchain developers and service providers who:
              </p>
            </div>

            <!-- Cards -->
            <div class="space-y-4 mb-8">
              <!-- Card 1 -->
              <div class="group bg-navy-800 rounded-lg overflow-hidden transition-all hover:bg-navy-700">
                <div class="relative flex items-center">
                  <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
                  <div class="absolute top-0 left-0 w-16 h-1 bg-coral-500"></div>
                  <div class="p-6 pl-10 flex items-center w-full">
                    <div class="text-2xl md:text-3xl font-bold text-coral-500/30 w-16 flex-shrink-0">01</div>
                    <p class="text-base md:text-lg text-white font-medium flex-1">Don't control consumer funds.</p>
                  </div>
                </div>
              </div>

              <!-- Card 2 -->
              <div class="group bg-navy-800 rounded-lg overflow-hidden transition-all hover:bg-navy-700">
                <div class="relative flex items-center">
                  <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
                  <div class="absolute top-0 left-0 w-16 h-1 bg-coral-500"></div>
                  <div class="p-6 pl-10 flex items-center w-full">
                    <div class="text-2xl md:text-3xl font-bold text-coral-500/30 w-16 flex-shrink-0">02</div>
                    <p class="text-base md:text-lg text-white font-medium flex-1">Only provide software or computing services.</p>
                  </div>
                </div>
              </div>

              <!-- Card 3 -->
              <div class="group bg-navy-800 rounded-lg overflow-hidden transition-all hover:bg-navy-700">
                <div class="relative flex items-center">
                  <div class="absolute top-0 left-0 w-1 h-full bg-coral-500"></div>
                  <div class="absolute top-0 left-0 w-16 h-1 bg-coral-500"></div>
                  <div class="p-6 pl-10 flex items-center w-full">
                    <div class="text-2xl md:text-3xl font-bold text-coral-500/30 w-16 flex-shrink-0">03</div>
                    <p class="text-base md:text-lg text-white font-medium flex-1">Don't act as financial intermediaries.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Conclusion text -->
            <div>
              <p class="text-base md:text-lg text-white leading-relaxed mb-6">
                This clarity helps encourage innovation while ensuring appropriate oversight of actual financial services. This bill is short and direct, you can read the full bill text for yourself.
              </p>
              <!-- Secondary CTA: Read The Bill -->
              <a
                href="https://www.congress.gov/bill/119th-congress/house-bill/3633/text#HDAC4A4FC88F74B25990B58714F4164FF"
                target="_blank"
                rel="noopener noreferrer"
                class="animated-link underline text-coral-500 hover:text-coral-400 font-semibold inline-block text-base md:text-lg transition-colors duration-200"
              >
                Read The Bill
                <span aria-hidden="true" class="ml-1 arrow-animate">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <QuoteCarousel />

    <!-- Contact Your Representative Section -->
    <section id="contact-representatives" class="py-20 bg-white px-4 scroll-reveal">
      <div class="max-w-4xl mx-auto">
        <div class="bg-navy-900 inline-block px-6 py-3 mb-12">
          <h2 class="font-space-grotesk font-bold text-2xl md:text-3xl uppercase text-white">
            Contact Your Representatives
          </h2>
        </div>

        <div class="text-center mb-8">
          <p class="text-navy-900/80 text-base md:text-lg">
            Tell them you support Section 109 of the CLARITY Act!
          </p>
        </div>

        <div class="bg-navy-900/5 p-8 rounded-lg">
          <!-- ZIP Code Form -->
          <form @submit.prevent="submitRepForm" class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center mb-6 w-full">
            <input 
              v-model="repZipCode"
              type="text" 
              placeholder="94110" 
              class="w-full px-4 py-3 bg-white border border-navy-900/20 text-navy-900 placeholder-navy-900/50 focus:outline-none focus:border-coral-500 text-base md:text-lg rounded-lg"
            >
            <button
              type="submit"
              :disabled="!isValidRepZip || repLoading"
              class="w-full bg-navy-900 text-white px-6 py-3 font-bold hover:bg-navy-800 transition-colors text-base md:text-lg flex items-center justify-center rounded-lg">
              <span v-if="repLoading" class="loading-spinner mr-2"></span>
              {{ repLoading ? 'Searching...' : 'Find Representatives' }}
            </button>
          </form>

          <!-- Error Message -->
          <div v-if="repError" class="text-red-600 text-center mb-4 bg-red-100 p-4 rounded-lg">
            {{ repError }}
          </div>

          <!-- Representatives Results -->
          <transition-group
            name="rep-list"
            tag="div"
            @before-enter="beforeEnterRep"
            @enter="enterRep"
          >
            <div v-if="representatives.length > 0 && !repLoading" key="container" class="space-y-6 w-full">
              <div 
                v-for="(rep, index) in representatives" 
                :key="rep.id" 
                class="bg-white border border-navy-900/10 p-6 rounded-lg rep-item shadow-sm"
                :style="{ '--rep-index': index }"
              >
                <div class="flex flex-col md:flex-row gap-6">
                  <img
                    :src="rep.photoURL"
                    :alt="rep.name"
                    class="w-32 h-32 object-cover rounded-lg mx-auto md:mx-0"
                  >
                  <div class="flex-1">
                    <div class="flex items-start justify-between mb-4">
                      <div>
                        <div class="flex items-center gap-2 mb-2">
                          <span class="text-sm font-medium text-navy-900/70">{{ rep.reason }}</span>
                          <span class="bg-navy-900/10 text-navy-900 px-2 py-1 rounded text-xs font-medium">{{ rep.party }}</span>
                        </div>
                        <h4 class="text-xl font-bold text-navy-900">{{ rep.name }}</h4>
                        <p class="text-navy-900/70 text-sm">{{ rep.area }}</p>
                      </div>
                      <div class="text-right">
                        <p class="text-sm font-medium text-navy-900/70 mb-1">Key Message:</p>
                        <p class="text-sm text-navy-900/80 max-w-xs">
                          "I support Section 109 of the CLARITY Act to protect non-custodial wallet development and preserve financial innovation in America."
                        </p>
                      </div>
                    </div>
                    <div class="space-y-2">
                      <div class="flex items-center gap-3 p-3 bg-navy-900/5 rounded">
                        <svg class="w-4 h-4 text-navy-900/70" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                        <span class="text-navy-900 font-medium">{{ rep.phone }}</span>
                      </div>
                      <button class="flex items-center gap-3 p-3 bg-navy-900/5 rounded hover:bg-navy-900/10 transition-colors w-full">
                        <svg class="w-4 h-4 text-navy-900/70" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        <span class="text-navy-900 font-medium">Send Email</span>
                      </button>
                      <div v-if="rep.field_offices && rep.field_offices.length > 0" class="mt-4">
                        <div v-for="(office, officeIndex) in rep.field_offices" :key="officeIndex" class="flex items-center gap-3 p-3 bg-navy-900/5 rounded mb-2">
                          <svg class="w-4 h-4 text-navy-900/70" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                          </svg>
                          <span class="text-navy-900">{{ office.city }}: {{ office.phone }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition-group>
          
          <!-- Empty State -->
          <div 
            v-if="!repLoading && representatives.length === 0 && !repError && repZipCodeEntered" 
            class="text-navy-900/70 text-center py-8"
          >
            No representatives found for this zip code.
          </div>
        </div>
      </div>
    </section>

    <!-- Stay Updated Section -->
    <section id="stay-updated" class="py-20 bg-gray-50 px-4 scroll-reveal">
      <div class="max-w-4xl mx-auto">
        <div class="bg-navy-900 inline-block px-6 py-3 mb-12">
          <h2 class="font-space-grotesk font-bold text-2xl md:text-3xl uppercase text-white">
            Stay Updated
          </h2>
        </div>

        <div class="text-center mb-8">
          <p class="text-navy-900/80 text-base md:text-lg">
            Get critical updates & important activations delivered to your inbox
          </p>
        </div>

        <div class="bg-navy-900/5 p-8 rounded-lg">
          <div class="flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-navy-900 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <h3 class="text-xl md:text-2xl font-bold text-navy-900">
              Join the Campaign
            </h3>
          </div>
          
          <p class="text-navy-900/80 text-base md:text-lg mb-8 text-center">
            Be the first to know about new developments and action opportunities
          </p>
          
          <!-- Email Form -->
          <form @submit.prevent="submitEmailForm" v-if="!emailSignedUp" class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center w-full mb-6">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              ref="emailInput"
              class="md:col-span-2 w-full px-4 py-3 bg-white border border-navy-900/20 text-navy-900 placeholder-navy-900/50 focus:outline-none focus:border-coral-500 text-base md:text-lg rounded-lg"
            >
            <button 
              type="submit" 
              :disabled="emailSubmitting" 
              class="w-full bg-navy-900 text-white px-6 py-3 font-bold hover:bg-navy-800 transition-colors text-base md:text-lg rounded-lg flex items-center justify-center"
            >
              <span v-if="emailSubmitting" class="loading-spinner mr-2"></span>
              {{ emailSubmitting ? 'Signing up...' : 'Sign Up' }}
            </button>
          </form>
          
          <p v-if="emailResult != ''" class="text-navy-900 mt-4 text-center font-medium">
            {{ emailResult }}
          </p>

          <div class="flex items-center justify-center text-navy-900/60 text-sm mt-6">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
            </svg>
            Your information will only be used to look up your congressional representatives or keep you updated.
          </div>
        </div>
      </div>
    </section>

    <!-- Share Campaign Section -->
    <section id="share-campaign" class="py-20 bg-white px-4 scroll-reveal">
      <div class="max-w-4xl mx-auto">
        <div class="bg-navy-900 inline-block px-6 py-3 mb-12">
          <h2 class="font-space-grotesk font-bold text-2xl md:text-3xl uppercase text-white">
            Share the Campaign
          </h2>
        </div>

        <div class="text-center mb-8">
          <p class="text-navy-900/80 text-base md:text-lg">
            Spread the word and help protect our financial freedom
          </p>
        </div>

        <!-- Two Column Layout -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <!-- Left Column: Image -->
          <div>
            <img 
              src="@/assets/images/satoshi-needs-you.png" 
              alt="Satoshi Needs You" 
              class="w-full h-auto rounded-lg shadow-lg"
            >
            <div class="mt-6 text-center">
              <button class="inline-flex items-center gap-2 px-6 py-3 bg-navy-900/5 text-navy-900 rounded-lg hover:bg-navy-900/10 transition-colors font-medium">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                Download Image
              </button>
            </div>
          </div>
          
          <!-- Right Column: Share Box -->
          <div>
            <div class="bg-navy-900/5 p-8 rounded-lg">
              <div class="flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-navy-900 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                </svg>
                <h3 class="text-xl md:text-2xl font-bold text-navy-900">
                  One-Click Sharing
                </h3>
              </div>
              
              <p class="text-navy-900/80 text-base md:text-lg mb-8 text-center">
                Share on your favorite social networks with pre-written messages
              </p>
              
              <div class="space-y-4">
                <button class="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 font-bold text-lg transition-colors duration-300 rounded-lg flex items-center justify-center gap-3">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Share on Twitter/X
                </button>
                
                <button class="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 font-bold text-lg transition-colors duration-300 rounded-lg flex items-center justify-center gap-3">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Share on Nostr
                </button>
                
                <button class="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-4 font-bold text-lg transition-colors duration-300 rounded-lg flex items-center justify-center gap-3">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Share on Instagram
                </button>
                
                <button class="w-full bg-black hover:bg-gray-800 text-white px-6 py-4 font-bold text-lg transition-colors duration-300 rounded-lg flex items-center justify-center gap-3">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                  Share on TikTok
                </button>
              </div>
            </div>
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
    <ShareModal 
      :is-open="isShareModalOpen"
      @close="isShareModalOpen = false"
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
  <div class="g-recaptcha" id="recaptcha-main"
      data-sitekey="6LeuOkIrAAAAAAUh5HJyIw13B2YbsjyLCccDrxlF"
      data-callback="recaptchaApproved"
      data-size="invisible">
  </div>
  <div class="g-recaptcha" id="recaptcha-updates"
      data-sitekey="6LeuOkIrAAAAAAUh5HJyIw13B2YbsjyLCccDrxlF"
      data-callback="recaptchaUpdatesApproved"
      data-size="invisible">
  </div>
  </main>
</template>

<script setup>
import QuoteCarousel from '@/components/QuoteCarousel.vue'
import DeveloperCarousel from '@/components/DeveloperCarousel.vue'
import UpdatesModal from '@/components/UpdatesModal.vue'
import ContactModal from '@/components/ContactModal.vue'
import ShareModal from '@/components/ShareModal.vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isUpdatesModalOpen = ref(false)
const isContactModalOpen = ref(false)
const isShareModalOpen = ref(false)

// Representative form data
const repZipCode = ref('')
const representatives = ref([])
const repError = ref('')
const repLoading = ref(false)
const repZipCodeEntered = ref(false)

// Email form data
const emailInput = ref(null)
const emailResult = ref('')
const emailSignedUp = ref(false)
const emailSubmitting = ref(false)

// Computed properties
const isValidRepZip = computed(() => {
  return /^\d{5}$/.test(repZipCode.value)
})

// Handle scroll events
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Smooth scroll to section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Representative form functions
async function submitRepForm() {
  if (!isValidRepZip.value) return
  
  repLoading.value = true
  repError.value = ''
  representatives.value = []
  repZipCodeEntered.value = true
  
  await findRepresentatives()
  
  repLoading.value = false
}

async function findRepresentatives() {
  if (!isValidRepZip.value) {
    repError.value = 'Please enter a valid 5-digit zip code'
    return
  }

  repError.value = ''
  try {
    const response = await fetch(`https://saveourwallets.org/rep-lookup/${repZipCode.value}`)
    const data = await response.json()

    if (data.error) {
      repError.value = data.error
      representatives.value = []
      return
    }

    representatives.value = data.representatives || []
  } catch (e) {
    repError.value = 'An error occurred while fetching representatives. Please try again.'
    representatives.value = []
  }
}

// Email form functions
async function submitEmailForm() {
  emailSubmitting.value = true
  try {
    grecaptcha.execute(window.sow_recaptcha_updates)
  } catch(e) {
    emailResult.value = "reCAPTCHA failed to initialize, please refresh the page and try again"
    emailSubmitting.value = false
  }
}

// Animation functions for representatives
const beforeEnterRep = (el) => {
  el.style.opacity = 0
}

const enterRep = (el, done) => {
  const delay = 150
  
  setTimeout(() => {
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    el.style.opacity = 1
    done()
  }, delay)
}

onMounted(() => {
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll)
  
  // Initial check
  handleScroll()

  // Load reCAPTCHA script
  const script = document.createElement('script')
  script.src = 'https://www.google.com/recaptcha/api.js?onload=recaptchaSetup&render=explicit'
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

  // Listen for email form events from recaptcha callback
  window.addEventListener('emailResult', (event) => {
    emailResult.value = event.detail.result
    if (event.detail.signedUp) {
      emailSignedUp.value = true
    }
  })

  window.addEventListener('emailSubmitting', (event) => {
    emailSubmitting.value = event.detail.submitting
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

<script>

export function recaptchaSetup() {
  window.sow_recaptcha_main = grecaptcha.render('recaptcha-main', {
    'sitekey': '6LeuOkIrAAAAAAUh5HJyIw13B2YbsjyLCccDrxlF',
    'callback': 'recaptchaApproved',
  });

  //Render recaptcha2 on element with ID "recaptcha2"
  window.sow_recaptcha_updates = grecaptcha.render('recaptcha-updates', {
    'sitekey': '6LeuOkIrAAAAAAUh5HJyIw13B2YbsjyLCccDrxlF',
    'callback': 'recaptchaUpdatesApproved'
  });
};

export async function recaptchaUpdatesApproved(token) {
  try {
    const emailInputElement = document.querySelector('#stay-updated input[type="email"]')
    const res = await fetch(`https://saveourwallets.org/email-signup/?token=${token}&email=${emailInputElement.value}`)
    if (!res.ok) {
      // Update the result in the component
      const event = new CustomEvent('emailResult', { detail: { result: "Failed to submit email, please try again" } })
      window.dispatchEvent(event)
    } else {
      // Update the result in the component
      const event = new CustomEvent('emailResult', { detail: { result: "Thank you for signing up to stay informed!", signedUp: true } })
      window.dispatchEvent(event)
    }
  } catch (e) {
    const event = new CustomEvent('emailResult', { detail: { result: "Failed to submit email, please try again" } })
    window.dispatchEvent(event)
  }
  // Update submitting state
  const submittingEvent = new CustomEvent('emailSubmitting', { detail: { submitting: false } })
  window.dispatchEvent(submittingEvent)
}

export default {
  mounted() {
    window.recaptchaSetup = recaptchaSetup
    window.recaptchaUpdatesApproved = recaptchaUpdatesApproved
  }
}
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

/* Loading spinner */
.loading-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
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

/* Representative item animations */
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

.rep-list-enter-active,
.rep-list-leave-active {
  transition: all 0.5s ease-out;
}

.rep-list-enter-from,
.rep-list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
