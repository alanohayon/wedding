<script setup lang="ts">
interface ServiceCard {
  emoji: string
  title: string
  description: string
}

const services: ServiceCard[] = [
  {
    emoji: '\u26A1',
    title: 'Automatisation Workflows',
    description: 'Connectez vos outils et éliminez les tâches manuelles. Chaque workflow est testé et optimisé.',
  },
  {
    emoji: '\uD83E\uDD16',
    title: 'Agents IA 24/7',
    description: 'Service client, devis, recrutement... Des agents autonomes qui travaillent pendant que vous dormez.',
  },
  {
    emoji: '\uD83D\uDCC4',
    title: 'Extraction Documents',
    description: 'Factures, CVs, contrats traités automatiquement. 100 documents en 3 minutes, zéro erreur.',
  },
  {
    emoji: '\uD83D\uDCCA',
    title: 'Veille & Intelligence',
    description: 'Briefing quotidien personnalisé. Surveillez vos concurrents et votre marché automatiquement.',
  },
  {
    emoji: '\uD83D\uDCAC',
    title: 'Contenu Automatique',
    description: 'Posts LinkedIn, Instagram, newsletters générés et planifiés selon votre calendrier éditorial.',
  },
  {
    emoji: '\uD83D\uDCC8',
    title: 'Comptabilité & Finance',
    description: 'Relances automatiques, catégorisation des dépenses, reporting mensuel sans effort.',
  },
]

useScrollReveal()
</script>

<template>
  <section id="services" class="relative py-24 bg-bg-primary bg-gradient-section">
    <div class="section-container">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="reveal section-label">NOS SERVICES</p>
        <h2 class="reveal text-h2 text-txt-primary stagger-1">
          Ce qu'on automatise pour vous
        </h2>
        <p class="reveal text-body-lg text-txt-secondary mt-4 stagger-2">
          Chaque solution est conçue sur-mesure, intégrée à vos outils existants.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="reveal glass-card p-8"
          :class="`stagger-${index + 1}`"
        >
          <div class="w-14 h-14 rounded-full bg-accent-primary/10 flex items-center justify-center mb-5">
            <span class="text-[40px] leading-none" role="img" :aria-label="service.title">
              {{ service.emoji }}
            </span>
          </div>
          <h3 class="text-h4 text-txt-primary font-semibold mb-3">
            {{ service.title }}
          </h3>
          <p class="text-sm text-txt-secondary line-clamp-3">
            {{ service.description }}
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="reveal text-center mt-12 stagger-6">
        <a
          href="#contact"
          class="text-accent-primary font-medium hover:underline underline-offset-4 transition-all duration-200 inline-flex items-center gap-1"
        >
          Voir tous nos services
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
