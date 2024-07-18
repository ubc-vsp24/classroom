console.log("Started ...");

arr = {
    name: "Karthik",
    title: "Instructor",
    class: {
        name: "VSP-2022",
        students: 6,
        section: "B"
    },
    toString: function() {
       return this.name + " " + this.title; 
    }
};

console.log(arr.name);
console.log(arr.title);
console.log(arr.class);
arr.name = "Pattabiraman"
console.log(arr.name);
// delete arr.title;
// This should be an error
arr.gender = "Male";
console.log(arr.gender);
console.log(arr.title);
console.log(arr.class.name);

for (key in arr) {
    console.log(key + " : " + arr[key]);
}

// function max(a, b) {
var f = function(a, b) {    
    if (typeof a != "number") return "err";
    if (typeof b != "number") return "err";
    if (a>b)
        return a;
    else 
        return b;    
}

// var f = max;
f.result = 100;
f.title = "maximum";
c =  f(10, 1);
console.log(c);
console.log(f.result);
console.log(f.title);

// Made function a method of the object
arr.maximum = f;
// Invoke method
console.log(arr.maximum(5, 50));
console.log(arr.toString());

var g = function(foo, a, b) {
    var res = foo(a, b);
    if (res=="err")  return -1;
    return res;             
}

console.log( g(f, "hello", 10) );