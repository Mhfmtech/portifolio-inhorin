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
      <h1 class="text-h2 font-weight-bold mb-4 elegant-title">Product Owner</h1>
      <div class="text-h4 mb-8 elegant-subtitle">
        <span class="block">Mauro Henrique</span>
        <span class="block mt-2">UX • Decisão • Impacto • Front-end</span>
      </div>
      <div class="d-flex justify-center gap-4">
        <v-btn
          color="primary"
          size="large"
          class="mr-4 elegant-btn"
          href="#cases"
        >
          Ver Cases de Produto
        </v-btn>
        <v-btn
          variant="outlined"
          color="white"
          size="large"
          class="elegant-btn"
          href="#contato"
        >
          Contato
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import img1 from '~/assets/img1.png'

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

.elegant-subtitle {
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
  letter-spacing: 0.02em;
  line-height: 1.6;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.3s forwards;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
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
  animation: fadeInUp 1s ease-out 0.6s forwards;
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