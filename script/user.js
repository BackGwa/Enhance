



// Create local storage with school code
function createStorage(key, value){
    if(!localStorage.getItem(key)) {
        localStorage.setItem(key, value);
    }
}