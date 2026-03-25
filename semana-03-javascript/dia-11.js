// ══════════════════════════════════════════
// DÍA 11 — Variables, Tipos y Operadores
// ══════════════════════════════════════════

// EJERCICIO 1: Tu perfil como desarrollador
const nombreUsuario = "ihlabs5"
const semanaActual = 3
const horasEstudiadas = 10
const certificacionObjetivo = "Vue.js Mid-Level"
const estaEstudiando = true

console.log("=== MI PERFIL ===")
console.log(`Usuario: ${nombreUsuario}`)
console.log(`Semana actual: ${semanaActual} de 13`)
console.log(`Horas estudiadas: ${horasEstudiadas}`)
console.log(`Objetivo: ${certificacionObjetivo}`)
console.log(`¿Está estudiando? ${estaEstudiando}`)

// EJERCICIO 2: Calcular progreso
const totalSemanas = 13
const porcentaje = (semanaActual / totalSemanas) * 100
console.log("\n=== MI PROGRESO ===")
console.log(`Progreso: ${Math.round(porcentaje)}%`)
console.log(`Semanas restantes: ${totalSemanas - semanaActual}`)

// EJERCICIO 3: Operadores de comparación
const horasNecesarias = 65
const horasActuales = 10
const tieneHorasSuficientes = horasActuales >= horasNecesarias
const estado = tieneHorasSuficientes ? "¡Listo para el examen!" : "Seguí estudiando"

console.log("\n=== ESTADO DEL EXAMEN ===")
console.log(`Horas necesarias: ${horasNecesarias}`)
console.log(`Horas completadas: ${horasActuales}`)
console.log(`¿Suficientes horas? ${tieneHorasSuficientes}`)
console.log(`Estado: ${estado}`)

// EJERCICIO 4: Strings y sus métodos
const tecnologia = "vue.js"
console.log("\n=== TECNOLOGÍA ===")
console.log(`Original: ${tecnologia}`)
console.log(`Mayúsculas: ${tecnologia.toUpperCase()}`)
console.log(`Longitud: ${tecnologia.length} caracteres`)
console.log(`¿Contiene 'vue'? ${tecnologia.includes("vue")}`)
console.log(`Reemplazado: ${tecnologia.replace("vue", "Vue")}`)

// EJERCICIO 5: Nullish coalescing
const nombreDelPerfil = null
const nombreMostrado = nombreDelPerfil ?? "Desarrollador Anónimo"
console.log("\n=== NULLISH ===")
console.log(`Nombre mostrado: ${nombreMostrado}`)