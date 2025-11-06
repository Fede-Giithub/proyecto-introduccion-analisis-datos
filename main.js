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
const inversionTotalCuatrimestre = (tasapromedio) =>{
    const tasaTrimestre=tasapromedio/4;
    let contador=0

    inversionTotalFinal= monto
    while (contador<4){
       const inversion= inversionPorTasa (tasaTrimestre,inversionTotalFinal)

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

const Banco1 = document.getElementById("banco1")
const Banco2 = document.getElementById("banco2")
const Banco3 = document.getElementById("banco3")
let boton = document.getElementById("boton")

boton.addEventListener('click', function (){
 
})