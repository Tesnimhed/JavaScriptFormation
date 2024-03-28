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
// creer une fonction qui prends un tableau dentiers et qui retourne un tableau avec de nombres paires
let T2 = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0]
let pair = T2.map(function(item){
    if(item % 2 == 0){
        return item
    }
    return
})
console.log(pair)
let tab = ["bonjour" , "nom" , 30 , 23411]
tab.splice(2,1,"gateau","plat")//le premier parametre:a partir de quel index , le deuxieme:combien delement a supprimer,le 3 et 4 cest les elements a ajouter
console.log(tab)
//tab.twoSpliced pour creer une copie du tableau
console.log(tab.slice(2))
console.log(tab.slice(1,3))
const ages = [12 , 43 , 46 , 72 , 8 , 21]
let RES = ages.filter(function(item){
    return item>18
})
console.log(RES)
document.writeln(RES)
let somme = ages.reduce(function(total, value){
    return total + value
})
document.write(somme)
let majeur = ages.every(function(value,index,array){
    return value > 60
})
console.log(majeur)
let names = ["amina" , "massizelle"]
let names2 = [...names]//destructuring
names2.push("tesnim")
console.log(names,"names")
console.log(names2 , "names2")