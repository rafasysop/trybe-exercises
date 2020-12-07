let test = [2, 3, 6, 7, 10, 1];
let num = 0;
function checkMaior(testNum) {    
    for ( let maior in testNum){
        if(testNum[maior] >= num){
            num = maior;
        }
    }
    console.log(num);
}
checkMaior(test);