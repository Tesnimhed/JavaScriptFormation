let t=["banane","pomme","cerise","fraise",4]
console.log(t.toString())
console.log(t.join(";"))
const cars= new Array("mercedes","dacia","hundai")
let voiture= cars.pop()//pour supprimer le dernier element
console.log(cars,voiture)
let fruits = t.push("kiwi")
console.log(t)
t[0]="pomme"
console.log(t)
const women=["massiwelle","amina","tesnim"]
const men =["abdennour","tarik"]
const multiple = women.concat(men)
console.log(multiple)
for (let i=0 ; i<multiple.length ; i++){
    console.log("bonjour", multiple[i])
}
let result = multiple.forEach(function(item , index){
    console.log("bonjour",item , index)
})
//une fonction de callback est une fonction qui na pas de nom et quon declare comme parametre dune autre fonction
let resultat = multiple.map(function(item){
    return "bonjour" + item
})
console.log(resultat)
