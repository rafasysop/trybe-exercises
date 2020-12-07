let test = [2, 4, 6, 7, 10, 0,];
let num = 0;
function checkMaior(testNum) {    
    for ( let maior in testNum){
        if(testNum[maior] <= num){
            num = maior;
        }
    }
    console.log(num);
}
checkMaior(test);