function distanciaOperarios ( operario1: number, operario2: number, anguloEntre: number): number {
    let distancia = Math.sqrt (operario1**2 + operario2**2 - (Math.cos(anguloEntre)));

    return distancia; 
}

console.log (distanciaOperarios( 40, 60, 60)); 