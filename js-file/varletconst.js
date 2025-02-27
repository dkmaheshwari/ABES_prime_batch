// let x=10;
// if(x<11){
//     let x=20;
//     console.log(x);
// }
const summod10=(a,b)=>{
    const ans=a+b%10;
    const printPretty=(txt)=>{
        console.log("Pretty",txt);
    }
        printPretty(ans);
        console.log("sum done");
}
summod10(20,30);
console.log("END");