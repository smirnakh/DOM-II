import './less/index.less'

// Your code goes here!
window.onload = function(event) {
const heading = document.querySelector("h1");
heading.textContent = "Ready To Go"

window.addEventListener("copy", () => {
    navigator.clipboard.readText()
    .then(text => {
        heading.textContent += text;
    });
})
document.body.addEventListener("click", (event) => {
 event.target.classList.toggle("mirror")
})

document.body.addEventListener("dblclick", (event) => {
    event.target.innerHTML = ""
})

window.addEventListener("keydown", (event) => {
    if (event.key == 6){
        document.body.innerHTML = "<h1>YOU'VE DELETED THE WEBSITE ; )</h1>"
    }
    })
}


