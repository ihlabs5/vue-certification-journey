// ══════════════════════════════════════════
// DÍA 14 — Objetos y Desestructuración
// ══════════════════════════════════════════

// DATA — Tu perfil de desarrollador
const miPerfil = {
  usuario: "ihlabs5",
  objetivo: "Certificación Vue.js Mid-Level",
  inicio: "Marzo 2026",
  progreso: {
    semanaActual: 3,
    totalSemanas: 13,
    horasEstudiadas: 15,
    totalHoras: 65
  },
  tecnologias: {
    completadas: ["HTML", "CSS"],
    enProgreso: ["JavaScript"],
    pendientes: ["Vue.js", "Vue Router", "Pinia"]
  },
  redes: {
    github: "https://github.com/ihlabs5",
    linkedin: null
  }
}

// EJERCICIO 1: Acceso a propiedades
console.log("=== EJERCICIO 1: Acceso ===")
console.log(`Usuario: ${miPerfil.usuario}`)
console.log(`Semana: ${miPerfil.progreso.semanaActual}`)
console.log(`GitHub: ${miPerfil.redes.github}`)
console.log(`LinkedIn: ${miPerfil.redes.linkedin ?? "No configurado"}`)

// EJERCICIO 2: Desestructuración simple
console.log("\n=== EJERCICIO 2: Desestructuración ===")
const { usuario, objetivo, inicio } = miPerfil
console.log(`Usuario: ${usuario}`)
console.log(`Objetivo: ${objetivo}`)
console.log(`Inicio: ${inicio}`)

// EJERCICIO 3: Desestructuración anidada
console.log("\n=== EJERCICIO 3: Desestructuración anidada ===")
const {
  progreso: { semanaActual, totalSemanas, horasEstudiadas, totalHoras },
  tecnologias: { completadas, enProgreso, pendientes }
} = miPerfil

const porcentajeSemanas = Math.round((semanaActual / totalSemanas) * 100)
const porcentajeHoras = Math.round((horasEstudiadas / totalHoras) * 100)

console.log(`Semana: ${semanaActual} de ${totalSemanas} (${porcentajeSemanas}%)`)
console.log(`Horas: ${horasEstudiadas} de ${totalHoras} (${porcentajeHoras}%)`)
console.log(`Completadas: ${completadas.join(", ")}`)
console.log(`En progreso: ${enProgreso.join(", ")}`)
console.log(`Pendientes: ${pendientes.join(", ")}`)

// EJERCICIO 4: Función con desestructuración en parámetro
console.log("\n=== EJERCICIO 4: Función con desestructuración ===")

const mostrarResumen = ({ usuario, objetivo, progreso: { semanaActual, totalSemanas, horasEstudiadas, totalHoras } }) => {
  const pctSemanas = Math.round((semanaActual / totalSemanas) * 100)
  const pctHoras = Math.round((horasEstudiadas / totalHoras) * 100)

  console.log("─────────────────────────────")
  console.log(`  PERFIL: ${usuario}`)
  console.log(`  OBJETIVO: ${objetivo}`)
  console.log(`  SEMANAS: ${semanaActual}/${totalSemanas} (${pctSemanas}%)`)
  console.log(`  HORAS: ${horasEstudiadas}/${totalHoras} (${pctHoras}%)`)
  console.log("─────────────────────────────")
}

mostrarResumen(miPerfil)

// EJERCICIO 5: Spread — actualizar sin mutar
console.log("\n=== EJERCICIO 5: Spread ===")

const progresoActualizado = {
  ...miPerfil.progreso,
  semanaActual: 4,
  horasEstudiadas: 20
}

const perfilActualizado = {
  ...miPerfil,
  progreso: progresoActualizado
}

console.log(`Semana original: ${miPerfil.progreso.semanaActual}`)
console.log(`Semana actualizada: ${perfilActualizado.progreso.semanaActual}`)
console.log(`Horas originales: ${miPerfil.progreso.horasEstudiadas}`)
console.log(`Horas actualizadas: ${perfilActualizado.progreso.horasEstudiadas}`)

// EJERCICIO 6: Optional chaining + nullish coalescing
console.log("\n=== EJERCICIO 6: Optional chaining ===")

const { redes } = miPerfil
console.log(`GitHub: ${redes?.github ?? "No configurado"}`)
console.log(`LinkedIn: ${redes?.linkedin ?? "No configurado"}`)
console.log(`Twitter: ${redes?.twitter ?? "No configurado"}`)

// EJERCICIO 7: Array de objetos con métodos combinados
console.log("\n=== EJERCICIO 7: Array de objetos ===")

const estudiantes = [
  { nombre: "ihlabs5", semana: 3, horas: 15 },
  { nombre: "Juan", semana: 8, horas: 40 },
  { nombre: "María", semana: 13, horas: 65 },
  { nombre: "Carlos", semana: 5, horas: 25 },
]

// Agregar progreso a cada uno con map + desestructuración
const estudiantesConProgreso = estudiantes.map(({ nombre, semana, horas }) => ({
  nombre,
  semana,
  horas,
  progreso: Math.round((semana / 13) * 100) + "%",
  listo: horas >= 65
}))

// Filtrar los que están listos
const listos = estudiantesConProgreso.filter(e => e.listo)

// Mostrar resultados
estudiantesConProgreso.forEach(({ nombre, semana, progreso, listo }) => {
  const estado = listo ? "✅ Listo" : "📖 Estudiando"
  console.log(`${nombre}: Semana ${semana} — ${progreso} — ${estado}`)
})

console.log(`\nEstudiantes listos para el examen: ${listos.length}`)