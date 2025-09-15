let d = 0;
function increase() {
    console.log(d);
    d = d + 1;
    document.getElementsByTagName('p')[0].innerHTML = i+d;
}


function helo(){
 let name=document.getElementById('in').value;
   document.getElementsByTagName('p')[1].innerHTML = "hello"+" "+name;

    console.log("name"+name+"rollno:244g5a3305")
    add("dinesh",10);
    let length= prompt("Enter length:");
    let breadth=prompt("enterbreadt :")
    area(length,breadth);
    factorial(5);
 fun();
}
function add(name,score){
     score=score+1;
     score/=1;
     score*=1;
     score-=1; 
     console.log(score);
}
function area(length,breadth){
    console.log(length*breadth);
}


function fun(){
    let b=30
for( i=5;i<=16;i+=5){
   if(i==5)b+=10;
   else if(i==10)b+=15;
   else b+=20;
   
}
fetch("https://official-joke-api.appspot.com/random_joke")
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.error(error));
let k=0;
while(k<=10){
    k++;
    console.log("5"+"*"+k+"="+k*5);
}
console.log(b);
let speed=30;
let distance=0;
for(let i=10;i<=90;i+=10){
    
    tot=10/60;
     distance+=speed*tot;
     if (speed < 120) {
            speed = speed * 2
        }
}
console.log(distance+(speed*(6/60)));
}
function factorial(num){
    for(let i=4;i>=1;i--){
        num*=i;
    }
    console.log("factorial of"+num+"is"+num);
}
function arthmatic(sym){
    let num1 = Number(document.getElementById("1").value);
    let num2 = Number(document.getElementById("2").value);
    let d = document.getElementById("3");
    switch(sym){
        case "+":
            d.innerHTML = num1 + num2;
            break;
        case "-":
            d.innerHTML = num1 - num2;
            break; 
        case "/":
            if(num2===0)d.innerHTML="cant divide by 0"
            else
            d.innerHTML = num1 / num2;
            break;
        case "*":
            d.innerHTML = num1 * num2;
            break;        
        default:
            d.innerHTML = "Invalid operator";
    }
}

function simple(){
let num1 = Number(document.getElementById("4").value);
    let num2 = Number(document.getElementById("5").value);
    let d = Number(document.getElementById("6").value);
    let com=(num1*num2*d)/100;
    document.getElementById("7").innerHTML=num1+com;
      
}
function grading(){
    let num1 = Number(document.getElementById("8").value);
    let d=document.getElementById("9");
    if(num1>90){
    d.innerHTML="O";
    }
  else if(num1>70 && num1<90){
        d.innerHTML="A";
    }
    else if(num1>60 && num1<70){
        d.innerHTML="B";
    }
    else{
        d.innerHTML="C";
    }

}


                                                                                                                               