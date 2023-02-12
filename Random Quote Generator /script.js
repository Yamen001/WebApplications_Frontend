let btn = document.querySelector("button")
let text = document.querySelector("p")
let author = document.querySelector("h3")
let text1
window.addEventListener("load",GetQutoe())

btn.onclick = function(){
    GetQutoe()
}

function GetQutoe(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    // console.log(data[Math.floor(data.length * Math.random())]);
    PutData(data[Math.floor(data.length * Math.random())])
    text1 = data[0]
    });
}
function PutData(data){
    text.textContent = data.text
    author.textContent = data.author
}