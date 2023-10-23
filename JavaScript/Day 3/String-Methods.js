// STRING METHODS

// 1. Char At

let a= "Atharva"
console.log(a.charAt(3));  //a
console.log(a.charAt(1));  //t
console.log(a.charAt(6));  //a

//2. Char Code at 

let b = "Atharva"
console.log(a.charAt(4));  //r
console.log(a.charCodeAt(4));  //114

//3. .length 

let c = "Atharva"
console.log(c.length);  //7


//4. .replace

let d = "Atharva"
console.log(d.replace("Atharva","Hello"));   //Hello


//5. .subString (startindex,end index)

let e = "Hello Progrmmer"
console.log((e.substring(0,5)));  // Hello
console.log((e.substring(6,16))); // Programmer

//6. .trim

let f = "Hello World"
console.log(f.trim());


// 7. include 

let g = "Atharva"
console.log(g.includes("t"));   //true