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
            Section 109 of the CLARITY Act protects from impossible licensing and registration requirements blockchain developers and service providers who:
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
          <!-- Secondary CTA: Read The Bill -->
          <a
            href="https://www.congress.gov/bill/119th-congress/house-bill/3633/text#HDAC4A4FC88F74B25990B58714F4164FF"
            target="_blank"
            rel="noopener noreferrer"
            class="animated-link underline text-coral-500 hover:text-coral-400 font-semibold mt-4 inline-block text-lg md:text-2xl transition-colors duration-200"
          >
            Read The Bill
            <span aria-hidden="true" class="ml-1 arrow-animate">↗</span>
          </a>
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
            Your voice matters! Call your representatives today and express the need for clear, fair blockchain regulation to drive innovation in this rapidly evolving space. Be sure to mention Section 109 of the CLARITY Act, and let them know that your rights to access wallets and developer rights to build them matter.
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
              Contact your congressional representatives and tell them why you support Section 109 of the CLARITY Act.
            </p>
          </div>

          <!-- Share Card - Coral -->
          <div 
            class="bg-coral-500 rounded-xl p-8 flex flex-col group hover:bg-white transition-all duration-300 ease-in-out cursor-pointer"
            @click="isShareModalOpen = true"
          >
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

    <!-- Contact Your Representative Section -->
    <section id="contact-representatives" class="py-20 bg-navy-900 px-4 scroll-reveal">
      <div class="max-w-4xl mx-auto">
        <div class="bg-coral-500 inline-block px-6 py-3 mb-12">
          <h2 class="font-space-grotesk font-bold text-2xl md:text-3xl uppercase">
            CONTACT YOUR REPRESENTATIVE
          </h2>
        </div>

        <div class="bg-navy-800/50 backdrop-blur-sm p-8 rounded-lg">
          <h3 class="font-space-grotesk text-xl md:text-2xl text-white font-bold mb-4 text-center">
            Find your representatives:
          </h3>
          <p class="text-white/80 text-base md:text-lg mb-6 text-center">
            Tell them you support Section 109 of the CLARITY Act!
          </p>
          
          <!-- ZIP Code Form -->
          <form @submit.prevent="submitRepForm" class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center mb-6 w-full">
            <input 
              v-model="repZipCode"
              type="text" 
              placeholder="Enter your ZIP code" 
              class="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-coral-500 text-base md:text-lg rounded-lg"
            >
            <button
              type="submit"
              :disabled="!isValidRepZip || repLoading"
              class="w-full bg-coral-500 text-white px-6 py-3 font-bold hover:bg-coral-400 transition-colors text-base md:text-lg flex items-center justify-center rounded-lg">
              <span v-if="repLoading" class="loading-spinner mr-2"></span>
              {{ repLoading ? 'Searching...' : 'Find Your Representative' }}
            </button>
          </form>

          <!-- Error Message -->
          <div v-if="repError" class="text-red-400 text-center mb-4 bg-red-400/10 p-4 rounded-lg">
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
                class="bg-white/10 p-6 rounded-lg rep-item"
                :style="{ '--rep-index': index }"
              >
                <div class="flex flex-col md:flex-row gap-6">
                  <img
                    :src="rep.photoURL"
                    :alt="rep.name"
                    class="w-32 h-32 object-cover rounded-lg mx-auto md:mx-0"
                  >
                  <div class="flex-1">
                    <h4 class="text-xl font-bold mb-2 text-white">{{ rep.name }}</h4>
                    <p class="text-white/70 mb-2">{{ rep.party }} - {{ rep.area }}</p>
                    <p class="text-white/70 mb-4">{{ rep.reason }}</p>
                    <div class="space-y-2">
                      <p class="font-bold text-coral-500">Main Office:</p>
                      <p class="text-white">{{ rep.phone }}</p>
                      <div v-if="rep.field_offices && rep.field_offices.length > 0">
                        <p class="font-bold text-coral-500 mt-4 mb-2">Local Offices:</p>
                        <div v-for="(office, officeIndex) in rep.field_offices" :key="officeIndex" class="text-white">
                          {{ office.city }}: {{ office.phone }}
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
            class="text-white/70 text-center py-8"
          >
            No representatives found for this zip code.
          </div>
        </div>
      </div>
    </section>

    <!-- Stay Updated Section -->
    <section id="stay-updated" class="py-20 bg-white px-4 scroll-reveal">
      <div class="max-w-4xl mx-auto">
        <div class="bg-navy-900 inline-block px-6 py-3 mb-12">
          <h2 class="font-space-grotesk font-bold text-2xl md:text-3xl uppercase text-white">
            STAY UPDATED
          </h2>
        </div>

        <div class="bg-navy-900/5 p-8 rounded-lg">
          <h3 class="text-navy-900 text-xl md:text-2xl font-bold mb-4 text-center">
            Get the latest campaign updates
          </h3>
          <p class="text-navy-900/80 text-base md:text-lg mb-6 text-center">
            Sign up for our mailing list to stay informed about the CLARITY Act.
          </p>
          
          <!-- Email Form -->
          <form @submit.prevent="submitEmailForm" v-if="!emailSignedUp" class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center w-full">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              ref="emailInput"
              class="w-full px-4 py-3 bg-white border border-navy-900/20 text-navy-900 placeholder-navy-900/50 focus:outline-none focus:border-coral-500 text-base md:text-lg rounded-lg"
            >
            <button 
              type="submit" 
              :disabled="emailSubmitting" 
              class="w-full border border-coral-500 text-coral-500 px-6 py-3 font-bold hover:bg-coral-500 hover:text-white transition-colors text-base md:text-lg bg-transparent rounded-lg"
            >
              <span v-if="emailSubmitting" class="loading-spinner mr-2"></span>
              {{ emailSubmitting ? 'Signing up...' : 'Sign Up' }}
            </button>
          </form>
          
          <p v-if="emailResult != ''" class="text-navy-900 mt-4 text-center font-medium">
            {{ emailResult }}
          </p>

          <p class="text-navy-900/70 text-xs md:text-sm text-center mt-4">
            Your information will only be used to keep you updated on the campaign.
          </p>
        </div>
      </div>
    </section>

    <!-- Share Campaign Section -->
    <section id="share-campaign" class="py-20 bg-navy-900 px-4 scroll-reveal">
      <div class="max-w-6xl mx-auto">
        <div class="bg-coral-500 inline-block px-6 py-3 mb-12">
          <h2 class="font-space-grotesk font-bold text-2xl md:text-3xl uppercase">
            SHARE CAMPAIGN
          </h2>
        </div>

        <!-- Two Column Layout -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Column: Image -->
          <div class="order-2 md:order-1">
            <img 
              src="@/assets/images/satoshi-needs-you.png" 
              alt="Satoshi Needs You" 
              class="w-full h-auto rounded-lg shadow-lg"
            >
          </div>
          
          <!-- Right Column: Share Box -->
          <div class="order-1 md:order-2">
            <div class="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                One Quick Share
              </h3>
              
              <div class="space-y-4">
                <button class="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 font-bold text-lg transition-colors duration-300 rounded-lg flex items-center justify-center gap-3">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Share on Twitter
                </button>
                
                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 font-bold text-lg transition-colors duration-300 rounded-lg flex items-center justify-center gap-3">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Share on Facebook
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
