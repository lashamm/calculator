
let keys = document.querySelectorAll(".Divs");
let screeen = document.querySelector(".screen");
let onScreen;

function appendToDisplay(inp){
screeen.value += inp
}

function clearDisplay(){
    screeen.value = ''
}

function calculate(){
    try{
    screeen.value = eval(screeen.value)
}
    catch(error){
        screeen.value - "Error :("
    }
}













// keys.forEach(key => {
//     onScreen = key.innerText
//     key.addEventListener("click", function() {
//         console.log(onScreen);
//         screeen.innerHTML = `
//         <p>${key.innerText}</p>`
//     });
// });


