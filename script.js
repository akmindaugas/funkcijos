// console.log('veikia')
//functions

// 1.iniciajavimas
// 2. pavadinimas
// 3. paprasti skliaustai - funkcijos parametrams
// 4. riestiniai skliaustai - tai ka funkcija tures atlikti

// function hello (){
//     console.log('hello John')
// }

// funkcijos iskvietimas
//1. funkcijos pavadinimas
//2. paprasti skliaustai

// hello()


// function helloWithMe(personName){
//     // console.log(personName)
//          console.log (`hello ${personName}`)
//     }


// helloWithMe('John')
// helloWithMe('Steve')
// helloWithMe('Mike')



// function helloWithMe(personName, personSurename){

    // if(personName && personSurename){
//         console.log (`hello ${personName} ${personSurename}.`)
//     // }else if
//     //         console.log (`hello ${personName}.`)
//     }else{
//         console.log('hello')
//     }
// }

// helloWithMe('John', 'Doe')
// helloWithMe('Steve' )
// helloWithMe('Leo' )
// helloWithMe('' )

//
// function getPerimeter(height, width, unit){

//     let perimeter =  ((height+width)*2)
//     let output = `perimetras: ${perimeter}`
//     // console.log('perimetras' + perimeter + 'cm.')


// let unitText = 'vnt.'

// if(unit){
//     unitText = unit
// }
// console.log(output)
// }


// getPerimeter (20, 30)
// getPerimeter (20, 30, km)
// getPerimeter (20, 30, m)

// function hello(){
//     // console.log('hello John')
//     return 'Hello, John'
// }


// console.log(hello())

// // hello()
// let helloText = hello()

// function helloWithName2(personName, personSurename){
//     if(personName && personSurename){
//         output = `hello ${personName} ${personSurename}`

//     } else if(personName)
//     {

//     }

//     return `Hello, ${personName}`
// }


// helloWithName2('Steve')

// if(10>11){
//     let test='daugiau'
//     console.log(test)
// }else{
//     let test = 'maziau'
//     console.log(test)
// }

// // console.log(test)

// let num = 5
// console.log(num)

// function func(globalNum){
//     let num=10
//     console.log(globalNum)
//     console.log(num)
// }

// func(num, globalNum)

// let speed = prompt('greitis?')
// let time = prompt('laikas?')

// function distance (speed, time){
//     return speed * time
   
// }

// function fractionOfTheDay (speed, time){
//     return speed / time
// }

//     console.log (distance (1, 0.10)/ fractionOfTheDay(500, 100))

// function calcDistance(speed, time){
//     let distance = speed*time
//     return console.log(distance)
// }

// calcDistance (14535, 34398.3)


// let distance = function(speed, time){
// return speed * time}
// alert (distance(232332, 23233232))

// (function(){
//     let greeting = 'hello'
//     alert (greeting)
// })
// ()


// function randomNum () {
//     return Math.floor ( Math.random() * 5) + 1;
//   }
//  console.log (randomNum());


// let Vardas = 'Albinas'
// let Pavarde = 'Albinaitis'

//  function countLetters (Vardas, Pavarde){
//    let result = Vardas.length + Pavarde.length
//    console.log(result)
//  }




//  function getNameAndSurnameLength(name, surname) {
//     console.log( name.length + surname.length);
//   }
//   getNameAndSurnameLength('John', 'Snow');


// function calcNum (num1, num2, operator){
// switch(operator){
// case 'sum':
// return num1 + num2

// case 'div':
// return num1 / num2

// case 'multi':
//     return num1 * num2

//     case 'sub':
//         return num1 - num2

// }
// }

// console.log(calcNum(5,8, 'multi'))

// function calcNum (num1, num2, operator){
//     if (operator=='sum')
//       {return num1 + num2
//     }
//     else if(operator=='div'){
// return num1-num2
//     }
//     else if (operator=='multi'){
//         return num1 * num2
//     }
// }
    
   
    
//     console.log(calcNum(5,8, 'multi'))

// function generator(){
//     let randomNum=Math.floor(Math.random() * (10-1 )+1)

//  console.log(randomNum)


// }
// generator()

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 10 + 1);
//   }
  
//   function squareNumber(number) {
//     return Math.pow(number, 2);
//   }
// console.log(  squareNumber)

// let answer = 'dalinasi'

// let answerNum = 1234

// if(answerNum % 2!== 0){
// answer = 'nedalinasi'}

// console.log(answer)

// let answer=prompt ('skaicius?')

// if(answer % 2===0){

//   answer='dalinasi'

// }else{
//   answer='nesidalina'
// }

// console.log(answer)

// let answerNum = 5
// let answer = answerNum % 2 === 0 ? 'dalinasi':'nesidalina'
// console.log(answer)

// let vardas = prompt('koks tavo vardas?')

// let atsakymas = vardas.length >5 ? 'ilgas' : 'trumpas'

// console.log(atsakymas)

///switch

// Number ('10,22')

// function helloName (personName){
//   console.log(`hylo, ${personName}`)
// }

// let personName = prompt('vardas?')
// function test() {
//   var a = "3";
//   var b = "8";
  
// /***********Do not change the code above 👆*******/
// //Write your code on lines 7 - 9:
// var c = b - a
// var a = (+c) + (+a)
// var b = b - c
  
// /***********Do not change the code below 👇*******/

//   console.log("a is " + a);
//   console.log("b is " + b);
// }

// test()

// alert( prompt('tweet your ideas here, no more, than 14 signs').slice (0, 13))  
// let typed = str.length
// let left = 14 - typed

//   alert(`You typed ${typed} characters, ${left} characters left`)
//   alert(result)

// helloName(personName)

// function helloName(personName, personSurename){
//   if (personSurename) {
//     console.log(`hello, ${personName} + ${personSurename}`)
// }else{
//   console.log(`hello, ${personName}`)
// }
// }
// helloName('John', 'Doe')
// helloName('Erl')


// function getPerimeter(height , width, unit ='vnt') {

  // let uniTxt = 'vnt'
//   if (unit){
// uniTxt = unit

//   }
//   else{
//     uniTxt='vnt'
//   }
// let unitTxt = unit ? unit : 'vnt.'

//   let perimetrer = (height+width)*2 
//   let output = `perimetras: ${perimetrer} ${unit}`

//   console.log(output)
// }

// getPerimeter(10, 10 )
// getPerimeter(10, 20, 'km' )
// getPerimeter(10, 30, 'mm' )
// getPerimeter(10, 40 )


// function hello(){
//   // console.log('hello, John')
// return 'hello, John'

// }

// document.querySelector('h1').textContent=hello()
// console.log(hello())

// let helloText = hello()
// console.log(helloText)

// function helloName(personName){
//   return `hello, ${personName}`

 
// }

// console.log(helloName ('steve'))


//  helloName('Steve')


// function helloName2(personName, personSurname){
//   if(personName && personSurname){
//     console.log(`hello, ${personName} ${personSurname}`)
//   }else if(personName){
//     console.log(`hello, ${personName}`)
//   }else{
//     console.log('hello')
//   }
// }
// function helloName2(personName, personSurname){
// let output = 'hello'

//   if(personName && personSurname){
//     return `hello, ${personName} ${personSurname}`
//   }
//    if(personName){
//     return `hello, ${personName}`
//   }
//   {
//     return 'hello'
//   }

// // return (output)
// }

// helloName2('john', 'Doe')
// console.log(helloName2 ('john', 'doe'))

// function getPerimeter(height , width, unit ='vnt') {

//   let uniTxt = 'vnt'
//   if (unit){
// uniTxt = unit

//   }
//   else{
//     uniTxt='vnt'
//   }
// let unitTxt = unit ? unit : 'vnt.'

//   let perimetrer = (height+width)*2 
//   let output = `perimetras: ${perimetrer} ${unit}`

//   return(output)
// }

// console.log (getPerimeter(10, 10 ))
// console.log (getPerimeter(10, 20, 'km' ))
// console.log (getPerimeter(10, 30, 'mm' ))
// console.log (getPerimeter(10, 40 ))
// console.log (getPerimeter(10))

// if(10>5){
//   let test='daugiau'
//   console.log(test)
// }else{
//   let test = 'maziau'
//   console.log(test)
// }

// console.log(test)

let num = 5
console.log(num)

function func(globalNum){
let num=10
console.log(globalNum)
}

func(num)