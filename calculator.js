
let keys = document.querySelectorAll(".Divs");

keys.forEach(key => {
    key.addEventListener("click", function() {
        console.log("works:", key.innerText);
    });
});