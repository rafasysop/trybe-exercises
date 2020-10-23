/* 
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

*/


let notaDada = 59;

function testNota(num){
       if(num < 0 || num > 100){
           console.log(err)
           return Error
        } else if(num < 50){
           console.log('F');
           return "F";
        } else if(num < 60){
            console.log("E");
            return "E";
        } else if(num < 70){
            console.log("D");
            return "D";
        } else if(num < 80){
            console.log("C");
            return "C";
            
        } else if(num < 90){
            console.log("B");
            return "B";
        } else if(num <= 100){
            console.log("A");
            return "A";
        } 
}

testNota(notaDada);