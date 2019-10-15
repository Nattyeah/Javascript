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
//       if (anguloConcavo >= 180 || anguloConcavo <= 360);{
//         console.log("O ângulo é concavo");
//     }
//      if (anguloCompleto === 360);{
//         console.log("O ângulo é completo");
//     } if (angulo !== angulo) {
//         console.log("Esse ângulo não existe");
//     }
// }
//             console.log(calcularAngulo(180))

----------------------------------------------------

//             function calcBpm(){
//               let minutosDia = 60 * 24;
//               let batidas = 70;
//             return minutosDia * batidas;
//           }
          
//           let resultadoBpm = calcBpm();
//           //console.log(resultado);
            
//           function calcDiasVividos(idade){
              
            
//             return idade * 365;
//           }
          
//           let idade = prompt('Digite sua idade: ');
//           let dias = calcDiasVividos(idade);
//           //console.log(dias)
//           console.log('Seu coração bateu: ' + resultadoBpm * dias + ' minutos')

----------------------------------------------------

// function calcDelta(a,b,c){
//   let delta = (b**2) - (4*a*c);
//   console.log('delta: ' + delta)
  
//   return delta;
// }

// let valorDelta = calcDelta(1,5,4)


// function calcX1(a,b,delta){
//   let x1 = (-b + Math.sqrt(delta)) / (2*a);
//   console.log('x1 é: ' + x1)
  
//   return calcDelta + x1;
// }

// calcX1(1,5,valorDelta)


// function calcX2(a,b,delta){
//     let x2 = (-b - Math.sqrt(delta)) / (2*a);
//     console.log('x2 é: ' + x2);
   
//    return calcDelta + x2;
// }
// =======
// function calcDelta(a,b,c){
//   let delta = (b**2) - (4*a*c);
//   console.log('delta: ' + delta)
  
//   return delta;
// }

// let valorDelta = calcDelta(1,5,4)


// function calcX1(a,b,delta){
//   let x1 = (-b + Math.sqrt(delta)) / (2*a);
//   console.log('x1 é: ' + x1)
  
//   return calcDelta + x1;
// }

// calcX1(1,5,valorDelta)


// function calcX2(a,b,delta){
//     let x2 = (-b - Math.sqrt(delta)) / (2*a);
//     console.log('x2 é: ' + x2);
   
//    return calcDelta + x2;
// }
// >>>>>>> 0523b9892f6099d6b6ce7e137d96e797a1819475
// calcX2(1,5,valorDelta)

----------------------------------------------------

// *Nome em ordem alfabetica
// ___________________________________
// function ordemAlfabetica(str){
//   let arr = str.split('');
//   let sorted = arr.sort();
//     return sorted.join('');
  
// }

// console.log(ordemAlfabetica('nataly'));
// ____________________________________

// *Retorna iniciais
// ___________________________________
// function retornarIniciais(nameLastname){
//   let letra1 = nameLastname.substr(0,1);
//   let posicao = nameLastname.indexOf(" ");
//   let letra2 = nameLastname.substr(posicao+1,1)
       
//     return letra1 + letra2;
// }

// console.log(retornarIniciais("Nataly Lima"));
// ___________________________________

// *Sorteio de bilhetes
// ___________________________________
// function calcularBilhetes(quantidade){
//   let bilhete = Math.floor(Math.random() * quantidade);
//   return bilhete;
// }

// console.log(calcularBilhetes(420));
// ___________________________________

// *Calculo IMC
// ___________________________________
// function calcularImc(valor1, valor2){
//   let imc = valor1 / valor2**2;
//  return imc.toFixed();
// }

//  console.log(calcularImc(63, 1.63))
// _________________________

----------------------------------------------------

//exercício1 alert ("Olá mundo!")


//exercício2  prompt (5+10)

/*exercício3
var ano = prompt("Digite seu ano de nascimento: ")
alert 2019 - parseInt(ano)*/

/*
var media = (1 + 2 + 3) / 3;
console.log(media);
*/
