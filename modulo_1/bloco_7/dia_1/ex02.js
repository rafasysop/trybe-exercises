const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenarNumeros = num => {
    num.sort((a, b) => a - b);
    console.log(num);
}


 ordenarNumeros(oddsAndEvens);