function distanciaPercorrida (horasManel: number, minutosManel: number, segundosManel: number, horasZe: number, minutosZe: number, segundosZe: number, distanciaManel: number) : number {
    let tempoManel = (horasManel)*60**2 + minutosManel*60 + segundosManel;
    let tempoZe = (horasZe)*60**2 + minutosZe*60 + segundosZe;

    let distanciaZe = (distanciaManel*tempoZe)/tempoManel


    return distanciaZe;
}  

console.log (distanciaPercorrida (4,2,10,1,5,0,42195));
