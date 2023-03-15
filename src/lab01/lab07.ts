import { toASCII } from "punycode";

function conversaoHorasMinutos ( minutos: number, hora: number) : number {
    let saberMinutos = hora*60 + minutos; 

return saberMinutos; 

}

console.log (conversaoHorasMinutos (45, 3));
