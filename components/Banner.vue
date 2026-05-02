<template>
  <div class="banner-container" ref="containerRef">
    <div class="background-image">
      <v-img
        :src="img1"
        cover
        height="100%"
        class="background-img"
      ></v-img>
      <div class="overlay"></div>
    </div>
    <canvas ref="canvasRef" class="canvas"></canvas>
    <div class="content">
      <p class="hero-role mb-2">{{ t('banner.role') }}</p>
      <h1 class="hero-name mb-4">Mauro Henrique</h1>
      <div class="text-h5 mb-6 elegant-subtitle">
        <span class="block hero-tagline">{{ t('banner.tagline') }}</span>
      </div>

      <ul class="hero-highlights" :aria-label="t('banner.highlightsAria')">
        <li class="hero-highlight">
          <span class="hero-highlight-mark" aria-hidden="true" />
          <span>{{ t('banner.highlight1') }}</span>
        </li>
        <li class="hero-highlight">
          <span class="hero-highlight-mark" aria-hidden="true" />
          <span>{{ t('banner.highlight2') }}</span>
        </li>
        <li class="hero-highlight">
          <span class="hero-highlight-mark" aria-hidden="true" />
          <span>{{ t('banner.highlight3') }}</span>
        </li>
      </ul>

      <div class="hero-cta d-flex justify-center gap-4 flex-wrap">
        <v-btn
          color="primary"
          size="large"
          class="elegant-btn cta-btn"
          href="#cases"
        >
          {{ t('banner.ctaCases') }}
        </v-btn>
        <v-btn
          variant="outlined"
          color="white"
          size="large"
          class="elegant-btn cta-btn"
          href="#contato"
        >
          {{ t('banner.ctaContact') }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import img1 from '~/assets/img1.png'

const { t } = useI18n()

const canvasRef = ref(null)
const containerRef = ref(null)
let ctx = null
let animationFrameId = null
let particles = []
let mouse = { x: 0, y: 0 }
let reducedMotion = false

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = Math.random() * 2 + 1
    this.speedX = Math.random() * 1 - 0.5
    this.speedY = Math.random() * 1 - 0.5
    this.life = 1
    this.decay = Math.random() * 0.005 + 0.005
    this.connections = []
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    this.life -= this.decay
  }

  draw() {
    if (!ctx) return
    
    // Desenha a partícula
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(100, 200, 255, ${this.life * 0.5})`
    ctx.fill()

    // Desenha as conexões
    this.connections.forEach(particle => {
      const dx = this.x - particle.x
      const dy = this.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < 150) {
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(particle.x, particle.y)
        ctx.strokeStyle = `rgba(100, 200, 255, ${(1 - distance/150) * this.life * 0.3})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
    })
  }
}

const initCanvas = () => {
  const canvas = canvasRef.value
  const container = containerRef.value
  
  if (!canvas || !container) return

  canvas.width = container.offsetWidth
  canvas.height = container.offsetHeight
  ctx = canvas.getContext('2d')
}

const handleMouseMove = (e) => {
  const rect = canvasRef.value.getBoundingClientRect()
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top

  // Adiciona novas partículas
  for (let i = 0; i < 2; i++) {
    const particle = new Particle(mouse.x, mouse.y)
    // Conecta com partículas próximas
    particles.forEach(p => {
      const dx = particle.x - p.x
      const dy = particle.y - p.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < 150) {
        particle.connections.push(p)
        p.connections.push(particle)
      }
    })
    particles.push(particle)
  }
}

const animate = () => {
  if (!ctx) return

  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  
  // Atualiza e desenha partículas
  particles = particles.filter(particle => {
    particle.update()
    particle.draw()
    return particle.life > 0
  })

  // Adiciona partículas aleatórias para manter o efeito
  if (Math.random() < 0.1) {
    const x = Math.random() * canvasRef.value.width
    const y = Math.random() * canvasRef.value.height
    const particle = new Particle(x, y)
    particles.forEach(p => {
      const dx = particle.x - p.x
      const dy = particle.y - p.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < 150) {
        particle.connections.push(p)
        p.connections.push(particle)
      }
    })
    particles.push(particle)
  }

  animationFrameId = requestAnimationFrame(animate)
}

const handleResize = () => {
  initCanvas()
}

onMounted(() => {
  reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion) return

  initCanvas()
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', handleResize)
  animate()
})

onUnmounted(() => {
  if (reducedMotion) return
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', handleResize)
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

.banner-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.background-img {
  filter: brightness(0.7);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 0, 0, 0.85) 50%,
    rgba(0, 0, 0, 0.95) 100%
  );
  z-index: 1;
}

.canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  mix-blend-mode: screen;
}

@media (prefers-reduced-motion: reduce) {
  .canvas {
    display: none;
  }

  .elegant-title,
  .elegant-subtitle,
  .hero-highlights,
  .hero-role,
  .hero-name,
  .elegant-btn {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

.content {
  position: relative;
  z-index: 3;
  color: white;
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.logo-image {
  width: 200px;
  height: auto;
  animation: fadeInDown 1s ease-out forwards;
  opacity: 0;
  filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.5));
}

.elegant-title {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  font-size: 4.5rem;
  background: linear-gradient(to right, #ffffff, #e0e0e0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  animation: fadeInDown 1s ease-out forwards;
  opacity: 0;
  position: relative;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.hero-role {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1.05rem;
  margin: 0;
  animation: fadeInDown 1s ease-out forwards;
  opacity: 0;
}

.hero-name {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: clamp(2.1rem, 6vw, 3.8rem);
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin: 0;
  color: #ffffff;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  animation: fadeInDown 1s ease-out 0.15s forwards;
  opacity: 0;
}

.elegant-subtitle {
  font-family: 'Outfit', sans-serif;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.92);
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.45s forwards;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.hero-tagline {
  display: inline-block;
  max-width: min(38rem, 92vw);
  margin: 0 auto;
}

.hero-highlights {
  list-style: none;
  margin: 0 auto 1.75rem;
  padding: 1rem 1.35rem;
  max-width: min(52rem, 94vw);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 0.85rem 1.75rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  font-family: 'Outfit', sans-serif;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.58s forwards;
}

.hero-highlight {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  text-align: left;
  font-size: clamp(0.85rem, 2.2vw, 0.95rem);
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.9);
  max-width: 27rem;
}

.hero-highlight-mark {
  margin-top: 0.42em;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  background: linear-gradient(135deg, rgba(100, 200, 255, 0.95), rgba(0, 180, 220, 0.75));
  box-shadow: 0 0 12px rgba(100, 200, 255, 0.35);
}

@media (max-width: 600px) {
  .content {
    padding: 1.5rem 1.25rem 2.25rem;
  }

  .hero-highlights {
    flex-direction: column;
    align-items: stretch;
    gap: 0.65rem;
    padding: 1rem 1.1rem;
    margin-bottom: 1.25rem;
  }

  .hero-highlight {
    max-width: none;
  }

  .hero-cta {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    padding-inline: 0;
  }

  .hero-cta .cta-btn {
    width: 100%;
    max-width: none;
    margin-inline: 0 !important;
  }
}

@media (min-width: 601px) {
  .hero-highlights {
    margin-bottom: 2rem;
  }

  .hero-cta {
    width: 100%;
    max-width: min(52rem, 100%);
    margin-top: 0.5rem;
    margin-bottom: 1.25rem;
    margin-inline: auto;
    padding-inline: 0.75rem;
    gap: 1.25rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .hero-cta .cta-btn {
    flex: 0 1 auto;
  }
}

@media (min-width: 960px) {
  .hero-cta {
    flex-wrap: nowrap;
    gap: 1.35rem;
    margin-bottom: 1.5rem;
  }
}

.elegant-btn {
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: none;
  border-radius: 12px;
  padding: 12px 32px;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.72s forwards;
  position: relative;
  overflow: hidden;
}

.elegant-btn:hover {
  background: rgba(100, 200, 255, 0.3) !important;
  transform: translateY(-2px);
}

:deep(.v-btn--variant-outlined) {
  border-color: rgba(255, 255, 255, 0.3) !important;
}

:deep(.v-btn--variant-outlined:hover) {
  border-color: rgba(100, 200, 255, 0.8) !important;
  background: rgba(100, 200, 255, 0.3) !important;
}


/* teste */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 