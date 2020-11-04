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
      let btnDiv = document.querySelector('.buttons-container');
      let btnHoliday = document.createElement('button');
      btnHoliday.id = 'btn-holiday';
      btnHoliday.innerHTML = 'Feriados';
      btnHoliday.addEventListener("click", mudaFeriado);
      btnDiv.appendChild(btnHoliday)

  }
  btnFeriado();

  function liga(feriados){
    for(i=0;i<feriados.length;i+=1){
        feriados[i].style.backgroundColor = 'rgb(190,190,190)';
    }
    onOf = true;
  }
  function desliga(feriados){
    for(i=0;i<feriados.length;i+=1){
        feriados[i].style.backgroundColor = 'rgb(238,238,238)';
    }
    onOf = false;
  }

  let feriados = document.querySelectorAll('.holiday');
  let onOf = false;
  function mudaFeriado() {
      if(onOf){
          desliga(feriados);
      } else{
          liga(feriados); 
      }         
}

function btnSexta(){
    let btnDiv = document.querySelector('.buttons-container');
    let btnFriday = document.createElement('button');
    btnFriday.id = 'btn-friday';
    btnFriday.innerHTML = 'Sexta-Feira';
    btnFriday.addEventListener("click", mudaSexta);
    btnDiv.appendChild(btnFriday)

}
btnSexta();


function ligaSexta(sextaP){
    for(i=0;i<sextaP.length;i+=1){
        sexta[i].innerHTML = 'Sextou!'
    }
    onOfFriday = true;
  }
  function desligaSexta(sextaP){
      
    for(i=0;i<sextaP.length;i+=1){
        sexta[i].innerHTML = numSexta[i]
    }
    onOfFriday = false;
  }

  let sexta = document.querySelectorAll('.friday');
  numSexta = [sexta[0].innerHTML,sexta[1].innerHTML,sexta[2].innerHTML,sexta[3].innerHTML]
  let onOfFriday = false;
  function mudaSexta() {
      if(onOfFriday){
          desligaSexta(numSexta);
      } else{
          ligaSexta(sexta); 
      }         
}
    //pega os dias com classe day
    const diasZoom = document.querySelectorAll('.day');
    for(let i of diasZoom){
        i.addEventListener('mouseover', mouseUp);
        i.addEventListener('mouseleave', mouseDown)
    } 


    function mouseUp(evt){
        //modifica o target que chamou a funçao
        evt.target.style.fontSize = '30px';   
    }
    function mouseDown(evt){
        //modifica o target que chamou a funçao
        evt.target.style.fontSize = '20px'; 
    }

    let span = document.createElement('span')
    span.innerHTML = 'Cozinhar'
    let mytask = document.querySelector('.my-tasks')
    mytask.appendChild(span);
    let divCor = document.createElement('div');
    divCor.className = 'task';
    mytask.appendChild(divCor);
    selecionado = false;
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      let corCozinhar = getRandomColor();
    divCor.addEventListener('click', function(cor){
        
        if(selecionado == false){
            divCor.className = 'task selected';
            divCor.style.backgroundColor = corCozinhar
            selecionado = true;
        } else {
            divCor.className = 'task';
            divCor.style.backgroundColor = 'white';
            selecionado = false;
        }      
    })

    
    for(let corDiaTarefa of diasZoom){
        corDiaTarefa.addEventListener('click', coloreDia);
    } 

    function coloreDia(evt){
        evt.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    }