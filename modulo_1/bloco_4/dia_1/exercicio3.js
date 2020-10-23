/* 
Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis 
com os valores que serão comparados.
*/

/*
Faça um programa que retorne o maior de dois números. Defina no começo do programa 
duas variáveis com os valores que serão comparados.
*/

// definindo as variaveis
let a = 22;
let b = 7;
let c = 34

// criando a funçao
function numMaior(x,y){
   
    if(a > b && a > c){
         //condição se a for mmaior que b e maior que c
        return a;
    } else if ( b > a && b > c) {
        //condição caso b seja maior que a e maior que c
        return b;
    } else {
        //condiçao caso nem b e nem a seja maior que c
        return c;
    }
}
//chama a funçao
numMaior(a,b,c);