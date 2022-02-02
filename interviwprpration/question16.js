const object1={name:"ram" ,age:22, yuga: "treta"}
const object2={name:"krishna", age: 23, yuga: "dwaper"}

function checkoperation(object1,object2){
    for(i of object2){
        console.log(i);
    }
    // if(object1.age>object2.age){
    //     return `the hightest age is ${object1.name}`
    // }else{
    //     return `the highest age is ${object2.name}`
    // }
}
console.log(checkoperation(object1,object2))