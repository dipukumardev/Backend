let arr = [1, 2, 3, 4, 5, 6, 66];

// use fo the forEach 
arr.forEach(function (val) {
    console.log(val + " hello")
})

// use of the map

let arr2 = arr.map(function (ne) {
    return 12;
})
console.log(arr2);



//  use of the fileter;

let arr3 = arr.filter(function (val) {
    if (val > 3) {
        return true;
    }
})
console.log(arr3);


// use of the find;
let arr4 = arr.find(function (val) {
    if (val === 2) { // find the first numbe in the arrays;
        return val;
    }
})
console.log(arr4)


//  next  is indexof 
arr.indexOf(2)// hoga to answer nahi ho ga to -1;



// object;
let obj = {
    name: "dipu kumar",
    age: 20,
}
//  when we freeze the obj use to 
Object.freeze(obj);

// how to access 
console.log(obj.name)
console.log(obj['age'])


//  functions 
function a(){
    return 12;
}
 let d = a();
//  console.log(d)