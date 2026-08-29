
//console.log(connected);

//function number(){
    //return 10;
//}

//console.log(number());

//let number = () => 10;


//console.log(number());

let number = (a,b) => a+b;
console.log(number(7,8));
number();

// Truty or Falsy Value 

// False,Null ,"".Undiffed,0,Nan  = falsy 

var myVar = NaN;

if (myVar) {
    console.log("I am truthy");
} else {
    console.log("I am Falsy");
}

// Ternary Operator 

var age = 18;
var type = "" ;
if(age >= 18){
    type = 'adult';
} else {
    type = 'child';
}
    console.log(type);

    var type1 = (age <= 18) ? "18 " : "16" ;

    console.log(type1);


    var age2 = 18;
     var type2 = age2 >= 18 ? "Adult " : age2 < 10 ? "Child" : "Young";
     console.log(type2);

     // Ternary Opertaor short 

     var a = 3;

    var check = a > 4 

    console.log(check)

    // Array find using 

    let numbers = [1,2,3,4,5,6, 7,9];

    let reuslt =numbers.find(function (searchvalue) {

        return searchvalue > 5;
    });
console.log(numbers);
    console.log(reuslt);

    let numbers1 = [1,2,3,4,5,6,7,8,9];

    let result1 = numbers1.findIndex((currentvalue,index,arr) => {
        return currentvalue > 17;
    });
 console.log(result1);

 // Filter array 

 let numbers2 = [1,2,3,4,,5,6,7,8]

 let filters = numbers2.filter((cvalue,index,arr )=> {


 //console.log(index);
 //console.log(arr);
    return cvalue > 5;


 })

 console.log(filters);


 let numbers3 =[1,2,3,4,5,6,7]

 let sli = numbers3.slice(1,3);

 let sli1 = numbers3.slice(-2,3);

 console.log(sli1)
 console.log(sli)

 // splice 

 let numbers4 = [1,2,3,4,5,8]
 let spi = numbers4.splice(-3,3,10,20,30,40)
 console.log(spi);
 console.log(numbers4);

 // array concat

 let x = [1,2,3,4,5,6]
 let y = [7,8,9,10,11,23]
 let z = [7,8,9,10,11,23]
  let w = [7,8,9,10,11,23]
 let xy = x.concat(y,z,w);
 console.log(xy);

 // Array.push Method 

 let p = [ 1,2,3,4,5]
 let jp = p.push(6,9,9,10);

 console.log(p)
 console.log(jp);

 // array Map