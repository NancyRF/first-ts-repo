function altura2 ( sombraEdificio: number, alturaPessoa: number, sombraPessoa: number) : number{
    let edificioAltura = alturaPessoa*sombraEdificio/sombraPessoa;

    return edificioAltura;
}

console.log (altura2 (36, 1.70, 1.5));