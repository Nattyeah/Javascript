//1. Percorrer array e printar valor no console
// let array = [1,5,8,10];
// for (let i = 0; i < array.length; i++) {
    
// }
// console.log(array)

//2. Inverter ordem do for e printar valores
//   let array = [1,5,8,10];
//     for (let i = array.length -1; i >= 0; i--)
    
// console.log(array[i]);

//3. Localizar índice de valor da array
// let array = [1,5,8,10];
// for (let i = 0; i < array.length; i++){

// if(array[i] === 8) {
//     console.log(i);
// }
// }

  
//4. Escreva uma função comprimentoMedioPalavras que receba duas strings e devolva o comprimento médio de ambas as strings.
// function comprimentoMedioPalavras(a,b){
//     return (a.length + b.length) / 2;
       
// }

// console.log(comprimentoMedioPalavras('Pêra', 'Maçã'));

//5. Escreva uma função chamada pegaElemento.
// Dado um array e um inteiro, pegaElemento devolve o valor de acordo com o inteiro dado, dentro do array fornecido.
// Se o array tiver um comprimento de 0, ele deve retornar undefined.
// function pegaElemento(num, array){
//     for (let i = 0; i <= num.length; i++){
//     if(i === array){
//         return(num[i])
//     }
//     }
// }
// console.log(pegaElemento([5,3,7,8], 2))

//6. Escreva uma função chamada credencialEhValida.
// Dado um nome e uma senha, credencialEhValida retorna true se o nome contiver mais do que 3 caracteres e a senha, 
//pelo menos 8 caracteres. Caso contrário, retorna false.
// function credencialEhValida(name, password){
//     if(name.length >= 3 && password.length >= 8) {
//         return true;
//     } else {
//         return false;
//     }
//     }
// console.log(credencialEhValida('Nataly', '12345678'));

//7. Escreva uma função que receba uma array como parâmetro e devolva outra, mas sem elementos repetidos.

// function numerosVarios(array){
//     const arr = [];
//     for(i = 0; i < array.length; i++){
//         for(j = 1; j <= array.length; j++){

//             if(array.indexOf(array[i] != arr.indexOf[j])){

//         arr.push(array[i])
//             }
//             return  
//         }
//         }
// }
// console.log(numerosVarios([45, 765, 23, 76, 43, 65, 2345, 677, 5, 34, 22, 546, 77, 4355, 5667, 45, 56, 7, 4, 755, 45]));

// VALIDAÇÃO DE CARTÃO DE CRÉDITO (ALGORITMO DE LUHN)
// Nesse exercício, você fará a validação de números de cartão de crédito utilizando o algoritmo de Luhn:
// 1) Retire o último dígito do número. Ele é o verificador;
// 2) Escreva os números na ordem inversa;
// 3) Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
// 4) Some todos os números;
// 5) O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados pra obter um módulo 10.
// 6) O cartão será válido se os números somados % 10 === 0.
let cartao = "4532841148586221";
let resultado = cartao.split('')
let ultimoDigito = resultado.pop()
    resultado.reverse()
    resultado.forEach(function digitosImpares(digitos){
let i = 0;
        if(i % 2 === 1){
    return resultado[i] *= 2;
            }
        console.log(resultado)
    })
    
