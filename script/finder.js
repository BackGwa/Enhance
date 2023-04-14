
// Default value
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
            (data) => getlist(data.schoolInfo[1].row)
        );

    }else{
        message('학교 이름을 입력해주세요!');
    }
}

// get school list
function getlist(data){
    data.forEach(i => {
        showlist([i.SCHUL_NM, i.ORG_RDNMA, i.SD_SCHUL_CODE])
    });
}

// show school list
function showlist(data){
    const listbox = document.getElementById('schoollist');
    let listchild = document.createElement('table')

    listchild.innerHTML = `
        <tr>
            <td>${data[0]}</td>
        </tr>
        <tr>
            <td>${data[1]}</td>
        </tr>
        <tr>
            <button onclick="sendinfo(${data[2]})">선택하기</button>
        </tr>
    `;
    
    listbox.appendChild(listchild);
}

// ErrorMessage
function message(text){
    const msgbox = document.getElementById('message');
    msgbox.innerHTML = `${text}`;
}

// Send school info
function sendinfo(code){
    console.log(code);
}

// Register EventListener
const search = document.getElementById('find');
search.addEventListener('click', findschool);