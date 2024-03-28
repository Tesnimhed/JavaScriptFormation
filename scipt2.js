function test(){
    for(var i=0 ; i<4 ; i++ ){//var est de scope fonction
        console.log(i)
    }
    console.log(i)
}
test()
function test2(){
    for(let i=0 ; i<4 ; i++ ){//let est de scope bloc
    console.log(i)
}
console.log(i)
}
test2()
//creez une formation format texte qui a une chaine de caractere comme argument et effectue les operations suivantes:
//1- remplace tout les espaces par des tirets 6
//2- transforme toutes les chaines en minuscule
//3-supprime tout les caracteres indesirables
//exp : hello DEVS we are in 2024/
// result :hellodevs-we-are-in
//indice: utiliser les expressions regulieres