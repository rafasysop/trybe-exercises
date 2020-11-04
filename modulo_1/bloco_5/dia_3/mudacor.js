let caixaUm = document.querySelector(".caixa1");
let caixaDois = document.querySelector(".caixa2");
let mudaCor = 0;
function trocaCor() {
  if(mudaCor == 0){
    caixaDois.style.backgroundColor = "cyan";
    mudaCor = 1;
  } else {
    caixaDois.style.backgroundColor = "#FFF";
    mudaCor = 0;
  }
  
}
//Crie seu event listener abaixo:

caixaUm.addEventListener("click", trocaCor);