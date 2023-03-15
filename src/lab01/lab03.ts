function vCilindro (raio: number, altura: number): number {
    let total = 3.14 * raio**2 * altura;

    return total*1000;
}

console.log (vCilindro (5, 15));