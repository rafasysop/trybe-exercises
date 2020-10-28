
function stringComp(word,ending) {
    let ver = false;
    if(ending.length < word.length){
        if(word[word.length-1] === ending[ending.length -1] && word[word.length-2] === ending[ending.length -2]){
            ver = true;
        }
    console.log(ver);
    }else{
      console.log('Ending é maior que Word');
    }
}
stringComp("trybe", "1231232123le");