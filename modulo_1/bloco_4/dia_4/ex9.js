let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maior = '';
function testMaior(array) {
    for( let nome in array) {
        if(array[nome].length >= maior.length ){
            maior = array[nome]
        }
     }
    console.log(maior);
}
testMaior(nomes);