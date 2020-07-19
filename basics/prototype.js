//like inhertince in java
var student=function(){
    this.name ="jagrit"
    this.age= 12;
    this.email="jagritachaya2019@gmail.com"
}
// second way to create a function
 function details(){
this.name="Acharya";
this.age=22;
}

student.prototype={
    address : "jaipur",
    getName:function(){
        return this.address;
    }
}
//object creating
var deta = new details();
var stud = new student();

console.log(stud.name);
console.log(stud.email);
// console.log(stud.address);
console.log(stud.getName());
console.log(deta.name)
console.log(deta.age);