// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for(i=0; i < numbers.length ; i++) {
    soma = soma + numbers[i];
    media = soma / numbers.length;
}


console.log(media);