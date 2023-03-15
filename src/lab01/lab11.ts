function altura(velocidadeInicial: number, aceleração: number, tempoSegundos: number): number {
    let distanciaAltura = (velocidadeInicial*tempoSegundos )+ (aceleração * tempoSegundos**2 )/2;

    return distanciaAltura;
}

console.log (altura (0, 9.8, 7));

