let ladoA = prompt("Digite um valor");
let ladoB = prompt("Digite um valor");
let ladoC = prompt("Digite um valor");

ladoA = parseInt(ladoA)
ladoB = parseInt(ladoB)
ladoC = parseInt(ladoC)


function classificarTriangulo (ladoA, ladoB, ladoC) {
    if(ladoA == ladoB && ladoB == ladoC) {
        let Equilátero = document.getElementById('demo').innerHTML = "Equilátero"
        return Equilátero
    } else if((ladoA == ladoB && ladoB != ladoC) || (ladoB == ladoC && ladoA != ladoC) ) {
        let Isosceles = document.getElementById('demo').innerHTML = "Isósceles"
        return Isosceles
    } else if(ladoA != ladoB && ladoB != ladoC){
        let Escaleno = document.getElementById('demo').innerHTML = "Escaleno"
        return Escaleno
    } else {
        let invalido = document.getElementById('demo').innerHTML = "Digite um valor válido"
        return invalido
    }
}

let triangulo = classificarTriangulo(ladoA, ladoB, ladoC)