/* 
Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, 
o programa deve retornar uma mensagem de erro.
*/


let x = 45;
let y = 45;
let z = 90;
let soma = x + y + z;

function testTri(sum){
    if(sum === 180){
        return true;
    }else{
        return false
    }    
}

testTri(soma)