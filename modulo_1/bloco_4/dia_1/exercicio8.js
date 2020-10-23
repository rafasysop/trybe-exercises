/*
Escreva um programa que defina três números em variáveis
no seu começo e retorne true se pelo menos uma das três for 
par. Caso contrário, ele retorna false.
Bonus: use somente um if.
*/

let a = 2;
let b = 3;
let c = 9;

if( a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
    console.log(true);
    return true;
}else {
    console.log(false);
    return false;
}

