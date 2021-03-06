function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  function criaClasse(daysNum,liDays){
    if(daysNum == 25){
        liDays.className = 'day holiday friday';
    } else if(daysNum == 24 || daysNum == 31){
        liDays.className = 'day holiday';
    }else if(daysNum == 4 || daysNum == 11 || daysNum == 18){
        liDays.className = 'day friday';
    }else{
        liDays.className = 'day';
    }
  }

  function criarDiasdoMes(){
      //Cria os dias do mês de Dezembro
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let ulDays = document.querySelector('#days');
    for(let i = 0; i<dezDaysList.length;i += 1){
        let daysNum = dezDaysList[i];
        let liDays = document.createElement('li');
        liDays.innerHTML = daysNum;
        criaClasse(daysNum, liDays);
        ulDays.appendChild(liDays);
    };
  };

  criarDiasdoMes();

  function btnFeriado(){
      //Botão de Feriado
      let btnDiv = document.querySelector('.buttons-container');
      let btnHoliday = document.createElement('button');
      btnHoliday.id = 'btn-holiday';
      btnHoliday.innerHTML = 'Feriados';
      btnHoliday.addEventListener("click", mudaFeriado);
      btnDiv.appendChild(btnHoliday)

  }
  btnFeriado();

  function liga(feriados){
      // Liga backgroud dos feriados
    for(i=0;i<feriados.length;i+=1){
        feriados[i].style.backgroundColor = 'rgb(190,190,190)';
    }
    onOf = true;
  }
  function desliga(feriados){
      // Desliga backgroud dos feriados
    for(i=0;i<feriados.length;i+=1){
        feriados[i].style.backgroundColor = 'rgb(238,238,238)';
    }
    onOf = false;
  }

  let feriados = document.querySelectorAll('.holiday');
  let onOf = false;
  function mudaFeriado() {
      // liga ou desliga o feriado
      if(onOf){
          desliga(feriados);
      } else{
          liga(feriados); 
      }         
}

function btnSexta(){
    //Botao Sextou!
    let btnDiv = document.querySelector('.buttons-container');
    let btnFriday = document.createElement('button');
    btnFriday.id = 'btn-friday';
    btnFriday.innerHTML = 'Sexta-Feira';
    btnFriday.addEventListener("click", mudaSexta);
    btnDiv.appendChild(btnFriday)

}
btnSexta();


function ligaSexta(sextaP){
    //imprime sextou
    for(i=0;i<sextaP.length;i+=1){
        sexta[i].innerHTML = 'Sextou!'
    }
    onOfFriday = true;
}
function desligaSexta(sextaP){
    //resgada os dias do mes quando desliga o Sextou
    for(i=0;i<sextaP.length;i+=1){
        sexta[i].innerHTML = numSexta[i]
    }
    onOfFriday = false;
  }

  let sexta = document.querySelectorAll('.friday');
  numSexta = [sexta[0].innerHTML,sexta[1].innerHTML,sexta[2].innerHTML,sexta[3].innerHTML]
  let onOfFriday = false;
  function mudaSexta() {
      // liga ou desliga sextou
      if(onOfFriday){
          desligaSexta(numSexta);
      } else{
          ligaSexta(sexta); 
      }         
}
    //pega os dias com classe day para dar zoom
const diasZoom = document.querySelectorAll('.day');
for(let i of diasZoom){
    i.addEventListener('mouseover', mouseUp);
    i.addEventListener('mouseleave', mouseDown)
} 


function mouseUp(evt){
    //aumenta o tamanho do dia
    evt.target.style.fontSize = '30px';   
}
function mouseDown(evt){
    //diminui o tamanho do dia
    evt.target.style.fontSize = '20px'; 
}
let colors = [];
let keyColor = 0;
function addSpanCor(text){
    //Cria o Span e a div da Tarefa
        
    let divCor = document.createElement('div'); 
    let span = document.createElement('span');  
    span.innerHTML = text;
    
    let mytask = document.querySelector('.my-tasks');
    mytask.appendChild(span);
    
    divCor.className = 'task';
    
    mytask.appendChild(divCor);
    mytask.appendChild(document.createElement('br'));
    
    let selecionado = false;
    divCor.addEventListener('click', function (){
        //Funçao que altera a cor do item caso selecionado
        let verificaSelected = document.querySelectorAll('.selected');
        if(selecionado == true){
            divCor.className = 'task';
            divCor.style.backgroundColor = 'white';
            selecionado = false;
            
            
        } else {
            if(verificaSelected.length >= 1){
                //caso haja mais de um selecionado da erro
                return alert('Só pode ter um Campo Selecionado!');
            }
                divCor.className = 'task selected';
            
            if(!divCor.id){
                //Cria um Id e um Objeto para cada cor
                colors.push(
                    {
                        'key': keyColor, 'color': getRandomColor(),
                    }
                );
                keyColor++
                divCor.id = keyColor-1; 
                
            }
            divCor.previousSibling.style.color = colors[divCor.id].color
            divCor.style.backgroundColor = colors[divCor.id].color; 
            selecionado = true;
        } 
                
        })
}      

function getRandomColor() {
    //Função para gerar cor Aleatória
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

      


for(let corDiaTarefa of diasZoom){
        //colere dia
        corDiaTarefa.addEventListener('click', coloreDia);
    } 

function coloreDia(evt){
    evt.target.style.color = document.querySelector('.selected').style.backgroundColor;
}
    
let btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', adicionarTarefa);
function adicionarTarefa(){
    //Adicionar nova Tarefa
    let textComp = document.querySelector('#task-input').value;
    if(textComp == null || textComp == ''){
        alert('Favor Preencher com algum compromisso.');
    }
    
    addSpanCor(textComp);
    textComp = document.querySelector('#task-input').value = '';
}