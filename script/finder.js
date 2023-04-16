
// Default value for API
const APIKey = secret.key;
const SCNM = '중학교';
const listbox = document.getElementById('schoollist');


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
    while(listbox.firstChild) {
        listbox.removeChild(listbox.firstChild);
    }
    data.forEach(i => {
        showlist([i.SCHUL_NM, i.ORG_RDNMA, i.SD_SCHUL_CODE])
    });
}


// Insert list in HTML
function showlist(data){
    let listchild = document.createElement('table');

    listchild.innerHTML = `
        <thead onclick="sendinfo('${data[0]}', ${data[2]});">
            <tr class='fontP colorW w700 f24'>
                <td>${data[0]}</td>
            </tr>
            <tr class='fontP colorW w300 f15'>
                <td>${data[1]}</td>
            </tr>
        </thead>
    `;
    listbox.appendChild(listchild);
}


// Send selected school information
function sendinfo(name, code){
    location.href=`./enhance.html?name=${name}&code=${code}`;
}