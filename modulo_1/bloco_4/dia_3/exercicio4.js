let n = 10;
let space = " ";
let char = "*";
let line = "";
let meio = Math.ceil(n/2)
if(n % 2 != 0){
    meio = Math.ceil((n+1)/2)
}
esquerda = meio;
direita = meio;



for(i = 1; i <= meio;i += 1){
    for(j=1; j <= n; j += 1){
        if(j >= direita && j <= esquerda){
            line += char;
        } else {
            line += space;
        }
    }
    console.log(line);
    line = "";
    direita -= 1
    esquerda +=1


}
