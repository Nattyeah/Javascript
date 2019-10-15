/*2. Faça um algoritmo que imprima apenas os números ímpares de 1 a 100; (do-while)
let i = 0;
do {
        i++;
    if (i % 2 !== 0){
        console.log(i);
    }
}
while (i < 100);
//3. Dados dois números calcule o MDC deles.
let mdc = 1;
let divisor = 2;
let x = 54;
let y = 90;

while(x > 1 && y > 1){
    if(x % divisor === 0 && y % divisor === 0){
        mdc *= divisor; // mdc = mdc * divisor;
        x /= divisor;
        y /= divisor;
        console.log(x + ' ' + y + '|' + divisor);
    }
    else if (x % divisor === 0){
        x /= divisor;
        console.log(x + ' ' + y + '|' + divisor);
    }
    else if (y % divisor === 0){
        y /= divisor;
        console.log(x + ' ' + y + '|' + divisor);
    }
    else {
        divisor++;
        console.log(x + ' ' + y + '|' + divisor);
    }
}*/
//4. Faça um algoritmo que imprima a soma dos números múltiplos de 3 e 5, menores que 1000. (termimar esse)
/*function geraExibeMultiplos(){
    let multi5 = 5;
    let multi3 = 3;
    let numeros = limite1 +(int)( limite2*Math.random());
    while (numeros%3==0) {
    multi3 = multi3 + numeros;
    }
     while (numeros%5==0){
    multi5 = multi5 + numeros;
     }
    }
    
    let i = 0;
    do {
            i++;
        if (i % 2 !== 0){
            console.log(i);
        }
    }
    while (i < 100);
    */
//6. Faça um programa que leia 5 números e informe o maior número.
/*let arr = [15, 2, 47, 88, 31];
let max = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max =arr[i];
    }
}

console.log(max);
*/
//7. Faça um Programa que leia um array de 5 números inteiros e mostre-os. (Fazer com a mamãe)
/*let arr = [8,5,43,97,15];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
*/

/*8. O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. 
Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o número de itens que 
o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas contar quantos itens o 
cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de
 preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:*/

//for(let i = 1; i <= 50; i++){
//  console.log(i + ' R$ ' + (i*1.99));
//}

/*9. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. 
Um número primo é aquele que é divisível somente por ele mesmo e por 1*/

/*let numero = 14;
let divisores = 0;

for(let i = 1; i <= numero; i++){
   if(numero % i === 0){
       divisores++;
   }
}

if(divisores === 2){
    console.log(numero + ' é primo');
} else {
   console.log(numero + ' não é primo');
}
*/
/*10. A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... 
Faça um programa capaz de gerar a série até o n−ésimo termo.*/

/*function calcFibonacciSequence(n){
    if(n <= 0){
        return [];
    } else if(n === 1){
        return [0];
    } else if(n === 2) {
        return [0, 1]
    } else {
        let fibonacciSeq = [0,1];
        let n1 = 0;
        let n2 = 1;

        for(let i = 3; i <= n; i++) {
            let nextNumber = n1 + n2;
            n1 = n2;
            n2 = nextNumber;
            fibonacciSeq.push(nextNumber);
        }
        return fibonacciSeq;
    }
    }
console.log(calcFibonacciSequence()) */

/*14. Para calcular o fatorial de um número, você multiplica todos os números menores que ele até 1. Por exemplo, 
10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1. Faça um algoritmo que dado um número calcule o fatorial do mesmo.*/

// function calcularFatorial(n) {
//     let num = 1;
//     for (let i = 1; i <= n; i++) {
//         num = i * num;
//         console.log(num);
//     }
// }
// calcularFatorial(10);

//15. Faça uma função que receba uma quantidade x e retorne um array com x números randomicos.
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array.push(Math.floor(Math.random() * 100) + 1);
// }

// console.log(array);

//16. Faça um algoritmo que sorteie cara (0) ou coroa (1) n vezes. E no fim mostre quantas vezes deu cara e quantas coroa.

// let qnt = 5;
// let cara = 0;
// let coroa = 0;

// for (let i = 0; i < qnt; i++){
//     if(Math.floor(Math.random()*2) == 0){
//         //O número 2 serve como parâmetro pra ir de 0 a 1 q satisfaz o parametro de coroa
//         cara++
//     }else{
//         coroa++
//     }
// }


// console.log('Cara ' + cara + ' e coroa ' + coroa)

/*let tabuada = prompt('Insira um número: ')

while (tabuada < 10) {
    tabuada++;
   if (tabuada == 3) {
      continue;
   }
   tabuada += i;
}
*/
// function tabuada() {
  
//     let i = 1;
//     let j = 0;
    
//     for(let i = 0; i < 11; i++) {
//        for(let j = 0; j < 11; j++) {
//            let result = i * j;
//            console.log(j + "x" + i + " = " + result + " |" );
//            j++;       
//            if(conta == 10) {
//                tabuada;
//                i++;
//                j = 0;
//            }
//            }
//     }
//     }
//     console.log(tabuada(5));

// *exercício 1
// ----------------------------------------------
// function calcularResultadoJogo(pontos){
//   if(pontos === 3){
//     return 'Seu Time Venceu';
//   }else if(pontos === 1){
//     return 'Seu Time Empatou';
//   }else if(pontos === 0){
//     return 'Chupa perdedor';
//   }
//   }
// console.log(calcularResultadoJogo(3));
// ----------------------------------------------
// *exercício 2
// ----------------------------------------------
// function verificarPalindromos(str){
//   let resultado = str.split('').reverse().join('');
 
//   if (str === resultado){
//     return resultado + ' Isso é um Palíndromo';
//   } else {
//     return resultado + ' Isso não é um Palíndromo';
//   }
  
// }

// console.log(verificarPalindromos('arara'));
// console.log(verificarPalindromos('dog'));
// ----------------------------------------------
// *exercício 3
// ----------------------------------------------
// function calcularParouImpar(num){
//   let n = prompt('Digite um número: ');
//   let total = n/2;
//     if (n & 1){
//     alert("Impar");
//   } else {
//     alert("Par");
// alert(total);    
//   }
// }
// console.log(calcularParouImpar(n))
// ----------------------------------------------
// *exercício 4
// ----------------------------------------------
// function calcularAngulo(angulo) {
//           if (anguloAgudo >= 0 || anguloAgudo <= 90){
//         console.log("O ângulo é agudo");
//       }
//       if (anguloReto === 90);{
//         console.log("O ângulo é reto");
//       }
//       if (anguloObtuso >= 90 || anguloObtuso <= 180);{
//         console.log("O ângulo é obtuso");
//     }
//       if (anguloRaso === 0 || anguloRaso === 180);{
//         console.log("O ângulo é raso");
//     }