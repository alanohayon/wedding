<script setup lang="ts">
interface TrustItem {
  label: string
}

const trustMetrics: TrustItem[] = [
  { label: '10+ automatisations livrées' },
  { label: 'Livraison 48h – 7 jours' },
  { label: 'Sans engagement' },
]

const techLogos = ['N8N', 'OpenAI', 'HubSpot', 'Slack', 'WhatsApp']

useScrollReveal()
</script>

<template>
  <section
    class="relative min-h-screen overflow-hidden bg-bg-primary dot-grid bg-gradient-hero pt-32 pb-20"
  >
    <!-- Orbe violette principale : grande, centree haut -->
    <div
      class="orb-violet absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full animate-pulse-glow-violet"
      aria-hidden="true"
    />

    <!-- Orbe violette secondaire : petite, bas-droite, plus discrete -->
    <div
      class="orb-violet absolute bottom-[5%] right-[-5%] w-[400px] h-[400px] rounded-full animate-float-slow opacity-40"
      aria-hidden="true"
    />

    <div class="section-container relative z-10 flex flex-col items-center text-center">
      <!-- Badge pill violet -->
      <div
        class="reveal inline-flex items-center gap-2 border border-brd-violet bg-accent-violet/10 rounded-pill px-4 py-1.5 mb-8"
      >
        <span class="text-accent-violet text-sm font-medium">
          &#10022; Automatisation &amp; Agents IA
        </span>
      </div>

      <!-- H1 -->
      <h1 class="reveal text-4xl md:text-hero font-extrabold tracking-tight max-w-4xl stagger-1">
        <span class="text-txt-primary">Vos process tournent.</span>
        <br />
        <span class="text-txt-primary">Vous, vous </span>
        <span class="gradient-text-violet">développez.</span>
      </h1>

      <!-- Sous-titre -->
      <p class="reveal text-body-lg text-txt-secondary max-w-xl mx-auto mt-6 stagger-2">
        Des agents IA et automatisations sur-mesure qui éliminent vos tâches répétitives.
        Livrés en 48h. Impact immédiat.
      </p>

      <!-- CTAs -->
      <div class="reveal flex flex-col sm:flex-row items-center gap-4 mt-10 stagger-3">
        <a href="#contact" class="btn-primary-violet inline-flex items-center gap-2">
          Réserver un audit gratuit
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a href="#services" class="btn-secondary-violet">
          Découvrir nos solutions
        </a>
      </div>

      <!-- Trust metrics avec check violet -->
      <div class="reveal flex flex-col sm:flex-row items-center gap-6 mt-12 stagger-4">
        <div
          v-for="item in trustMetrics"
          :key="item.label"
          class="flex items-center gap-2 text-sm text-txt-secondary"
        >
          <svg
            class="w-4 h-4 text-accent-violet flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>{{ item.label }}</span>
        </div>
      </div>

      <!-- Logo bar -->
      <div class="reveal mt-16 stagger-5">
        <p class="text-txt-muted text-caption uppercase tracking-wider mb-4">Propulsé par</p>
        <div class="flex flex-wrap justify-center items-center gap-8">
          <span
            v-for="logo in techLogos"
            :key="logo"
            class="font-mono text-sm text-txt-muted opacity-50 hover:opacity-80 hover:text-accent-violet-bright transition-all duration-200"
          >
            {{ logo }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
