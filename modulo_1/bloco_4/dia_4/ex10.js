let intArray = [2, 3, 2, 5, 8, 2, 3];


function testRepete(inteiro) {
    let contRep = 0;
    let numRep;
    for (let i = 0; i < inteiro.length; i += 1) {
        let sum = 0;
        for (let j = 0; j < inteiro.length; j += 1) {
            if (inteiro[i] == inteiro[j]) {
                sum += 1;
            }
        }
        if (sum > contRep) {
            contRep = sum;
            numRep = inteiro[i];
        }
    }
    console.log(numRep)
    }

testRepete(intArray); 