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