// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for(i=0; i < numbers.length ; i++) {
    soma = soma + numbers[i];
    media = soma / numbers.length;
}


console.log(media > 20 ? "valor maior que 20" : "valor menor ou igual a 20");