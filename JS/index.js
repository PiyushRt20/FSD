// let a =30;
// if(a >20){
//     let  a = 50;                                
//     console.log("inside cond " +a);
// }
// else{
//     console.log("inside else");
// }
// console.log("a outside " +a);

// function greet(msg){
//     // console.log("hello");
//     return "hello"+ msg;
// }
// const msg1 = greet(" good morning");
// console.log(msg1);


// fun as an expression
// const data = function greet(msg){
//     return "hello"+ msg;
// }
// const msg1 = data(" good morning");
// console.log(msg1);

// anonymous fun (which dont have name)
// fun as an expression
// const data = function (msg){
//     return "hello"+ msg;
// }
// const msg1 = data(" good morning");
// console.log(msg1);

// arrow fun
// const data = ()=>{
//     console.log("heyy");
// }
// data();

// const data = (msg)=>{
//     return "heyy " + msg;                  
// }
// const msg1 = data("gm");
// console.log(msg1);

// const data = msg=> msg;
// const data1 = data("helloo");
// console.log(data1);

// IIFE immediate invoke fun expression
// (()=>{
//     console.log("heeeuuu");
// })();

// setTimeout(()=>{console.log("hello")}, 5000);
// setInterval(()=>{ console.log("heeeyyy")}, 1000);

// default parameter
// function greeting(msg = " Hiii"){
//     console.log("hello " + msg);
// }
// greeting("welcome to abes");

function selectLanguage(lang){
    let data;
    if(lang == "java"){
        function javaCompiler(){
            return " Hey, Java Compiler calling...";
        }
        data = javaCompiler();
    }
    else if(lang == "c"){
        function cCompiler(){
            return "Hey, C Compiler";
        }
        data = cCompiler();
    }
    else{
        data = "no compiler avail";
    }
    return data;
}
const data1 = selectLanguage("py");
console.log(data1);


