//Solution of Qno 01 : 

// var a = +prompt("Enter Marks of Physics")
// var b = +prompt("Enter Marks of Chemistry")
// var c = +prompt("Enter Marks of Maths")
// var total = 300;

// var marksObt = a+b+c;
// var percent = (marksObt/total)*100

// x=percent.toFixed(2)

// document.write("Marksheet","<br>")

// document.write("<br>","<hr>","<br>")


// document.write("Physics :",a,"<br>")
// document.write("Chemistry :",b,"<br>")
// document.write("Maths :",c,"<br>")
// document.write("<br>","<hr>","<br>")

// document.write("Max Marks :",total,"<br>")
// document.write("Mark Obtained:",marksObt,"<br>")
// document.write("Percentage :",x,"%","<br>")

// if(percent>=80){
//     grade = "A+"
// }

// else if (percent>=70 && percent<=80){
//         grade = "B"
    
// }

// else if(percent>=60 && percent<=70){
//     grade = "C"
// }

// else if(percent>=50 && percent<=60){
//     grade = "D"
// }

// else{
//     grade = "Sorry You are failed"
// }



//__________________________________________________________________________________________________________




//Solution of Qno 02:

// var a = Math.random()*10
// var b = Math.floor(a)
// console.log(b)
// var inp = +prompt("Enter a Number")

// if (inp == b){
//     alert("Bingo")
// }

// else if (inp == b+1 ){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Try Again")
// }



//__________________________________________________________________________________________________________






//Solution of Qno 03:

// var T = +prompt("Enter Temperture")

// if ( T > 40){
//     alert("It is too hot outside")
// }
// else if ( T > 30){
//     alert("The Weather today is Normal")
// }
// else if ( T > 20){
//     alert("Today’s Weather is cool")
// }
// else if ( T > 10){
//     alert("OMG! Today’s weather is so Cool.")
// }
// else {
//      alert ("Invalid Input")
// }





//__________________________________________________________________________________________________________








// Solution of Qno 04

// function add(a,b){
//     var sum1 = a+b
//     return sum1
    
// }

// function Subtract(a,b){
//     var sum2 = a-b
//     return sum2

// }

// function Multiply(a,b){
//     var sum3 = a*b
//     return sum3

// }

// function Divide(a,b){
//     var sum4 = a/b
//     return sum4

// }

// function Mod(a,b){
//     var sum5 = a%b
//     return sum5

// }

// var a = +prompt("Enter First Number")
// var b = +prompt("Enter Second Number")
// alert("Enter 1 for addition, 2 for subtraction, 3 for multipication, 4 for division, 5 for Modulus")
// var operate = +prompt("Enter Operation You want To Perform")

// if(operate==1){
//     alert(add(a,b))
// }

// else if(operate==2){
//     alert(Subtract(a,b))
// }
// else if(operate==3){
//     alert(Multiply(a,b))
// }
// else if(operate==4){
//     alert(Divide(a,b))
// }
// else if(operate==5){
//     alert(Mod(a,b))
// }






//_________________________________________________________________________________



//Solution of Qno 05


// var password = "Ahsan" 
// var a = prompt("Enter Password")

// if (a == password){
//     alert("Correct! The password you entered matches the original password")
// }

// else if (a === ""){
//     alert("Please enter your password")
// }

// else if (a != password){
//     alert("Incorrect Password")
// }



//Solution of Qno 06

// var a = ["Apple" , "Samsung" , "Motorola", "Nokia", "Sony" , "Haier"]

// document. write("<select><option>"+a[0]+"</option><"+"<option>"+a[1]+"</option>"+"<option>"+a[2]+"</option>"+"<option>"+a[3]+"</option>"+"<option>"+a[4]+"</option>"+"<option>"+a[5]+"</option></select>")




//Solution of Qno 07

var a = +prompt ("Enter Number for Table")
var b = +prompt ("Enter Range")

for(let i = 1; i <= b; i++) {

     result = i * a;
     document.write(a,"x",b,"=")
     document.write(result,"<br>")
}