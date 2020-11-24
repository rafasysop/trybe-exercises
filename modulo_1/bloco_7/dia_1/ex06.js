const stringDeterminada = "Tryber x aqui!";
const arrayString = stringDeterminada.split('');
const parametro = 'Rafael Moura';
let retorno = '';
arrayString.forEach(element => {
    if(element === 'x'){
        element = parametro;
    }
    retorno += element;
    
});
console.log(retorno);