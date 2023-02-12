// variables globales//

let score = document.querySelector("#score")
let marcador = 0

function contador(valor){
    marcador += valor
    score.textContent = "Score: " + marcador
}