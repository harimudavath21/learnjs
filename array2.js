// .every 'll give true if all the conditions get satisfied and it 'll give false if any 1 of the condition is not satisfied
let arr  = [-2,3,4,5,6]
let check =  arr.every((value) => value>1)
console.log(check)

//.some() check all the values if 1 condition is getting satisfied orelse it 'll get false
let arr2 = [2,5,-4,1,5,8]
let output = arr2.some((value)=> value<0)
console.log(output)

//.flat
let arr3 = [16,17, [23,9], [45,18], [28,6], [
    564,64
]]
//[16,17,23,9,45,18]
let final = arr3.flat();
console.log(final)

//.join
let fname = ["h","a","r","i"]
let output2 = fname.join("");
console.log(output2)

//.indexof
let names = ["hari","prasad","bye"]
console.log(names.indexOf("hari"))

let int = ["1","2","3","4","6"]
console.log(int.indexOf("1"))

//.fill
let students = ["A1","B1","C1","D1"];
console.log(students.fill("F1"))