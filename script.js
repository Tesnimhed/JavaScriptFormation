var chaine="bonjour"
// reverse chaine
function inverse(){
    return(chaine.split("").reverse("").join(""))
    // Split pour convertir une chaine de caractere en tableau 
    // reverse pour inverser un tableau
    // join pour convertir un tab en une chaine de caractere
}
console.log(inverse())
function supprimer(str){
    let result =""
    for(var i=0 ; i<str.length ; i++){
        if(str[i]!=" "){
        result+=str[i]
        }
    }
    return(result)
}
console.log(supprimer("bonjour le monde"))
var mystring="java c# remis"
console.table(mystring)
console.log("2"==2)
console.log("2"===2)
console.log(mystring.charAt(2)) //recuperer lelement a lindex n+1
console.log(mystring.slice(2))//couper a partir de lindex n+1
console.log(mystring.slice(2,7))//affiche les car entre 2 et 6
var hello="  hello   world "
console.log(hello.trim())//supprimer les vides du debut+la fin
//ES6 
function test(){//var is the scoope function
    for(var i=0; i<4; i++){
        console.log(i)
    }
    console.log(i)
}
test()
function test1(){
    for(let i=0; i<4; i++){//let is the scoope bloc
        console.log(i)
    }
    console.log(i)
}
test1()