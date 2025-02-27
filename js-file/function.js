// print("Mohan");
// function print(a){
//     console.log(a);
// }
// print("Hello js");
// for this type we can repeat function name and it can be called before the function declaration
// for overcoming this disadvantage we can declare function in otther manner.


//...........function assignment.........
// const view=function printText(a){
//     console.log("HI",a);
// };
// view("Mohan");
// printText("Mohan");


//...........function assignment(anonymus).........
// const view=function(a){
//     console.log("HI",a);
// };
// view("Mohan");



//...........(arrow)function assignment(ES6).........
// const view=(a)=>{
//     console.log("HI",a);
// };
// view("Mohan");
// printText("Mohan");

//These three function can overcome the disadvantages of the first type of function declaration 


//...........function to print mod 10 of sum of two numbers.........
const add=(a,b)=>(a+b)%10;
console.log(add(2,3));

 
 