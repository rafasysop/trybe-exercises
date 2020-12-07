// Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;

let numbers = [];

for(let i=1 ; i<=25 ; i++){
    numbers.push(i);
}
for(i =0; i <numbers.length;i++){
    let divisao = Number(numbers[i]) /2;
    console.log(divisao)
}