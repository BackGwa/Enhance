
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
    ['./image/item/item5.png', '꽝', 500],
    ['./image/item/item2.png', '+ 츄파춥스', 1000],
    ['./image/item/item3.webp', '+ 트윅스', 1500],
    ['./image/item/item4.png', '+ 크런키', 2500]
]

function randomgo(){
    randvalue = rand(0, 100);

    // 확률은 처음 80%

    // 성공 시 확률은 (((15.137 / (등급 * 1.427)) - (0.236 * 등급)) + 2.97) + 등급 * 2.4% 감소 됨
    // 1번째 등급은 9.394% 감소 됨

    // 그 이후 확률은 4% 이하로 작아지지 않음
    // 4% 이하가 반복될 경우 랜덤하게 4 ~ 8%까지 확률 상승이 가능

    // 실패 시에는 첫 번째 아이템으로 이동
    // 확률은 절대 복귀되지 않음

    if(randint != 3){
        if(randvalue <= randper){
            randper -= (((15.137 / ((randint + 1) * 1.427)).toFixed(2) - 0.236) + 2.97) + randint * 2.4;
            randint += 1;
            document.getElementById('gobtn').value = '성공!';
            setTimeout(() => {
                document.getElementById('gobtn').value = '고!';
            }, 500);
        } else {
            randint = 0;
            document.getElementById('gobtn').value = '실패!';
            setTimeout(() => {
                document.getElementById('gobtn').value = '고!';
            }, 500);
        }

        if(randper <= 4){
            randper = rand(4, 8);
        }

        setbase(randlist[randint][0], randlist[randint][1]);

        document.getElementById("scorename").value = randlist[randint][2];
        persent();
    } else {
        alert('이미 최고 등급에 도달하였습니다!');
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
setbase('./image/item/item5.png', '꽝');