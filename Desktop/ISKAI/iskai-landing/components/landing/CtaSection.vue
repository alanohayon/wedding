<script setup lang="ts">
useScrollReveal()
</script>

<template>
  <section id="contact" class="relative py-24 lg:py-32">
    <div class="absolute inset-0 bg-gradient-section pointer-events-none" />

    <div class="section-container relative">
      <div class="reveal max-w-2xl mx-auto glass-card p-10 lg:p-16 text-center relative overflow-hidden">
        <div
          class="absolute -top-20 -right-20 w-60 h-60 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none"
        />
        <div
          class="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none"
        />

        <div class="relative">
          <h2 class="text-3xl lg:text-4xl font-bold text-txt-primary mb-4">
            Prêt à <span class="gradient-text">automatiser</span> ?
          </h2>

          <p class="text-body text-txt-secondary mb-8 max-w-lg mx-auto">
            Réservez un audit gratuit de 30 minutes et découvrez ce qu'on peut
            automatiser dans votre entreprise. Sans engagement.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href="#contact" class="btn-primary inline-flex items-center gap-2">
              Réserver mon audit
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <a
            href="mailto:contact@iskai.fr"
            class="text-sm text-txt-tertiary hover:text-accent-primary transition-colors"
          >
            contact@iskai.fr
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
