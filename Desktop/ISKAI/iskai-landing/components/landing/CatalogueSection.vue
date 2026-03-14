<script setup lang="ts">
// 1. Types
interface CatalogueItem {
  num: string
  type: 'auto' | 'agent'
  label: string
  title: string
  shortDesc: string
  desc: string
  hook: string
  tools: string[]
  price: string
  delay: string
}

// 2. Data
const items: CatalogueItem[] = [
  {
    num: '01',
    type: 'auto',
    label: 'Automatisation',
    title: 'Qualification & relance leads automatique',
    shortDesc: 'Chaque lead qualifié par IA, scoré et relancé en 5 min, 24h/24.',
    desc: 'Chaque nouveau lead entrant est qualifié par IA, scoré puis relancé avec un message personnalisé sans intervention humaine.',
    hook: 'Arrêtez de perdre des leads — chaque prospect est relancé automatiquement.',
    tools: ['n8n', 'OpenAI', 'HubSpot', 'Gmail', 'Airtable'],
    price: '250-350 \u20AC',
    delay: '48h',
  },
  {
    num: '02',
    type: 'auto',
    label: 'Automatisation',
    title: 'Extraction & classement documents PDF',
    shortDesc: 'Factures, contrats et OPCO lus, extraits et injectés dans votre CRM.',
    desc: 'Factures, devis, contrats ou dossiers OPCO : l\'agent lit les PDFs, extrait les données clés et les injecte dans votre CRM.',
    hook: '100 factures traitées en 3 minutes, sans erreur.',
    tools: ['n8n', 'GPT-4o-mini', 'Google Sheets', 'Airtable'],
    price: '200-350 \u20AC',
    delay: '48h',
  },
  {
    num: '03',
    type: 'agent',
    label: 'Agent IA',
    title: 'Agent service client 24/7',
    shortDesc: 'Réponses IA sur WhatsApp et site web, 10 secondes, jour et nuit.',
    desc: 'Un agent IA répond aux questions clients sur WhatsApp et le site web, traite les demandes courantes et escalade si nécessaire.',
    hook: 'Vos clients obtiennent une réponse à 2h du matin.',
    tools: ['n8n', 'OpenAI', 'WhatsApp API', 'Notion'],
    price: '350-550 \u20AC',
    delay: '3-5j',
  },
  {
    num: '04',
    type: 'auto',
    label: 'Automatisation',
    title: 'Contenu LinkedIn / Instagram',
    shortDesc: 'Posts, visuels et légendes générés et publiés automatiquement.',
    desc: 'À partir d\'un brief ou d\'un thème, génère automatiquement des posts, visuels Canva et légendes, les planifie et les publie.',
    hook: 'Présence digitale constante sans y passer 3h/semaine.',
    tools: ['n8n', 'OpenAI', 'Canva API', 'Buffer'],
    price: '250-400 \u20AC',
    delay: '48h',
  },
  {
    num: '05',
    type: 'agent',
    label: 'Agent IA',
    title: 'Devis & onboarding client',
    shortDesc: 'Formulaire, devis, signature, onboarding en 10 minutes.',
    desc: 'Le client remplit un formulaire, l\'agent génère un devis, l\'envoie pour signature et déclenche l\'onboarding complet.',
    hook: 'De la demande au contrat signé sans toucher un document.',
    tools: ['n8n', 'OpenAI', 'Yousign', 'Monday', 'Drive'],
    price: '400-600 \u20AC',
    delay: '3-5j',
  },
  {
    num: '06',
    type: 'auto',
    label: 'Automatisation',
    title: 'Synthese reunions & actions',
    shortDesc: 'Chaque réunion transcrite, résumée et transformée en plan d\'action.',
    desc: 'Chaque réunion est transcrite, résumée par IA avec les décisions et actions extraites, puis envoyée aux participants.',
    hook: 'Plus personne ne repart sans savoir quoi faire.',
    tools: ['n8n', 'Whisper', 'Google Meet', 'Notion'],
    price: '200-300 \u20AC',
    delay: '48h',
  },
  {
    num: '07',
    type: 'agent',
    label: 'Agent IA',
    title: 'Recrutement & preselection',
    shortDesc: 'CVs analysés, scorés et synthétisés automatiquement.',
    desc: 'L\'agent collecte les candidatures, analyse les CVs selon vos critères, score les profils et rédige un compte-rendu synthétique.',
    hook: '200 CVs triés en 20 minutes.',
    tools: ['n8n', 'GPT-4o', 'Airtable', 'Gmail'],
    price: '350-500 \u20AC',
    delay: '3-5j',
  },
  {
    num: '08',
    type: 'auto',
    label: 'Automatisation',
    title: 'Veille concurrentielle',
    shortDesc: 'Briefing quotidien personnalisé sur votre secteur et concurrents.',
    desc: 'Surveille les actualités de votre secteur et les publications de vos concurrents. Synthèse chaque matin par email ou Slack.',
    hook: 'Décidez plus vite que vos concurrents, chaque matin.',
    tools: ['n8n', 'OpenAI', 'Perplexity', 'Slack'],
    price: '200-300 \u20AC',
    delay: '48h',
  },
  {
    num: '09',
    type: 'agent',
    label: 'Agent IA',
    title: 'Comptabilite & finance',
    shortDesc: 'Relances, catégorisation, rapprochement et reporting automatiques.',
    desc: 'Relances de factures impayées, rapprochement bancaire, catégorisation des dépenses et reporting mensuel automatique.',
    hook: 'Vos factures se relancent seules.',
    tools: ['n8n', 'OpenAI', 'Pennylane', 'Stripe'],
    price: '350-500 \u20AC',
    delay: '3-5j',
  },
  {
    num: '10',
    type: 'agent',
    label: 'Agent IA',
    title: 'Formation & certification OPCO',
    shortDesc: 'Attestations et dossiers de financement générés automatiquement.',
    desc: 'Collecte les données stagiaires, génère les attestations et produit les dossiers de financement complets pré-remplis.',
    hook: 'Dossiers OPCO prêts à déposer, zéro saisie.',
    tools: ['n8n', 'GPT-4o-mini', 'Drive', 'Yousign'],
    price: '400-600 \u20AC',
    delay: '5-7j',
  },
]

// 3. Filter logic
type FilterType = 'all' | 'auto' | 'agent'
const activeFilter = ref<FilterType>('all')

const filters: { label: string; value: FilterType }[] = [
  { label: 'Tout', value: 'all' },
  { label: 'Automatisations', value: 'auto' },
  { label: 'Agents IA', value: 'agent' },
]

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') return items
  return items.filter(i => i.type === activeFilter.value)
})

// 4. Compute transform-origin class based on card position in 2-col grid
// Col 0 = left side, Col 1 = right side
// Row 0 = top, last row = bottom, middle = center
function getOriginClass(index: number): string {
  const totalFiltered = filteredItems.value.length
  const col = index % 2           // 0 = left, 1 = right
  const row = Math.floor(index / 2)
  const totalRows = Math.ceil(totalFiltered / 2)
  const isFirstRow = row === 0
  const isLastRow = row === totalRows - 1

  if (col === 0) {
    if (isFirstRow) return 'origin-top-left'
    if (isLastRow) return 'origin-bottom-left'
    return 'origin-left'
  } else {
    if (isFirstRow) return 'origin-top-right'
    if (isLastRow) return 'origin-bottom-right'
    return 'origin-right'
  }
}

// 5. Scroll reveal
useScrollReveal()
</script>

<template>
  <section id="services" class="relative py-24 lg:py-32 bg-bg-primary overflow-hidden">
    <!-- Background orb -->
    <div
      class="orb-green absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-pulse-glow-green"
    />

    <!-- Subtle gradient overlay -->
    <div class="absolute inset-0 bg-gradient-section-green" />

    <div class="section-container relative z-10">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-12">
        <p class="reveal section-label-green">NOS SOLUTIONS</p>
        <h2 class="reveal text-h2 text-txt-primary stagger-1">
          Automatisations & <span class="gradient-text-green">Agents IA</span>
        </h2>
        <p class="reveal text-body-lg text-txt-secondary mt-4 stagger-2">
          Chaque solution est conçue sur-mesure, intégrée à vos outils existants et livrée clé en main.
        </p>
      </div>

      <!-- Filters -->
      <div class="reveal flex items-center justify-center gap-2 mb-12 stagger-3">
        <button
          v-for="f in filters"
          :key="f.value"
          class="px-5 py-2 rounded-pill text-sm font-medium transition-all duration-200"
          :class="activeFilter === f.value
            ? 'bg-accent-green text-bg-primary shadow-glow-green font-semibold'
            : 'bg-white/[0.04] text-txt-secondary border border-brd-subtle hover:border-brd-green hover:text-txt-primary'"
          @click="activeFilter = f.value"
        >
          {{ f.label }}
        </button>
      </div>

      <!-- Catalogue grid -->
      <TransitionGroup
        tag="div"
        class="grid grid-cols-1 lg:grid-cols-2 gap-4"
        enter-active-class="transition-all duration-400 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
        move-class="transition-all duration-400 ease-out"
      >
        <div
          v-for="(item, index) in filteredItems"
          :key="item.num"
          class="catalogue-card p-4 lg:p-5 flex flex-col gap-2 cursor-default"
          :class="getOriginClass(index)"
        >
          <!-- Compact header: number + title + badge -->
          <div class="flex items-start gap-3">
            <span class="font-mono text-caption font-semibold text-accent-green/60 mt-0.5 shrink-0">
              {{ item.num }}
            </span>
            <h3 class="text-sm font-semibold text-txt-primary leading-snug flex-1">
              {{ item.title }}
            </h3>
            <span
              class="shrink-0 whitespace-nowrap"
              :class="item.type === 'auto' ? 'badge-auto' : 'badge-agent'"
            >
              {{ item.label }}
            </span>
          </div>

          <!-- Short description (visible by default, truncated) -->
          <p class="text-sm text-txt-secondary leading-snug truncate">
            {{ item.shortDesc }}
          </p>

          <!-- Tool pills (compact) -->
          <div class="flex flex-wrap gap-1">
            <span
              v-for="tool in item.tools"
              :key="tool"
              class="text-[10px] font-medium bg-accent-green/[0.06] border border-brd-green rounded-md px-1.5 py-0.5 text-accent-green/70"
            >
              {{ tool }}
            </span>
          </div>

          <!-- Expanded details on hover -->
          <div class="card-details flex flex-col gap-3 mt-1">
            <!-- Full description -->
            <p class="text-sm text-txt-secondary leading-relaxed">
              {{ item.desc }}
            </p>

            <!-- Hook -->
            <div class="border-l-2 border-accent-green/40 pl-3">
              <p class="text-sm font-medium text-txt-primary italic leading-relaxed">
                &laquo; {{ item.hook }} &raquo;
              </p>
            </div>

            <!-- Price & delay -->
            <div class="pt-2 border-t border-brd-subtle flex items-center justify-between">
              <span class="text-sm font-semibold gradient-text-green">
                {{ item.price }}
              </span>
              <span class="text-caption text-accent-green font-medium flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ item.delay }}
              </span>
            </div>
          </div>
        </div>
      </TransitionGroup>

      <!-- Bottom CTA -->
      <div class="reveal text-center mt-14">
        <p class="text-txt-secondary text-body mb-6">
          Votre besoin n'est pas dans la liste ?
          On crée des solutions <span class="text-txt-primary font-medium">100% sur-mesure</span>.
        </p>
        <a
          href="#contact"
          class="inline-flex items-center gap-2 text-bg-primary font-semibold px-7 py-3.5 rounded-btn transition-all duration-200 ease-out active:scale-[0.98] hover:scale-[1.02]"
          style="background: linear-gradient(135deg, #059669, #00FF88); box-shadow: 0 0 30px rgba(0, 255, 136, 0.15);"
        >
          Discutons de votre projet
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
