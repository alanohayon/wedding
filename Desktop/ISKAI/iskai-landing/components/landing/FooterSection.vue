<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'A propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

function scrollTo(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <footer class="border-t border-brd-subtle bg-bg-primary">
    <div class="section-container py-16 lg:py-20">
      <!-- Grid 3 colonnes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        <!-- Colonne gauche : Logo + tagline + socials -->
        <div class="flex flex-col gap-6">
          <a href="/" class="flex items-center gap-0 w-fit" aria-label="ISKAI - Accueil">
            <span class="text-xl font-extrabold text-white">ISK</span>
            <span class="text-xl font-extrabold gradient-text">.AI</span>
          </a>

          <p class="text-sm text-txt-secondary leading-relaxed max-w-[260px]">
            Agents IA &amp; Automatisation sur-mesure
          </p>

          <!-- Icones sociales -->
          <div class="flex items-center gap-4">
            <!-- LinkedIn -->
            <a
              href="https://linkedin.com/company/iskai"
              target="_blank"
              rel="noopener noreferrer"
              class="text-txt-tertiary hover:text-accent-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <!-- X / Twitter -->
            <a
              href="https://x.com/iskai_fr"
              target="_blank"
              rel="noopener noreferrer"
              class="text-txt-tertiary hover:text-accent-primary transition-colors duration-200"
              aria-label="X (Twitter)"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Colonne centre : Navigation -->
        <div class="flex flex-col gap-6">
          <h3 class="text-sm font-semibold text-txt-primary uppercase tracking-wider">
            Navigation
          </h3>
          <nav class="flex flex-col gap-3">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="text-sm text-txt-secondary transition-colors duration-200 hover:text-txt-primary w-fit"
              @click.prevent="scrollTo(link.href)"
            >
              {{ link.label }}
            </a>
          </nav>
        </div>

        <!-- Colonne droite : Contact -->
        <div class="flex flex-col gap-6">
          <h3 class="text-sm font-semibold text-txt-primary uppercase tracking-wider">
            Contact
          </h3>
          <div class="flex flex-col gap-3">
            <a
              href="mailto:contact@iskai.fr"
              class="text-sm text-txt-secondary transition-colors duration-200 hover:text-txt-primary w-fit"
            >
              contact@iskai.fr
            </a>
            <span class="text-sm text-txt-secondary">
              Paris, France
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Barre copyright -->
    <div class="border-t border-brd-subtle">
      <div class="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-caption text-txt-muted">
          &copy; {{ currentYear }} ISKAI
        </p>
        <div class="flex items-center gap-6">
          <a href="#" class="text-caption text-txt-muted hover:text-txt-secondary transition-colors duration-200">
            Mentions légales
          </a>
          <a href="#" class="text-caption text-txt-muted hover:text-txt-secondary transition-colors duration-200">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
