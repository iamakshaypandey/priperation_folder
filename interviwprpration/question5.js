var prompt=require('prompt-sync')()
var HowManyPeople= prompt('enter peple name list size:-')
let a=0
var empty_array=[]
b=0
while(HowManyPeople>a){
    var detailsObject={}
    inputName=prompt("enter your name:-")
    detailsObject.name=inputName
    inputUnitTextMark=prompt("enter Unit Text marks:-")
    detailsObject.UintMarks=inputUnitTextMark
    preFinalMarks=prompt(" enter pre final marks:-")
    detailsObject.preFinalMarks=preFinalMarks
    finalMarks=prompt("enter final marks:-")
    detailsObject.finalmarks=finalMarks
    console.log("first round done");
    HowManyPeople--
    empty_array.push(detailsObject)
}

let=totalemarkarrey=[]
let totalemarkobject={}
for(let i of empty_array){
    totale=parseInt(i.UintMarks)+parseInt(i.preFinalMarks)+parseInt(i.finalmarks)
    totalemarkobject[i.name]=totale
    totalemarkarrey.push(totale)
    var mximum=Math.max(...totalemarkarrey)
}

for(const [name,value] of Object.entries(totalemarkobject)){
    if(value===mximum){
        console.log(`highest mark is ${name} ${value} `);
    }
}
