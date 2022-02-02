const prompt=require("prompt-sync")()
let length=0
const emptyarray=[]
while(length<2){
    var emotyObject={}
    var name=prompt("enter your name: ")
    emotyObject.name=name
    var age=prompt("enter user age: ")
    emotyObject.age=age
    var yuga=prompt("enter yuga: ")
    emotyObject.yuga=yuga
    emptyarray.push(emotyObject)
    length++
}

var lastage=0
for(i of emptyarray){
    if(i.age>lastage){
        lastage=i.age
        var name1=i.name
        var yug=i.yuga
    }
}
console.log(`the hightest age person is ${name1} and age is ${lastage} and yuga is ${yug}`);