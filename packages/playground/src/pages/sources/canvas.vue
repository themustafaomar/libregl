<script setup lang="ts">
import { computed, ShallowRef, shallowRef } from 'vue'
import { CanvasSource, RasterLayer } from 'libregl'
import Map from '@/components/Map.vue'

const CIRCLES = 16
const RADIUS = 20

const canvasRef = shallowRef<HTMLCanvasElement>()
const ctx = computed(() => canvasRef.value?.getContext('2d'))
const circles: ShallowRef<Circle[]> = shallowRef([])

class Circle {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
  color: string
  constructor(x: number, y: number, dx: number, dy: number, radius: number, color: string) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color
  }

  _draw() {
    ctx.value!.beginPath()
    ctx.value!.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    ctx.value!.strokeStyle = this.color
    ctx.value!.stroke()
  }

  update() {
    if (this.x + this.radius > 400 || this.x - this.radius < 0) {
      this.dx = -this.dx
    }

    if (this.y + this.radius > 400 || this.y - this.radius < 0) {
      this.dy = -this.dy
    }

    this.x += this.dx
    this.y += this.dy

    this._draw()
  }
}

const animate = () => {
  requestAnimationFrame(animate)
  ctx.value!.clearRect(0, 0, 400, 400)
  circles.value.forEach((circle) => circle.update())
}

const onLoaded = () => {
  canvasRef.value!.style.display = 'none'

  Array.from({ length: CIRCLES }, () => {
    const color = `#${(0x1000000 + Math.random() * 0xffffff).toString(16).substring(1, 7)}`
    const x = Math.random() * (400 - RADIUS * 2) + RADIUS
    const y = Math.random() * (400 - RADIUS * 2) + RADIUS
    const dx = (Math.random() - 0.5) * 2
    const dy = (Math.random() - 0.5) * 2

    circles.value.push(new Circle(x, y, dx, dy, RADIUS, color))
  })

  animate()
}
</script>

<template>
  <canvas ref="canvasRef" width="400" height="400">Canvas not supported</canvas>
  <Map
    @load="onLoaded"
    :center="[95.899147, 18.088694]"
    :zoom="5"
  >
    <CanvasSource
      :coordinates="[[91.4461, 21.5006], [100.3541, 21.5006], [100.3541, 13.9706], [91.4461, 13.9706]]"
      :canvas="canvasRef"
      animate
    >
      <RasterLayer />
    </CanvasSource>
  </Map>
</template>
