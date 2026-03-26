// ══════════════════════════════════════════════════
// PROYECTO SEMANA 3 — Gestor de Curso Vue.js
// ══════════════════════════════════════════════════

// ── DATOS BASE ──────────────────────────────────
const TOTAL_SEMANAS = 13
const TOTAL_HORAS = 65

const perfil = {
  usuario: "ihlabs5",
  objetivo: "Vue.js Mid-Level",
  github: "https://github.com/ihlabs5",
  portfolio: "https://ihlabs5.github.io"
}

const semanas = [
  { id: 1, semana: 1, tecnologia: "HTML", horas: 5, completada: true },
  { id: 2, semana: 2, tecnologia: "CSS", horas: 5, completada: true },
  { id: 3, semana: 3, tecnologia: "JavaScript", horas: 5, completada: true },
  { id: 4, semana: 4, tecnologia: "JavaScript", horas: 5, completada: false },
  { id: 5, semana: 5, tecnologia: "Vue.js Core", horas: 5, completada: false },
  { id: 6, semana: 6, tecnologia: "Vue.js Core", horas: 5, completada: false },
  { id: 7, semana: 7, tecnologia: "Vue.js Core", horas: 5, completada: false },
  { id: 8, semana: 8, tecnologia: "Vue Router", horas: 5, completada: false },
  { id: 9, semana: 9, tecnologia: "Pinia", horas: 5, completada: false },
  { id: 10, semana: 10, tecnologia: "Composables", horas: 5, completada: false },
  { id: 11, semana: 11, tecnologia: "Proyectos", horas: 5, completada: false },
  { id: 12, semana: 12, tecnologia: "Proyectos", horas: 5, completada: false },
  { id: 13, semana: 13, tecnologia: "Examen", horas: 5, completada: false },
]

// ── FUNCIONES DE CÁLCULO ────────────────────────

// Total de horas completadas
const calcularHorasCompletadas = (listaSemanas) =>
  listaSemanas
    .filter(s => s.completada)
    .reduce((acc, s) => acc + s.horas, 0)

// Porcentaje de progreso
const calcularPorcentaje = (actual, total) =>
  Math.round((actual / total) * 100)

// Semanas completadas
const obtenerCompletadas = (listaSemanas) =>
  listaSemanas.filter(s => s.completada)

// Semanas pendientes
const obtenerPendientes = (listaSemanas) =>
  listaSemanas.filter(s => !s.completada)

// Tecnologías únicas pendientes
const obtenerTecnologiasPendientes = (listaSemanas) => {
  const pendientes = obtenerPendientes(listaSemanas)
  const nombres = pendientes.map(s => s.tecnologia)
  return [...new Set(nombres)]
}

// Buscar semana por número
const buscarSemana = (listaSemanas, numero) =>
  listaSemanas.find(s => s.semana === numero) ?? null

// Completar una semana — retorna NUEVO array sin mutar
const completarSemana = (listaSemanas, id) =>
  listaSemanas.map(s =>
    s.id === id ? { ...s, completada: true } : s
  )

// Calcular semanas hasta el examen
const semanasHastaExamen = (listaSemanas) =>
  obtenerPendientes(listaSemanas).length

// ── FUNCIONES DE VISUALIZACIÓN ──────────────────

const separador = (char = "─", largo = 45) =>
  char.repeat(largo)

const mostrarBarra = (porcentaje) => {
  const lleno = Math.round(porcentaje / 5)
  const vacio = 20 - lleno
  const barra = "█".repeat(lleno) + "░".repeat(vacio)
  return `[${barra}] ${porcentaje}%`
}

const mostrarPerfil = ({ usuario, objetivo, github, portfolio }) => {
  console.log(separador("═"))
  console.log(`  👤 PERFIL: ${usuario}`)
  console.log(`  🎯 OBJETIVO: ${objetivo}`)
  console.log(`  🐙 GitHub: ${github}`)
  console.log(`  🌐 Portfolio: ${portfolio}`)
  console.log(separador("═"))
}

const mostrarProgreso = (listaSemanas) => {
  const completadas = obtenerCompletadas(listaSemanas)
  const horasCompletadas = calcularHorasCompletadas(listaSemanas)
  const pctSemanas = calcularPorcentaje(completadas.length, TOTAL_SEMANAS)
  const pctHoras = calcularPorcentaje(horasCompletadas, TOTAL_HORAS)

  console.log("\n📊 PROGRESO DEL CURSO")
  console.log(separador())
  console.log(`  Semanas: ${completadas.length}/${TOTAL_SEMANAS}`)
  console.log(`  ${mostrarBarra(pctSemanas)}`)
  console.log(`  Horas:   ${horasCompletadas}/${TOTAL_HORAS}`)
  console.log(`  ${mostrarBarra(pctHoras)}`)
  console.log(`  Semanas hasta el examen: ${semanasHastaExamen(listaSemanas)}`)
}

const mostrarSemanas = (listaSemanas) => {
  console.log("\n📅 DETALLE DE SEMANAS")
  console.log(separador())

  listaSemanas.forEach(({ semana, tecnologia, horas, completada }) => {
    const estado = completada ? "✅" : "⏳"
    const semanaStr = `Semana ${String(semana).padStart(2, "0")}`
    console.log(`  ${estado} ${semanaStr} — ${tecnologia.padEnd(15)} (${horas}hs)`)
  })
}

const mostrarTecnologiasPendientes = (listaSemanas) => {
  const pendientes = obtenerTecnologiasPendientes(listaSemanas)
  console.log("\n🔄 TECNOLOGÍAS PENDIENTES")
  console.log(separador())
  pendientes.forEach((tech, i) => {
    console.log(`  ${i + 1}. ${tech}`)
  })
}

const mostrarEstadoExamen = (listaSemanas) => {
  const horasCompletadas = calcularHorasCompletadas(listaSemanas)
  const pct = calcularPorcentaje(horasCompletadas, TOTAL_HORAS)

  let mensaje
  if (pct >= 100) mensaje = "✅ LISTO PARA EL EXAMEN"
  else if (pct >= 70) mensaje = "🔄 MUY CERCA — SEGUÍ ASÍ"
  else if (pct >= 40) mensaje = "📖 BUEN PROGRESO"
  else mensaje = "🚀 RECIÉN EMPEZANDO"

  console.log("\n🏆 ESTADO DEL EXAMEN")
  console.log(separador())
  console.log(`  ${mensaje}`)
  console.log(`  Horas completadas: ${horasCompletadas}/${TOTAL_HORAS}`)
}

// ── SIMULACIÓN ──────────────────────────────────

console.log("\n" + separador("═"))
console.log("  🎓 GESTOR DE CURSO — VUE.JS CERTIFICATION")
console.log(separador("═"))

// Mostrar perfil
mostrarPerfil(perfil)

// Estado inicial
console.log("\n📌 ESTADO INICIAL")
mostrarProgreso(semanas)
mostrarSemanas(semanas)
mostrarTecnologiasPendientes(semanas)
mostrarEstadoExamen(semanas)

// ── SIMULAR AVANCE ──────────────────────────────
console.log("\n\n" + separador("═"))
console.log("  ⚡ SIMULANDO AVANCE DEL CURSO...")
console.log(separador("═"))

// Completar semanas 4 a 8 sin mutar el original
let cursosActualizado = completarSemana(semanas, 4)
cursosActualizado = completarSemana(cursosActualizado, 5)
cursosActualizado = completarSemana(cursosActualizado, 6)
cursosActualizado = completarSemana(cursosActualizado, 7)
cursosActualizado = completarSemana(cursosActualizado, 8)

console.log("\n📌 ESTADO DESPUÉS DE COMPLETAR SEMANAS 4-8")
mostrarProgreso(cursosActualizado)
mostrarSemanas(cursosActualizado)
mostrarTecnologiasPendientes(cursosActualizado)
mostrarEstadoExamen(cursosActualizado)

// ── SIMULAR CURSO COMPLETO ───────────────────────
console.log("\n\n" + separador("═"))
console.log("  🏆 SIMULANDO CURSO COMPLETO...")
console.log(separador("═"))

const cursoCompleto = semanas.map(s => ({ ...s, completada: true }))

console.log("\n📌 ESTADO FINAL — CURSO 100% COMPLETADO")
mostrarProgreso(cursoCompleto)
mostrarEstadoExamen(cursoCompleto)

// ── BUSCAR SEMANA ESPECÍFICA ─────────────────────
console.log("\n🔍 BÚSQUEDA DE SEMANA")
console.log(separador())

const semanaVue = buscarSemana(semanas, 5)
if (semanaVue) {
  const { semana, tecnologia, horas, completada } = semanaVue
  console.log(`  Semana ${semana}: ${tecnologia}`)
  console.log(`  Horas: ${horas}`)
  console.log(`  Estado: ${completada ? "Completada" : "Pendiente"}`)
}

// ── ESTADÍSTICAS FINALES ─────────────────────────
console.log("\n📈 ESTADÍSTICAS DEL CURSO")
console.log(separador())

const horasPorTecnologia = semanas.reduce((acc, { tecnologia, horas }) => {
  acc[tecnologia] = (acc[tecnologia] ?? 0) + horas
  return acc
}, {})

Object.entries(horasPorTecnologia).forEach(([tech, horas]) => {
  console.log(`  ${tech.padEnd(18)}: ${horas}hs`)
})

console.log("\n" + separador("═"))
console.log("  ✅ FIN DE LA SEMANA 3 — JAVASCRIPT COMPLETADO")
console.log(separador("═") + "\n")