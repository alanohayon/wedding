<script setup lang="ts">
// --- State ---
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const route = useRoute()

// --- Navigation links ---
const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'A propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

// --- Scroll detection ---
function onScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

// --- Mobile menu ---
function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Fermer le menu mobile a chaque changement de route
watch(() => route.fullPath, closeMobileMenu)

// Bloquer le scroll du body quand le menu est ouvert
watch(isMobileMenuOpen, (open) => {
  if (import.meta.server) return
  document.body.style.overflow = open ? 'hidden' : ''
})

// --- Smooth scroll ---
function scrollTo(href: string) {
  closeMobileMenu()
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <div class="min-h-screen bg-bg-primary text-txt-primary">
    <!-- Navbar -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300"
      :class="[
        isScrolled
          ? 'bg-bg-primary/80 backdrop-blur-[20px] border-b border-brd-subtle'
          : 'bg-transparent border-b border-transparent',
      ]"
    >
      <div class="section-container w-full flex items-center justify-between">
        <!-- Logo -->
        <a
          href="/"
          class="flex items-center gap-0 shrink-0"
          aria-label="ISKAI - Accueil"
        >
          <span class="text-xl font-extrabold text-white">ISK</span>
          <span class="text-xl font-extrabold gradient-text">.AI</span>
        </a>

        <!-- Desktop nav links -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm text-txt-secondary font-medium transition-colors duration-200 hover:text-txt-primary"
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Desktop CTA -->
        <a
          href="#contact"
          class="hidden md:inline-flex btn-primary !px-5 !py-2.5 text-sm"
          @click.prevent="scrollTo('#contact')"
        >
          Audit gratuit
        </a>

        <!-- Hamburger mobile -->
        <button
          class="md:hidden relative w-10 h-10 flex items-center justify-center"
          aria-label="Menu de navigation"
          :aria-expanded="isMobileMenuOpen"
          @click="toggleMobileMenu"
        >
          <span class="sr-only">Menu</span>
          <span
            class="absolute w-5 h-0.5 bg-txt-primary rounded transition-all duration-300"
            :class="isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'"
          />
          <span
            class="absolute w-5 h-0.5 bg-txt-primary rounded transition-all duration-300"
            :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
          />
          <span
            class="absolute w-5 h-0.5 bg-txt-primary rounded transition-all duration-300"
            :class="isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'"
          />
        </button>
      </div>
    </nav>

    <!-- Mobile menu panel -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-40 md:hidden"
      >
        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-bg-primary/60 backdrop-blur-sm"
          @click="closeMobileMenu"
        />

        <!-- Panel -->
        <div class="absolute top-0 right-0 h-full w-[280px] bg-bg-secondary border-l border-brd-subtle pt-[72px] px-6 flex flex-col">
          <nav class="flex flex-col gap-2 mt-6">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="text-body text-txt-secondary font-medium py-3 px-4 rounded-btn transition-colors duration-200 hover:bg-white/[0.04] hover:text-txt-primary"
              @click.prevent="scrollTo(link.href)"
            >
              {{ link.label }}
            </a>
          </nav>

          <div class="mt-8 px-4">
            <a
              href="#contact"
              class="btn-primary block text-center text-sm"
              @click.prevent="scrollTo('#contact')"
            >
              Audit gratuit
            </a>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Page content -->
    <main class="pt-[72px]">
      <slot />
    </main>
  </div>
</template>
