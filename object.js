// objects comes with variable name and with key value pair
//left side iskey
//right side is value

let person = {
    firstName: "hari", // string
    age: 10,
    isAlive: true,
}
console.log(person.age)
console.log(person.firstName)

//to add email or any key
person.email = "hariprasad4876@gmail.com" //add
person.age = 20 //update
console.log(person);

//arrays:collection of data and its data types
//stores data in a index format starts with 0

let fruits = ["apple","mango","oranges"]
console.log(fruits)

let cities = ["hyd","mumbai","delhi"]
console.log(cities)

cities[2]="pune"
console.log(cities[2])
delete cities[1]