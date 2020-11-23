const longestWord = word => {
    const longest = word.split(' ')
    let maiorPalavra = '';
    longest.forEach(element => {
        if(element.length > maiorPalavra.length) {
            maiorPalavra = element;
        }
    });
    console.log(maiorPalavra);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'