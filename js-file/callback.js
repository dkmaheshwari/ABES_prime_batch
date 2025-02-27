// const sum=(a,b)=>{
//Higher order function
//     const ans=a+b;
//     return ans;
// };
// const printPretty=(txt)=>{
//     console.log("--------");
//     console.log(txt);
//     console.log("--------");
// }
// sum(20,30,printPretty)
//printPretty(sum(20,30)); is a callback function
// Callback function is a function that is passed as an argument to another function
const getmetaData=(callback)=>{
const name=prompt("Enter your name");
console.log(name);
const number_sub=parseInt(prompt("Enter the number of the subjects"));//or we can use parseFloat or Number() to convert string to number    
return number_sub;
}
const getSubjects=(num)=>{
    const users={};

    for(var i=0;i<num;i++){
        let sub_name=prompt(`Enter the name of the subjects ${i}`);
        let sub_marks= parseInt(prompt(`Enter the marks for ${sub_name}`));
        users[sub_name]=sub_marks;
        }   
        return users;            
}
const getpercentage = (users) => {
  
  const marks=Object.values(users);
  let totmarks=0;
  let totsub=0;
  marks.forEach((mark) => {
    totmarks += mark;
    totsub += 1;
  });
  const percentage = (totmarks / (totsub * 100)) * 100;
  return percentage;
  }
   const getHighestScore=(users)=>{
    const marks=Object.values(users);
    const max=Math.max(...marks);
    return max;
   }
const num=getmetaData();
const result=getSubjects(num);  
const percentage=getpercentage(result);
console.log(percentage);
console.log(getHighestScore(result));