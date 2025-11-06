const monto=850000



const tasaPromedio = (anio1,anio2,anio3) =>{
    tasapromedio= (anio1 + anio2+ anio3)/3
    return tasapromedio
}

const inversionAnioCompleto = (tasapromedio,monto) =>{
    montoFinal=((tasapromedio/100) + 1 ) * monto  
    return montoFinal
}

const inversionPorTrimestre = (tasaTrimestre,monto) =>{
    

    montoTrimestre=((tasaTrimestre/100) + 1 ) * monto  



    return montoTrimestre
}


const inversionTotalCuatrimestre = (tasapromedio) =>{
    tasaTrimestre=tasapromedio/4;
    let contador=0

    inversionTotalFinal= 850000
    while (contador<3){
       const inversion= inversionPorTrimestre (tasaTrimestre,inversionTotalFinal)

       inversionTotalFinal= inversion

        contador++
    }

    return inversionTotalFinal
}