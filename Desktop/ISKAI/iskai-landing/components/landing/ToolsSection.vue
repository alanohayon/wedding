<script setup lang="ts">
interface Tool {
  name: string
  color: string
}

const row1: Tool[] = [
  { name: 'N8N', color: '#EA4B71' },
  { name: 'OpenAI', color: '#10B981' },
  { name: 'HubSpot', color: '#FF7A59' },
  { name: 'Slack', color: '#E01E5A' },
  { name: 'WhatsApp', color: '#25D366' },
  { name: 'Gmail', color: '#EA4335' },
  { name: 'Notion', color: '#FFFFFF' },
  { name: 'Airtable', color: '#18BFFF' },
  { name: 'Google Drive', color: '#4285F4' },
]

const row2: Tool[] = [
  { name: 'Zoom', color: '#2D8CFF' },
  { name: 'Monday', color: '#FF3D57' },
  { name: 'Canva', color: '#00C4CC' },
  { name: 'Stripe', color: '#635BFF' },
  { name: 'Yousign', color: '#5468FF' },
  { name: 'Buffer', color: '#168EEA' },
  { name: 'Perplexity', color: '#20B8CD' },
  { name: 'Google Sheets', color: '#34A853' },
  { name: 'LinkedIn', color: '#0A66C2' },
]

useScrollReveal()
</script>

<template>
  <section id="tools" class="relative py-24 bg-bg-primary bg-gradient-section overflow-hidden">
    <!-- Orbe bleue arriere-plan haut-droite -->
    <div
      class="orb-blue animate-float absolute -top-32 -right-32 w-[400px] h-[400px] opacity-30 pointer-events-none"
      aria-hidden="true"
    />

    <div class="section-container">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-14">
        <p class="reveal section-label">INT&Eacute;GRATIONS</p>
        <h2 class="reveal text-h2 text-txt-primary stagger-1">
          S'int&egrave;gre &agrave; vos outils existants
        </h2>
        <p class="reveal text-body-lg text-txt-secondary mt-4 stagger-2">
          Pas besoin de changer vos habitudes. On se connecte &agrave; ce que vous utilisez d&eacute;j&agrave;.
        </p>
      </div>
    </div>

    <!-- Marquee (pleine largeur) -->
    <div class="reveal stagger-3 space-y-4">
      <!-- Ligne 1 : droite vers gauche -->
      <div class="hover-pause overflow-hidden">
        <div class="flex w-max animate-marquee">
          <div
            v-for="(tool, i) in [...row1, ...row1]"
            :key="`r1-${i}`"
            class="bg-bg-tertiary border border-brd-subtle rounded-xl px-5 py-3 inline-flex items-center gap-2 mx-2 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.06)]"
          >
            <span
              class="w-1.5 h-1.5 rounded-full shrink-0"
              :style="{ backgroundColor: tool.color }"
              aria-hidden="true"
            />
            <span class="text-sm text-txt-secondary font-medium whitespace-nowrap">
              {{ tool.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Ligne 2 : gauche vers droite -->
      <div class="hover-pause overflow-hidden">
        <div class="flex w-max animate-marquee-reverse">
          <div
            v-for="(tool, i) in [...row2, ...row2]"
            :key="`r2-${i}`"
            class="bg-bg-tertiary border border-brd-subtle rounded-xl px-5 py-3 inline-flex items-center gap-2 mx-2 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.06)]"
          >
            <span
              class="w-1.5 h-1.5 rounded-full shrink-0"
              :style="{ backgroundColor: tool.color }"
              aria-hidden="true"
            />
            <span class="text-sm text-txt-secondary font-medium whitespace-nowrap">
              {{ tool.name }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Texte bottom -->
    <div class="section-container">
      <p class="reveal text-txt-muted text-sm text-center mt-8 stagger-4">
        ...et 30+ autres int&eacute;grations
      </p>
    </div>
  </section>
</template>
