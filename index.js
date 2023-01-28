console.log("Hello world")

// Nested destructing in object inside array 
const have =[
    {Id: 1,
        Name:"Shyam",
        Gender:"Male", 
        Hobby:"Reading"
    },
    {
        Id:2,
        Name:"Ram",
        Gender:"Male",
        Hobby:"Football"
    }
]

// Default Parameter
function dest (num1, num2=0){
    console.log(num1, num2)

}

dest (23)

// Callback Function 
// function first (callback){
//     console.log("Hi, I am func1")
// callback(2)
// }


// function second(a){
//     console.log("This is second Function",a)
// }

// first(second)



// Function returning Function 
function func1 (){
return func2();
}

function func2(){
    console.log("Successfully returned...")
}

func1()

// Function returning function by arrow function 
const  arrowFunc1=()=>{
return arrowFunc2();
}

const arrowFunc2=()=>{
    console.log("This is from Arrow func 2")
}

arrowFunc1()

// Function returning function by Expression function 
// const expfunc1 =function(){
// return expfunc2()
// }

// const expfunc2 = function (){
//     console.log("This is from epression Func")
// }
// expfunc1()

// const numbers =[22, 3, 4, 5]

// const multiplfyBy3=(num, index)=>{
//     console.log("Index is ", index)
//     console.log(`${num}*3= ${num*3}`)
// }
// numbers.forEach(multiplfyBy3)


// Printing every user's first name from object inside
// Array

const usersName=[
    {Name: "Sunil", Age:22},
    {Name:"Mohit", Age: 23, Hobby:"Reading"},
    {Name:"Sonu", Age:25, Hobby: "Playing"},

]
  
for (let user of usersName  ){
    console.log(user.Name)
}