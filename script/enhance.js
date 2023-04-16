
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


// s
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

setschool();