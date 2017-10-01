var randomNumber = Math.floor(Math.random() * 2);
window.onload = function () {
};
function redText(){
    var allParagraphs = document.getElementsByTagName("p");
    console.log(allParagraphs);
    for(var i = 0 ;i<allParagraphs.length;i++){
        allParagraphs[i].style.backgroundColor = 'red';
    }
}

function shadowImg() {
    var allPictures = document.getElementsByTagName("img");
    console.log(allPictures);
    for(var i = 0 ;i<allPictures.length;i++){
        allPictures[i].style.boxShadow = '10px 10px 5px #888';
    }
}

function addNumberParagrap() {
    var allParagraphs = document.getElementsByTagName("p");
    console.log(allParagraphs);

    for(var i = 0 ;i<allParagraphs.length;i++){
        var number = i;
        console.log(number);
       allParagraphs[i].innerText+=""+number;
        var numberId = document.getElementsByClassName('number');
        numberId.innerHTML = i;

    }
}

var counter = 0;
function increment(){
    counter = parseInt(counter)+parseInt(1);
    var item = document.getElementById("counter");
    item.innerHTML=+counter;
    console.log(counter);
}


function mathPow(){
    var a = document.getElementById('number');
    var b = document.getElementById('pow');
    var st = 1;
    for(var i=0;i<b.value;i++){
        st*=a.value;
    }
    alert(" "+a.value+" в "+"степени "+b.value+" = "+st  );
    b.value = '';
    a.value = '';
}

function underLine(nameTag){
    console.log("test");
    console.log(nameTag.value);
    var allNameTag = document.getElementsByTagName(nameTag.value);
    console.log(allNameTag);
    for(var i = 0 ; i < allNameTag.length;i++){
        allNameTag[i].style.textDecoration= 'underLine';
    }
}

function reg(yourAge) {
    (yourAge.value >=16)? alert('Добро пожаловать'):  alert('Вы еще молоды');
    yourAge.value='';
}

function regAge(yourAge) {
   if(yourAge.value == undefined ||yourAge.value == '' || yourAge.value == null ){
       alert("Введите возраст");
   }
    else if(yourAge.value >=16){
       alert('Добро пожаловать');
   }
    else{
       alert('Вы еще молоды');
   }
}
function numberOperation(number) {
    if (number.value >= 10) {
        return Math.pow(number.value, 2);
    }
    else if (number.value <= 7) {
        return 'Число меньше 7';
    }
    else if (number.value == 8) {
        return 8;
    }
    else if (number.value == 9) {
        return 9;
    }
    number.value='';
}
console.log("randomNumber",randomNumber);
var tryStep = 0;
function guessNumber(yourNumber) {
    if(tryStep <=2){
        if(yourNumber.value == randomNumber){
                alert("Вы угадали за "+(tryStep+1)+" попытку");
                document.getElementById('play').disabled = true;
        }
        else if(yourNumber.value > randomNumber){
            alert("Введите число поменьше");
        }
        else{
            alert("Введите число побольше");
        }
        tryStep = tryStep+1;
    }

    else{
        alert("Вы не угадали число за 3 попытки");
        document.getElementById('play').disabled = true;
    }
    console.log("poputka = ",tryStep);
    yourNumber.value = '';

}

