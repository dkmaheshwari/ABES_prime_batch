console.log(prompt("Enter your name"));
const number_sub=prompt("Enter the number of the subjects");
console.log("number_sub");
const users=[];
for(var i=0;i<number_sub;i++){
let name=prompt("Enter the name of the subjects");
let marks= prompt("Enter the marks of the subjects");
users.push({name,marks});
}
let sum=sum+users.name;
console.log(sum/100*100);

