function getHipotenusa (altura: number, largura: number): number{
    let hipotenusa = altura**2 + largura**2;

    return Math.sqrt(hipotenusa); 
}

console.log (getHipotenusa (4.7, 7.8));
