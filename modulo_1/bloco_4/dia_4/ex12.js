
function stringComp(word,ending) {
    let ver = false;
    if(ending.length < word.length){
        for(i =1;i<=ending.length;i++){
            if(word[word.length-i] !== ending[ending.length -i]){
                ver = false;
                break;
            }else{
                ver = true;
            }
        }


    console.log(ver);
    }else{
      console.log('Ending é maior que Word');
    }
}
stringComp("Trybe", "be");