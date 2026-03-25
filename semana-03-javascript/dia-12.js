// ══════════════════════════════════════════
// DÍA 12 — Funciones y Scope
// ══════════════════════════════════════════

// EJERCICIO 1: Funciones básicas
const saludar = (nombre = "Desarrollador") => {
  return `Hola, ${nombre}! Bienvenido al curso de Vue.js.`
}

console.log("=== EJERCICIO 1: Funciones básicas ===")
console.log(saludar("ihlabs5"))
console.log(saludar())

// EJERCICIO 2: Funciones que calculan
const calcularProgreso = (semanaActual, totalSemanas = 13) => {
  const porcentaje = (semanaActual / totalSemanas) * 100
  return Math.round(porcentaje)
}

const semanasRestantes = (semanaActual, totalSemanas = 13) => {
  return totalSemanas - semanaActual
}

const estadoExamen = (horasEstudiadas, horasNecesarias = 65) => {
  const porcentaje = (horasEstudiadas / horasNecesarias) * 100
  if (porcentaje >= 100) return "✅ Listo para el examen"
  if (porcentaje >= 70) return "🔄 Casi listo, seguí así"
  if (porcentaje >= 40) return "📖 Buen progreso"
  return "🚀 Recién empezando"
}

console.log("\n=== EJERCICIO 2: Calculadoras ===")
console.log(`Progreso: ${calcularProgreso(3)}%`)
console.log(`Semanas restantes: ${semanasRestantes(3)}`)
console.log(`Horas estudiadas: 10 → ${estadoExamen(10)}`)
console.log(`Horas estudiadas: 30 → ${estadoExamen(30)}`)
console.log(`Horas estudiadas: 50 → ${estadoExamen(50)}`)
console.log(`Horas estudiadas: 65 → ${estadoExamen(65)}`)

// EJERCICIO 3: Arrow functions de una línea
const doble = n => n * 2
const esPar = n => n % 2 === 0
const mayorDeEdad = edad => edad >= 18 ? "Mayor de edad" : "Menor de edad"
const capitalizar = texto => texto.charAt(0).toUpperCase() + texto.slice(1)

console.log("\n=== EJERCICIO 3: Arrow functions ===")
console.log(`Doble de 7: ${doble(7)}`)
console.log(`¿8 es par? ${esPar(8)}`)
console.log(`¿7 es par? ${esPar(7)}`)
console.log(`Edad 20: ${mayorDeEdad(20)}`)
console.log(`Edad 15: ${mayorDeEdad(15)}`)
console.log(`Capitalizar 'vue.js': ${capitalizar("vue.js")}`)

// EJERCICIO 4: Scope
console.log("\n=== EJERCICIO 4: Scope ===")

const variableGlobal = "Soy global, me ven todos"

const funcionConScope = () => {
  const variableLocal = "Solo existo dentro de esta función"
  console.log(variableGlobal)   // ✅ puede acceder a la global
  console.log(variableLocal)    // ✅ puede acceder a la local
}

funcionConScope()
console.log(variableGlobal)     // ✅ accesible afuera
// console.log(variableLocal)   // ❌ descomenta esta línea para ver el error

// EJERCICIO 5: Closure — generador de mensajes
console.log("\n=== EJERCICIO 5: Closure ===")

const crearMensajero = (tecnologia) => {
  let diasEstudiados = 0

  return {
    estudiar: () => {
      diasEstudiados++
      console.log(`Día ${diasEstudiados} estudiando ${tecnologia}`)
    },
    progreso: () => {
      console.log(`Llevas ${diasEstudiados} días estudiando ${tecnologia}`)
    }
  }
}

const estudiosHTML = crearMensajero("HTML")
const estudiosVue = crearMensajero("Vue.js")

estudiosHTML.estudiar()   // Día 1 estudiando HTML
estudiosHTML.estudiar()   // Día 2 estudiando HTML
estudiosHTML.estudiar()   // Día 3 estudiando HTML
estudiosVue.estudiar()    // Día 1 estudiando Vue.js — contador independiente
estudiosHTML.progreso()   // Llevas 3 días estudiando HTML
estudiosVue.progreso()    // Llevas 1 días estudiando Vue.js