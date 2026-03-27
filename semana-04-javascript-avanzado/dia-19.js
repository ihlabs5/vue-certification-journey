// ══════════════════════════════════════════════════
// DÍA 19 — ES6+ Moderno
// ══════════════════════════════════════════════════

// ── EJERCICIO 1: Clases ───────────────────────────
console.log("=== EJERCICIO 1: Clases ===")

class Curso {
  constructor(nombre, totalSemanas, totalHoras) {
    this.nombre = nombre
    this.totalSemanas = totalSemanas
    this.totalHoras = totalHoras
    this.semanaActual = 0
    this.horasEstudiadas = 0
    this.tecnologias = []
  }

  completarSemana(horas, tecnologia) {
    this.semanaActual++
    this.horasEstudiadas += horas
    if (!this.tecnologias.includes(tecnologia)) {
      this.tecnologias.push(tecnologia)
    }
  }

  get progreso() {
    return Math.round((this.semanaActual / this.totalSemanas) * 100)
  }

  get horasRestantes() {
    return this.totalHoras - this.horasEstudiadas
  }

  get listo() {
    return this.semanaActual >= this.totalSemanas
  }

  toString() {
    return `${this.nombre} — ${this.progreso}% completado`
  }
}

class CursoVue extends Curso {
  constructor() {
    super("Certificación Vue.js Mid-Level", 13, 65)
    this.certificacion = "Vue.js Mid-Level"
    this.plataforma = "certificates.dev"
  }

  estadoExamen() {
    if (this.listo) return "✅ Listo para rendir!"
    const restantes = this.totalSemanas - this.semanaActual
    return `⏳ Faltan ${restantes} semanas (${this.horasRestantes}hs)`
  }
}

const miCurso = new CursoVue()
miCurso.completarSemana(5, "HTML")
miCurso.completarSemana(5, "CSS")
miCurso.completarSemana(5, "JavaScript")

console.log(`${miCurso}`)
console.log(`Progreso: ${miCurso.progreso}%`)
console.log(`Tecnologías: ${miCurso.tecnologias.join(", ")}`)
console.log(`Examen: ${miCurso.estadoExamen()}`)

// ── EJERCICIO 2: Object.entries() ────────────────
console.log("\n=== EJERCICIO 2: Object.entries ===")

const estadoCurso = {
  HTML: { completada: true, semanas: 1 },
  CSS: { completada: true, semanas: 1 },
  JavaScript: { completada: false, semanas: 2 },
  "Vue.js Core": { completada: false, semanas: 3 },
  "Vue Router": { completada: false, semanas: 1 },
  Pinia: { completada: false, semanas: 1 },
}

// Mostrar estado de cada tecnología
Object.entries(estadoCurso).forEach(([tech, { completada, semanas }]) => {
  const estado = completada ? "✅" : "⏳"
  console.log(`${estado} ${tech.padEnd(15)} — ${semanas} semana${semanas > 1 ? "s" : ""}`)
})

// Contar completadas y pendientes
const completadas = Object.values(estadoCurso).filter(v => v.completada).length
const pendientes = Object.values(estadoCurso).filter(v => !v.completada).length
console.log(`\nCompletadas: ${completadas} | Pendientes: ${pendientes}`)

// ── EJERCICIO 3: Set — tecnologías únicas ─────────
console.log("\n=== EJERCICIO 3: Set ===")

const historialAprendizaje = [
  "HTML", "CSS", "HTML", "JavaScript",
  "CSS", "Vue.js", "JavaScript", "Vue.js", "Pinia"
]

const tecnologiasUnicas = [...new Set(historialAprendizaje)]
console.log(`Historial (${historialAprendizaje.length} entradas):`, historialAprendizaje)
console.log(`Únicas (${tecnologiasUnicas.length}):`, tecnologiasUnicas)

// ── EJERCICIO 4: Map ──────────────────────────────
console.log("\n=== EJERCICIO 4: Map ===")

const estadoTechs = new Map([
  ["HTML", "✅ Completado"],
  ["CSS", "✅ Completado"],
  ["JavaScript", "🔄 En progreso"],
  ["Vue.js", "⏳ Pendiente"],
  ["Pinia", "⏳ Pendiente"],
])

estadoTechs.forEach((estado, tech) => {
  console.log(`${tech.padEnd(12)}: ${estado}`)
})

console.log(`\nTotal tecnologías: ${estadoTechs.size}`)
console.log(`Estado de Vue.js: ${estadoTechs.get("Vue.js")}`)

// ── EJERCICIO 5: Computed property names ──────────
console.log("\n=== EJERCICIO 5: Computed property names ===")

// Simular actualización de estado como en Pinia/Vue
const actualizarCampo = (estado, campo, valor) => ({
  ...estado,
  [campo]: valor
})

let estadoApp = {
  usuario: "ihlabs5",
  semana: 3,
  certificado: false
}

console.log("Estado inicial:", estadoApp)
estadoApp = actualizarCampo(estadoApp, "semana", 4)
estadoApp = actualizarCampo(estadoApp, "certificado", true)
console.log("Estado final:", estadoApp)

// ── EJERCICIO 6: Encadenamiento avanzado ──────────
console.log("\n=== EJERCICIO 6: Encadenamiento ===")

const datos = [
  { tech: "HTML", horas: 5, nivel: "basico", ok: true },
  { tech: "CSS", horas: 5, nivel: "basico", ok: true },
  { tech: "JavaScript", horas: 10, nivel: "intermedio", ok: false },
  { tech: "Vue.js", horas: 15, nivel: "intermedio", ok: false },
  { tech: "TypeScript", horas: 10, nivel: "avanzado", ok: false },
]

// Reporte de pendientes ordenado por horas descendente
const reporte = datos
  .filter(d => !d.ok)
  .sort((a, b) => b.horas - a.horas)
  .map(({ tech, horas, nivel }) =>
    `${tech.padEnd(14)} | ${String(horas).padStart(2)}hs | ${nivel}`
  )

console.log("Pendientes (ordenado por horas):")
console.log("Tecnología     | Hs | Nivel")
console.log("-".repeat(38))
reporte.forEach(r => console.log(r))

const totalPendiente = datos
  .filter(d => !d.ok)
  .reduce((acc, d) => acc + d.horas, 0)

console.log(`\nTotal horas pendientes: ${totalPendiente}hs`)

// ── RESUMEN FINAL ─────────────────────────────────
console.log("\n=== RESUMEN ES6+ ===")
const features = new Map([
  ["Módulos", "import / export"],
  ["Clases", "class, extends, super, get, static"],
  ["Object utilities", "Object.keys/values/entries/fromEntries"],
  ["Set", "Colección de valores únicos"],
  ["Map", "Mapa clave-valor mejorado"],
  ["Computed properties", "{ [variable]: valor }"],
  ["Short circuit", "&& || ??"],
])

features.forEach((descripcion, feature) => {
  console.log(`  • ${feature.padEnd(22)}: ${descripcion}`)
})