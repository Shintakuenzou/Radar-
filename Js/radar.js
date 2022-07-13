let via = document.getElementById('velocidadeVia');
let velocidadeDoVeiculo = document.getElementById('velocidadeVeiculo');
console.log(via);
console.log(velocidadeDoVeiculo);



function relatorio() {
    let velocidadeDaVia = via.value;
    let velocidadeCar = velocidadeDoVeiculo.value;
    velocidadeDaVia = parseInt(velocidadeDaVia);
    velocidadeCar = parseInt(velocidadeCar);
    console.log("A velocidade da via é: " + velocidadeDaVia + " Km/h");
    console.log("A velocidade do carro é: " + velocidadeCar + " Km/h");

    let formula1 = 0.2 * velocidadeDaVia + velocidadeDaVia
    // console.log(formula1);

    let formula2 = 0.5 * velocidadeDaVia + velocidadeDaVia
    // console.log(0.5 * velocidadeDaVia + velocidadeDaVia)

    if (velocidadeCar <= velocidadeDaVia) {
        console.log("Respeitando a velocidade da via")
    } else if (velocidadeCar > velocidadeDaVia && velocidadeCar <= formula1) {
        window.open('../Html/multa_media.html')
        
    } else if (velocidadeCar > velocidadeDaVia && velocidadeCar <= formula2) {
        window.open('../Html/multa_grave.html')
        console.log("Grave")
    } else if (velocidadeCar > velocidadeDaVia && velocidadeCar > formula2) {
        window.open('../Html/multa_gravissima.html')
        console.log('gravissima');
    } else {
        validate()
    }
}

function validate() {
    const firtstInput = document.getElementById('velocidadeVia')
    const secondInput = document.getElementById('velocidadeVeiculo')

    if (!firtstInput.value && !secondInput.value) {
        firtstInput.classList.add('invalid')
        secondInput.classList.add('invalid')
    }
}

// Data
const month = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Auagostoust","Setembro","outubro","Novembro","Dezembro"];
const d = new Date();
const data = d.getDate()
let nome = month[d.getMonth()];
let year = d.getFullYear()
let hour = d.getHours();
let minutes = d.getMinutes();

document.getElementById('data_emissão').innerHTML = `${data} / ${nome} / ${year}`

document.getElementById('horas').innerHTML = `${hour} : ${minutes}`