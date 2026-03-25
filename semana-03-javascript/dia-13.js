// ══════════════════════════════════════════
// DÍA 13 — Arrays y sus métodos
// ══════════════════════════════════════════

// DATA — Semanas del curso
const semanasCurso = [
  { semana: 1, tecnologia: "HTML", horas: 5, completada: true },
  { semana: 2, tecnologia: "CSS", horas: 5, completada: true },
  { semana: 3, tecnologia: "JavaScript", horas: 10, completada: false },
  { semana: 4, tecnologia: "JavaScript", horas: 10, completada: false },
  { semana: 5, tecnologia: "Vue.js Core", horas: 5, completada: false },
  { semana: 6, tecnologia: "Vue.js Core", horas: 5, completada: false },
  { semana: 7, tecnologia: "Vue.js Core", horas: 5, completada: false },
  { semana: 8, tecnologia: "Vue Router", horas: 5, completada: false },
  { semana: 9, tecnologia: "Pinia", horas: 5, completada: false },
  { semana: 10, tecnologia: "Composables", horas: 5, completada: false },
  { semana: 11, tecnologia: "Proyectos", horas: 5, completada: false },
  { semana: 12, tecnologia: "Proyectos", horas: 5, completada: false },
  { semana: 13, tecnologia: "Examen", horas: 5, completada: false },
]

// EJERCICIO 1: filter — semanas completadas y pendientes
const semanasCompletadas = semanasCurso.filter(s => s.completada)
const semanasPendientes = semanasCurso.filter(s => !s.completada)

console.log("=== EJERCICIO 1: filter ===")
console.log(`Semanas completadas: ${semanasCompletadas.length}`)
console.log(`Semanas pendientes: ${semanasPendientes.length}`)

// EJERCICIO 2: map — extraer solo los nombres de tecnologías
const nombresTecnologias = semanasCurso.map(s => s.tecnologia)
// Eliminar duplicados con Set
const tecnologiasUnicas = [...new Set(nombresTecnologias)]

console.log("\n=== EJERCICIO 2: map ===")
console.log("Tecnologías del curso:", tecnologiasUnicas)

// EJERCICIO 3: reduce — total de horas
const totalHoras = semanasCurso.reduce((acc, s) => acc + s.horas, 0)
const horasCompletadas = semanasCompletadas.reduce((acc, s) => acc + s.horas, 0)

console.log("\n=== EJERCICIO 3: reduce ===")
console.log(`Total horas del curso: ${totalHoras}`)
console.log(`Horas completadas: ${horasCompletadas}`)
console.log(`Horas restantes: ${totalHoras - horasCompletadas}`)

// EJERCICIO 4: find — buscar una semana específica
const buscarSemana = (numero) => {
  const semana = semanasCurso.find(s => s.semana === numero)
  return semana ?? "Semana no encontrada"
}

console.log("\n=== EJERCICIO 4: find ===")
console.log("Semana 3:", buscarSemana(3))
console.log("Semana 7:", buscarSemana(7))
console.log("Semana 99:", buscarSemana(99))

// EJERCICIO 5: map avanzado — agregar porcentaje de progreso
const semanasConProgreso = semanasCurso.map(s => ({
  ...s,
  porcentajeCurso: Math.round((s.semana / semanasCurso.length) * 100) + "%"
}))

console.log("\n=== EJERCICIO 5: map avanzado ===")
semanasConProgreso.slice(0, 3).forEach(s => {
  console.log(`Semana ${s.semana} (${s.tecnologia}): ${s.porcentajeCurso} del curso`)
})

// EJERCICIO 6: Encadenar métodos
// Obtener las tecnologías PENDIENTES con más de 5 horas
const tecnologiasImportantes = semanasCurso
  .filter(s => !s.completada && s.horas >= 10)
  .map(s => `${s.tecnologia} (${s.horas}hs)`)

console.log("\n=== EJERCICIO 6: Encadenado ===")
console.log("Temas pendientes con 10+ horas:", tecnologiasImportantes)

// EJERCICIO 7: spread — agregar semana sin mutar
const nuevaSemana = {
  semana: 14,
  tecnologia: "TypeScript",
  horas: 5,
  completada: false
}
const cursoExtendido = [...semanasCurso, nuevaSemana]

console.log("\n=== EJERCICIO 7: spread ===")
console.log(`Curso original: ${semanasCurso.length} semanas`)
console.log(`Curso extendido: ${cursoExtendido.length} semanas`)

// RESUMEN FINAL
console.log("\n=== RESUMEN DEL CURSO ===")
console.log(`Total semanas: ${semanasCurso.length}`)
console.log(`Completadas: ${semanasCompletadas.length}`)
console.log(`Pendientes: ${semanasPendientes.length}`)
console.log(`Total horas: ${totalHoras}`)
console.log(`Horas completadas: ${horasCompletadas}`)
console.log(`Progreso: ${Math.round((horasCompletadas / totalHoras) * 100)}%`)