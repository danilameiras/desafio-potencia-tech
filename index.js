let nomeDoHeroi = "Dani"
let expDoHeroi = 7001

if (expDoHeroi <= 1000) {
    console.log("O Herói de nome " + nomeDoHeroi , "está no nível de Ferro")
} 
else if ((expDoHeroi >= 1001) && (expDoHeroi <= 2000)) {
    console.log("O Herói de nome " + nomeDoHeroi , "está no nível de: Bronze")
}
else if ((expDoHeroi >= 2001) && (expDoHeroi <= 5000)) {
    console.log("O Herói de nome " + nomeDoHeroi , "está no nível de: Prata")
}
else if ((expDoHeroi >= 6001) && (expDoHeroi <= 7000)) {
    console.log("O Herói de nome " + nomeDoHeroi , "está no nível de: Ouro")
}
else if ((expDoHeroi >= 7001) && (expDoHeroi <= 8000)) {
    console.log("O Herói de nome " + nomeDoHeroi , "está no nível de: Platina")
}
else if ((expDoHeroi >= 8001) && (expDoHeroi <= 9000)) {
    console.log("O Herói de nome " + nomeDoHeroi , "está no nível de: Ascendente")
}
else if ((expDoHeroi >= 9001) && (expDoHeroi <= 10000)) {
    console.log("O Herói de nome " + nomeDoHeroi , "está no nível de: Imortal")
}
else {console.log("O Herói de nome " + nomeDoHeroi , " está no nível de: Radiante")
}