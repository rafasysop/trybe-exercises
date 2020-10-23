/*
Faça um programa que retorne o maior de dois números. Defina no começo do programa 
duas variáveis com os valores que serão comparados.
*/

// definindo as variaveis
let a = 22;
let b = 7;

// criando a funçao
function numMaior(x,y){
   
    if(a > b){
         //condição se a for mmaior que b
        return a;
    } else{
        //condição caso a nao seja maior que b
        return b;
    }
}
//chama a funçao
numMaior(a,b);