let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
console.log(celsius, fahrenheit)

function celToFar(){
    //faço o calculo da conversão de celsius para fahrenheit e armazena na var output
    let output = ( parseFloat(celsius.value) * 1.8 ) + 32;
    console.log(output, celsius.value)
    //aqui pegamos o valor de fahrenheit e atribuimos a ele o resultado do calculo que fizemos posteriormente 
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToCel(){
    let output = ( parseFloat(fahrenheit.value) - 32) * 1.8;
    celsius.value = parseFloat( output.toFixed(2));
    console.log(output);
}




// function convert() {
//     let celsius = document.getElementById("celsius").value;
//     let fahrenheit = document.getElementById("fahrenheit").value
//     console.log(celsius, fahrenheit)

//     if (isNaN(celsius) || isNaN(fahrenheit)) {
//         alert("Digite um valor válido")
//     } else if (celsius === "") {
//         celsius = (parseFloat(fahrenheit) - 32) / 1.8
//         console.log(celsius)
//     } else if (fahrenheit === "") {
//         fahrenheit = (parseFloat(celsius) * 1.8) + 32
//     }

//     document.getElementById('celsius').value = parseFloat(celsius).toFixed(1)
//     document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1)
// }

// function limpar() {
//     let clear = document.getElementById('clear').value = ""

//     let celsius = document.getElementById("celsius").value = clear;
//     console.log(celsius)
//     let fahrenheit = document.getElementById("fahrenheit").value = clear
// }