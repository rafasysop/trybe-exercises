/* 
Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor 
for positivo, "negative" se for negativo e "zero" caso contrário. 
*/


let x = "positivo";

function testVar(name){
    if(name == 'positivo'){
        return "positive";
    }else if(name == 'negativo'){
        return "negative";
    }else{
        return "zero"
    }    
}
testVar(x)