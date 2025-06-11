//for..of -used to loop over the values of an array
//for..in -used to loop over the keys(indexes) of an array and object 

let cities = ["sydney","brisbane","melbourne","perth"]
//               0         1          2          3
for(let value of cities){
console.log(cities)
}

// for in loop for mainly objects rare in arrays

let person = {
    fname: "hari",
    age: 21,
    city: "hyd"
}
for (let key in person){
    console.log(key,person[key])
    
}