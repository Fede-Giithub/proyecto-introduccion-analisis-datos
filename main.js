const monto=850000

const tasaPromedio = (anio1,anio2,anio3) =>{
    return promedio= (anio1 + anio2+ anio3)/3
}

const inversionAnioCompleto = (tasapromedio,monto) =>{
   return montoFinal=((tasapromedio/100) + 1 ) * monto
}

const inversionPorTasa = (tasaTrimestre,monto) =>{
    return  montoTrimestre=((tasaTrimestre/100) + 1 ) * monto
}

const inversionTotalTrimestre = (tasapromedio) =>{
    const tasaTrimestre=tasapromedio/4;
    let contador=0

    inversionTotalFinal= monto
    while (contador<4){
       const inversion = inversionPorTasa (tasaTrimestre,inversionTotalFinal)

       inversionTotalFinal= inversion

        contador++
    }

    return inversionTotalFinal
}
const inversionTotalPorMes = (tasapromedio) =>{
    const tasaTrimestre=tasapromedio/12;
    let contador=0

    inversionTotalFinal= monto
    while (contador<12){
       const inversion= inversionPorTasa (tasaTrimestre,inversionTotalFinal)

       inversionTotalFinal= inversion

        contador++
    }

    return inversionTotalFinal
}

const banco1_Trimestral = document.getElementById("banco1-trimestral")
const banco1_Cuatrimestral = document.getElementById("banco1-cuatrimestral")
const banco1_Anual = document.getElementById("banco1-anual")

const banco2_Trimestral = document.getElementById("banco2-trimestral")
const banco2_Cuatrimestral = document.getElementById("banco2-cuatrimestral")
const banco2_Anual = document.getElementById("banco2-anual")

const banco3_Trimestral = document.getElementById("banco3-trimestral")
const banco3_Cuatrimestral = document.getElementById("banco3-cuatrimestral")
const banco3_Anual = document.getElementById("banco3-anual")

let boton_Calcular = document.getElementById("boton-calcular")

boton_Calcular.addEventListener('click', (e) => {
 e.preventDefault()

    const banco1_TasaPromedio = tasaPromedio (parseFloat(banco1_Trimestral.value),
    parseFloat(banco1_Cuatrimestral.value),
    parseFloat(banco1_Anual.value))

    const banco2_TasaPromedio = tasaPromedio (parseFloat(banco2_Trimestral.value),
    parseFloat(banco2_Cuatrimestral.value),
    parseFloat(banco2_Anual.value))

    const banco3_TasaPromedio = tasaPromedio (parseFloat(banco3_Trimestral.value),
    parseFloat(banco3_Cuatrimestral.value),
    parseFloat(banco3_Anual.value))

    const banco1_InversionAnioCompleto = inversionAnioCompleto (banco1_TasaPromedio,monto)
    const banco2_InversionAnioCompleto = inversionAnioCompleto (banco2_TasaPromedio,monto)
    const banco3_InversionAnioCompleto = inversionAnioCompleto (banco3_TasaPromedio,monto)

    const banco1_InversionTotalTrimestre = inversionTotalTrimestre (banco1_TasaPromedio)
    const banco2_InversionTotalTrimestre = inversionTotalTrimestre (banco2_TasaPromedio)
    const banco3_InversionTotalTrimestre = inversionTotalTrimestre (banco3_TasaPromedio)

    const banco1_InversionTotalPorMes = inversionTotalPorMes (banco1_TasaPromedio)
    const banco2_InversionTotalPorMes = inversionTotalPorMes (banco2_TasaPromedio)
    const banco3_InversionTotalPorMes = inversionTotalPorMes (banco3_TasaPromedio)  

    const resultado = document.getElementById("resultado")

    resultado.innerHTML = `
  <h2>Resultados</h2>
  <p>Banco Provincia: 
  Tasa Promedio: ${banco1_TasaPromedio.toFixed(2)}%</p>
  <p>Inversión Mensual: $${banco1_InversionTotalPorMes.toFixed(2)}</p>
  <p>Inversión Trimestral: $${banco1_InversionTotalTrimestre.toFixed(2)}</p>
  <p>Inversión Anual: $${banco1_InversionAnioCompleto.toFixed(2)}</p>
  <br>
     
  <p>Banco Nación:</p>
  <p>Tasa Promedio: ${banco2_TasaPromedio.toFixed(2)}%</p>
  <p>Inversión Mensual: $${banco2_InversionTotalPorMes.toFixed(2)}</p>
  <p>Inversión Trimestral: $${banco2_InversionTotalTrimestre.toFixed(2)}</p>
  <p>Inversión Anual: $${banco2_InversionAnioCompleto.toFixed(2)}</p>
  <br>

  <p>Banco Hipotecario:</p>
  <br>
  <p>Tasa Promedio: ${banco3_TasaPromedio.toFixed(2)}%</p>
  <p>Inversión Mensual: $${banco3_InversionTotalPorMes.toFixed(2)}</p>
  <p>Inversión Trimestral: $${banco3_InversionTotalTrimestre.toFixed(2)}</p>
  <p>Inversión Anual: $${banco3_InversionAnioCompleto.toFixed(2)}</p>
`

const resultados = [
  { banco: "Banco Provincia", tipo: "Anual", monto: banco1_InversionAnioCompleto },
  { banco: "Banco Provincia", tipo: "Trimestral", monto: banco1_InversionTotalTrimestre },
  { banco: "Banco Provincia", tipo: "Mensual", monto: banco1_InversionTotalPorMes },

  { banco: "Banco Nación", tipo: "Anual", monto: banco2_InversionAnioCompleto },
  { banco: "Banco Nación", tipo: "Trimestral", monto: banco2_InversionTotalTrimestre },
  { banco: "Banco Nación", tipo: "Mensual", monto: banco2_InversionTotalPorMes },

  { banco: "Banco Hipotecario", tipo: "Anual", monto: banco3_InversionAnioCompleto },
  { banco: "Banco Hipotecario", tipo: "Trimestral", monto: banco3_InversionTotalTrimestre },
  { banco: "Banco Hipotecario", tipo: "Mensual", monto: banco3_InversionTotalPorMes },
]

    const mejorInversion = resultados.reduce((max, resultado) => resultado.monto > max.monto ? resultado : max, resultados[0]);

    const mejorOpcion = document.getElementById("mejorOpcion")

    mejorOpcion.innerHTML = `
  <h2>Mejor Opción de Inversión</h2>
  <p>Banco: ${mejorInversion.banco}</p>
  <p>Tipo de Inversión: ${mejorInversion.tipo}</p>
  <p>Monto Final: $${mejorInversion.monto.toFixed(2)}</p>
`
})