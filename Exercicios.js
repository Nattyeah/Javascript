// //exercício1 alert ("Olá mundo!")


// //exercício2  prompt (5+10)

// /*exercício3
// var ano = prompt("Digite seu ano de nascimento: ")
// alert 2019 - parseInt(ano)*/

// /*
// var media = (1 + 2 + 3) / 3;
// console.log(media);
// */

// ------------------------------
// Exercício Delta

// <<<<<<< HEAD
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

// ----------------------

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
// ___________________________________

// *Calcular BPM

// function calcBpm(){
//     let minutosDia = 60 * 24;
//     let batidas = 70;
//   return minutosDia * batidas;
// }

// let resultadoBpm = calcBpm();
// //console.log(resultado);
  
// function calcDiasVividos(idade){
    
  
//   return idade * 365;
// }

// let idade = prompt('Digite sua idade: ');
// let dias = calcDiasVividos(idade);
// //console.log(dias)
// console.log('Seu coração bateu: ' + resultadoBpm * dias + ' minutos')

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

//18. Escreva um algoritmo que printe o seguinte padrão no console:
// for(let i = 1; i <= 5; i++){
//   let linha = "";
//     for(let j = 1; j <= i; j++){
//       linha += i;
//     }
//     console.log(linha);
// }

//17. Escreva um algoritmo que printe o seguinte padrão no console:
// for(let i = 0; i <= 7; i++){
//     let estrela = "";
//       for(let j = 0; j <(7 - i); j++){
//         estrela += "*";
//       }
//       console.log(estrela);
//   }

/*19. Pangrama é uma palavra que possui todas as letras do alfabeto. 
Faça um algoritmo que verifique se uma palavra é um pangrama ou não.*/

// function isPangram(str) {
//     let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','y','z']
//     str = str.toLowerCase();

//     for(let i = 0; i < alfabeto.length; i++) {
//         if (str.indexOf(alfabeto[i] < 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPangram('Jane quer LP, fax, CD, giz, TV e bom whisky'));