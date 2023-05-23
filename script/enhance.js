
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// Parsing Parameters
function paser(){
    var url = window.location.search.replace('?','');
    var params = {};
    var urlArray = url.split('&');

    for(var i in urlArray){
      var param = urlArray[i].split('=');
      params[param[0]] = param[1]; 
    }
    return params;
}

var pag = paser();
const schoolname = pag["name"];
const schoolcode  = pag["code"];


function setschool(){
    const title = document.getElementById('schoolname');
    title.innerHTML = decodeURIComponent(schoolname);
}


// Create local storage with school code
function createStorage(key, value){
    if(!localStorage.getItem(key)) {
        localStorage.setItem(key, value);
    }
}

let randper = 80;
let randint = 0;

const randlist = [
    ['./image/item/item1.png', '상품1', 250],
    ['./image/item/item1.png', '상품2', 500],
    ['./image/item/item1.png', '상품3', 750],
    ['./image/item/item1.png', '상품4', 1000],
    ['./image/item/item1.png', '상품5', 1500]
]

function randomgo(){
    randvalue = rand(0, 100);

    // 확률은 처음 80%

    // 성공 시 확률은 (((15.127 / (등급 * 1.417)) - (0.24 * 등급)) + 3.1)% 감소 됨
    // 1번째 등급은 (((15.127 / 1 * 1.417) - (0.24 * 1)) + 3.1)이라 13.53% 감소 됨
    // 2번째 등급은 (((15.127 / 2 * 1.417) - (0.24 * 2)) + 3.1)이라 7.95% 감소 됨

    // 그 이후 확률은 2.5% 이하로 작아지지 않음
    // 2.5% 이하가 반복될 경우 랜덤하게 2.5 ~ 5%까지 확률 상승이 가능

    // 실패 시에는 첫 번째 아이템으로 이동
    // 확률은 절대 복귀되지 않음

    if(randint != 4){
        if(randvalue <= randper){
        randper -= (((15.127 / ((randint + 1) * 1.417)).toFixed(2) - 0.24) + 3.1);
        randint += 1;
        } else {
            randint = 0;
        }

        if(randper <= 2.5){
            randper = rand(2.5, 5);
        }

        setbase(randlist[randint][0], randlist[randint][1]);

        document.getElementById("scorename").value = randlist[randint][2];
        persent();
    } else {
        alert('이미 최고 등급 입니다!');
    }
}

function setbase(img, text){
    document.getElementById('itemimg').src = img;
    document.getElementById('itemname').innerHTML = text;
}

function persent(){
    document.getElementById("persent").innerHTML = '현재 확률 : ' + randper + '%';
}

setschool();
persent();
setbase('./image/item/item1.png', '상품1');