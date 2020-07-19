var person=function(){
    console.log("this is a function")
}
//parametrised anoynomous function

var calculator=function( a, b){
    console.log(a+b)
    console.log(a-b)
}
person();
calculator(9,3)

// arrow function
var arrow = ()=>{
console.log("this is the hell of the arrow function")
}

var valueArrow=(a,b)=>{
    var c = a+b;
    console.log(c);
    
}
arrow()
valueArrow(343+32453)
