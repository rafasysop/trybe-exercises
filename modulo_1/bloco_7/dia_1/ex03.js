console.log(`
Calculando Fatorial de um numero:`);
calcFatorial();
function calcFatorial() {
    const number = 4;
    let fatorial = 1;
    for (let index = 1; index <= number; index += 1) {
        fatorial = fatorial * index;
        console.log(fatorial);
    }
}
console.log(`
Forma Recursiva:`);
calcFatorialRecursive();
function calcFatorialRecursive() {
    const number = 4;
    let fatorial = 1;
    for (let index = number; index >= 1; index -= 1) {
        fatorial = fatorial * index;
        console.log(fatorial);
    }
}