//like inhertince in java
var student=function(){
    this.name ="jagrit"
    this.age= 12;
    this.email="jagritachaya2019@gmail.com"
}
student.prototype={
    address : "jaipur",
    getName:function(){
        return this.address;
    }
}
var stud = new student();

console.log(stud.name);
console.log(stud.email);
// console.log(stud.address);
console.log(stud.getName());