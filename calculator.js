
let keys = document.querySelectorAll(".Divs");
let screeen = document.querySelector(".screen");
let onScreen;

keys.forEach(key => {
    let inp = key.addEventListener("click", function() {
        console.log("works:", key.innerText);
    });
});

screeen.innerHTML = `
<p>${key.innerText}</p>   
`
