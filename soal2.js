const listOfNumbers=[2,5,3,1,9,7,11];
let tempData=0;

for (let i= 0; i < listOfNumbers.length; i++) {
    tempData=tempData+listOfNumbers[i]; 
}
console.log(tempData); 

if(tempData>30){
    console.log("Its Big!");
}