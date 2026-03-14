<script setup lang="ts">
interface ProcessStep {
  number: string
  title: string
  emoji: string
  description: string
  tag: string
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Audit',
    emoji: '\u{1F4DE}',
    description: 'On échange 30 min sur vos process, vos outils et vos pain points. On identifie les quick wins.',
    tag: 'Gratuit \u00B7 30 min',
  },
  {
    number: '02',
    title: 'Construction',
    emoji: '\u2699\uFE0F',
    description: 'On conçoit et construit votre solution sur-mesure. Tests, itérations, jusqu\u2019à ce que ce soit parfait.',
    tag: '48h \u2013 7 jours',
  },
  {
    number: '03',
    title: 'Déploiement',
    emoji: '\uD83D\uDE80',
    description: 'Votre automatisation est live. Formation incluse, support réactif, évolutions possibles.',
    tag: 'Support inclus',
  },
]

useScrollReveal()
</script>

<template>
  <section id="process" class="relative py-24 bg-bg-primary bg-gradient-section overflow-hidden">
    <!-- Orbe bleue arriere-plan bas-gauche -->
    <div
      class="orb-blue animate-float-slow absolute -bottom-40 -left-40 w-[500px] h-[500px] opacity-30 pointer-events-none"
      aria-hidden="true"
    />

    <div class="section-container">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="reveal section-label">PROCESS</p>
        <h2 class="reveal text-h2 text-txt-primary stagger-1">
          Op&eacute;rationnel en 3 &eacute;tapes
        </h2>
      </div>

      <!-- Steps grid avec connecteurs -->
      <div class="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
        <!-- Connecteurs desktop (lignes horizontales pointillees) -->
        <div
          class="hidden lg:block absolute top-[72px] left-[calc(33.333%+12px)] w-[calc(33.333%-48px)] border-t-2 border-dashed border-brd-subtle"
          style="box-shadow: 0 0 10px rgba(59, 130, 246, 0.1)"
          aria-hidden="true"
        />
        <div
          class="hidden lg:block absolute top-[72px] left-[calc(66.666%+12px)] w-[calc(33.333%-48px)] border-t-2 border-dashed border-brd-subtle"
          style="box-shadow: 0 0 10px rgba(59, 130, 246, 0.1)"
          aria-hidden="true"
        />

        <!-- Carte par etape -->
        <div
          v-for="(step, index) in steps"
          :key="step.number"
          class="relative"
        >
          <!-- Connecteur vertical mobile (entre les cartes) -->
          <div
            v-if="index < steps.length - 1"
            class="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 h-8 border-l-2 border-dashed border-brd-subtle"
            style="box-shadow: 0 0 10px rgba(59, 130, 246, 0.1)"
            aria-hidden="true"
          />

          <div
            class="reveal glass-card p-8 h-full flex flex-col"
            :class="`stagger-${index + 1}`"
          >
            <!-- Numero gradient -->
            <span class="text-5xl font-extrabold gradient-text leading-none mb-5">
              {{ step.number }}
            </span>

            <!-- Icone + titre -->
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl" role="img" :aria-label="step.title">
                {{ step.emoji }}
              </span>
              <h3 class="text-h3 text-txt-primary">
                {{ step.title }}
              </h3>
            </div>

            <!-- Description -->
            <p class="text-sm text-txt-secondary leading-relaxed flex-1">
              {{ step.description }}
            </p>

            <!-- Tag pill -->
            <div class="mt-6">
              <span class="inline-block bg-accent-success/10 text-accent-success text-caption font-medium px-3 py-1 rounded-pill">
                {{ step.tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="reveal text-center mt-14 stagger-4">
        <a href="#contact" class="btn-primary inline-flex items-center gap-2">
          R&eacute;server mon audit gratuit
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
