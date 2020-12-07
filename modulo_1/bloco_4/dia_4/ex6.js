let char1 = "arara";
let char2 = "urubu";

function reverse(s) {
    for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
    return o;
}

function testaPalindromo(palavra){
    if(palavra === reverse(palavra)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

testaPalindromo(char1);
testaPalindromo(char2);

