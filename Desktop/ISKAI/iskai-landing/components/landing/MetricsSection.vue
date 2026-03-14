<script setup lang="ts">
// --- Types ---
interface Metric {
  value: string
  label: string
}

interface Testimonial {
  stars: number
  quote: string
  author: string
  role: string
  company: string
}

// --- Data ---
const metrics: Metric[] = [
  { value: '-80%', label: 'de temps sur les t\u00E2ches r\u00E9p\u00E9titives' },
  { value: '48h', label: 'délai moyen de livraison' },
  { value: '24/7', label: 'vos agents ne dorment jamais' },
  { value: '10x', label: 'plus de leads traités par heure' },
]

const testimonials: Testimonial[] = [
  {
    stars: 5,
    quote: 'On perdait 3h par jour \u00E0 relancer nos leads. Maintenant c\u2019est automatique, on a doubl\u00E9 notre taux de conversion en 2 mois.',
    author: 'Marie D.',
    role: 'Directrice commerciale',
    company: 'Agence digitale Paris',
  },
  {
    stars: 5,
    quote: 'L\u2019agent service client a transform\u00E9 notre support. Nos clients ont une r\u00E9ponse en 10 secondes, m\u00EAme \u00E0 2h du matin.',
    author: 'Thomas R.',
    role: 'CEO',
    company: 'SaaS B2B Lyon',
  },
  {
    stars: 5,
    quote: '100 CVs analys\u00E9s en 20 minutes au lieu de 2 jours. Le ROI est imm\u00E9diat, c\u2019est un game changer pour notre recrutement.',
    author: 'Sophie M.',
    role: 'DRH',
    company: 'Cabinet de conseil',
  },
]

// --- Carrousel state ---
const currentIndex = ref(0)
const isPaused = ref(false)
let intervalId: ReturnType<typeof setInterval> | null = null

const currentTestimonial = computed(() => testimonials[currentIndex.value])

function goTo(index: number) {
  currentIndex.value = index
}

function prev() {
  currentIndex.value = currentIndex.value === 0
    ? testimonials.length - 1
    : currentIndex.value - 1
}

function next() {
  currentIndex.value = currentIndex.value === testimonials.length - 1
    ? 0
    : currentIndex.value + 1
}

function startAutoplay() {
  stopAutoplay()
  intervalId = setInterval(() => {
    if (!isPaused.value) {
      next()
    }
  }, 5000)
}

function stopAutoplay() {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})

useScrollReveal()
</script>

<template>
  <section id="metrics" class="relative py-24 bg-bg-primary overflow-hidden">
    <!-- Orbe bleue arriere-plan centree -->
    <div
      class="orb-blue animate-pulse-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none"
      aria-hidden="true"
    />

    <div class="section-container">
      <!-- PARTIE 1 : Metriques -->
      <div class="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        <div
          v-for="(metric, index) in metrics"
          :key="metric.value"
          class="reveal border-l-2 border-accent-primary pl-6"
          :class="`stagger-${index + 1}`"
        >
          <span class="text-5xl font-extrabold gradient-text leading-none">
            {{ metric.value }}
          </span>
          <p class="text-sm text-txt-secondary mt-2">
            {{ metric.label }}
          </p>
        </div>
      </div>

      <!-- PARTIE 2 : Carrousel temoignages -->
      <div class="reveal max-w-2xl mx-auto stagger-5">
        <div
          class="glass-card shadow-glow p-8 sm:p-10 text-center"
          @mouseenter="isPaused = true"
          @mouseleave="isPaused = false"
        >
          <!-- Transition entre temoignages -->
          <Transition
            mode="out-in"
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-3"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-3"
          >
            <div :key="currentIndex">
              <!-- Etoiles -->
              <div class="flex items-center justify-center gap-1 mb-6">
                <svg
                  v-for="star in currentTestimonial.stars"
                  :key="star"
                  class="w-5 h-5 text-accent-warning"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <!-- Citation -->
              <blockquote class="text-lg italic text-txt-primary leading-relaxed">
                &laquo; {{ currentTestimonial.quote }} &raquo;
              </blockquote>

              <!-- Auteur -->
              <p class="text-sm text-txt-secondary mt-4">
                &mdash; {{ currentTestimonial.author }}, {{ currentTestimonial.role }}, {{ currentTestimonial.company }}
              </p>
            </div>
          </Transition>
        </div>

        <!-- Navigation : fleches + dots -->
        <div class="flex items-center justify-center gap-6 mt-6">
          <!-- Fleche gauche -->
          <button
            class="w-10 h-10 rounded-full border border-brd-subtle flex items-center justify-center text-txt-secondary hover:text-txt-primary hover:border-brd-hover transition-colors duration-200"
            aria-label="Temoignage precedent"
            @click="prev"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Dots -->
          <div class="flex items-center gap-2">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="index === currentIndex
                ? 'bg-accent-primary w-6'
                : 'bg-txt-muted hover:bg-txt-tertiary'"
              :aria-label="`Temoignage ${index + 1}`"
              :aria-current="index === currentIndex ? 'true' : undefined"
              @click="goTo(index)"
            />
          </div>

          <!-- Fleche droite -->
          <button
            class="w-10 h-10 rounded-full border border-brd-subtle flex items-center justify-center text-txt-secondary hover:text-txt-primary hover:border-brd-hover transition-colors duration-200"
            aria-label="Temoignage suivant"
            @click="next"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
