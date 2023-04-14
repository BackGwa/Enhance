
const APIKey = secret.key;
const SCNM = '중학교';
const ATPT = 'N10';

// Find School
function findschool(){
    const schoolname = document.getElementById('schoolname').value;
    if(schoolname != ''){
        const APILink = `https://open.neis.go.kr/hub/schoolInfo?Type=json&KEY=${APIKey}&SCHUL_KND_SC_NM=${SCNM}&ATPT_OFCDC_SC_CODE=${ATPT}&SCHUL_NM=${schoolname}`;

        fetch(APILink)
        .then(
            (response) => response.json()
        )
        .then(
            (data) => showlist(data)
        );

    }else{
        message('학교 이름을 입력해주세요!');
    }
}

// Show School list
function showlist(data){
    console.log(data);
}

// ErrorMessage
function message(text){
    const msgbox = document.getElementById('message');
    msgbox.innerHTML = `${text}`;
}

// Register EventListener
const button = document.getElementById('find');
button.addEventListener('click', findschool);