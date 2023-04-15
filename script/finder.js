
// Default value for API
const APIKey = secret.key;
const SCNM = '중학교';


// School Find API Request
function findschool(){
    const schoolname = document.getElementById('schoolname').value;
    if((schoolname != '') && (!schoolname.includes(' '))){
        const APILink = `https://open.neis.go.kr/hub/schoolInfo?Type=json&KEY=${APIKey}&SCHUL_KND_SC_NM=${SCNM}&SCHUL_NM=${schoolname}`;

        fetch(APILink)
        .then(
            (response) => response.json()
        )
        .then(
            (data) => getlist(data.schoolInfo[1].row)
        );
    }
}


// Listed schools found
function getlist(data){
    data.forEach(i => {
        showlist([i.SCHUL_NM, i.ORG_RDNMA, i.SD_SCHUL_CODE])
    });
}


// Insert list in HTML
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


// Send selected school information
function sendinfo(code){
    location.href=`./user.html?school=${code}`;
}


// Register EventListener
const search = document.getElementById('schoolname');
setInterval(function(){
    search.addEventListener('input', findschool);
    setTimeout(function(){
        search.removeEventListener('input', findschool);
    }, 750);
}, 1000);