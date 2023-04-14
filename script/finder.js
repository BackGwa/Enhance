
// Find School
function findschool(){
    const schoolname = document.getElementById('schoolname').value;
    if(schoolname != ''){

    }else{
        message('학교 이름을 입력해주세요!');
    }
}

// ErrorMessage
function message(text){
    const msgbox = document.getElementById('message');
    msgbox.innerHTML = `${text}`;
}

// Register EventListener
const button = document.getElementById('find');
button.addEventListener('click', findschool);