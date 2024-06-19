let name="Miracle"

console.log(name)
console.log(name.slice(0,4)) //1.) To extract a subtring from a string
let updatedname =
    name.replace("Mir","oma"); //2.) to replace a part of the string with a different value
console.log(updatedname);
console.log(name);
/*if
  (name.startsWith("Mi")){ //This is to find out if the string starts with a particular sub string
    console.log("Found Mi");
  }
//else{
  console.log("Mi not here");
}
//if(name.endsWith("Mi")){ //This is to find out if the string ends with a particular sub string
  //console.log("found Mi!");
}
else{
  console.log("No Mi here");
}
*/
let fullname = "Miracle Okwusogu Miracle Okwusogu"
console.log (fullname);
console.log(fullname.indexOf ("Okwusogu")); //3.) To find the index of a character in a string. Index output will be where the fisrt character is located in the string
//To find the indexOf the subsequent occurences of the same substring in the string
let firstoccurrence = 
    fullname.indexOf("Okwusogu");
console.log(firstoccurrence); //3a.) firstoccurrence will display 8 as that is the index of the first "Okwusogu" substring in the string
let subsequentoccurrence = 
    fullname.indexOf("Okwusogu", firstoccurrence + 1);
console.log(subsequentoccurrence); // while subsequentoccurrence will display 25 as that is the index of the second "Okwusogu" substring in the string

//4a.) To pad a string with a given value starting from the beginning until it reaches the given length

let myname="cle";
console.log(myname);
let mypaddedname=
    myname.padStart(7,"Mira")
console.log(mypaddedname);
//4b.) To pad a string with a given value starting from the end of string until it reaches the given length
let myname1="Mira"
console.log(myname1)
let mypaddedname1=
    myname1.padEnd(7,"cle")
console.log(mypaddedname1);

//5.) Trim removes open gaps from the start and end parts of the string
let example5="   yo yo yo yo   "
console.log(example5);
let example5edited=
    example5.trim();
console.log(example5edited);
//5a.) trimStart removes open gaps from the start part of the string
let example5a="    ya ya ya ya    "
console.log(example5a);
let example5aedited=
    example5a.trimStart();
console.log(example5aedited); 
//5b.) trimEnd removes open gaps from the end part of the string
let example5b="    ye ye ye ye    "
console.log(example5b);
let example5bedited=
    example5b.trimEnd();
console.log(example5bedited); 

//Number methods
//1.Math.random is a method that returns a number between 0 and <1 which can be modified to return a desired range when given a min and max number

function randomnumber(max){
  console.log(max);
}
randomnumber(3)
randomnumber(Math.random(3));
randomnumber(4)
randomnumber(Math.random(4));
/*function randomnumberrange (min,max){
  console.log();
  randomnumberrange(Math.random()*(max-min)+min)
}
randomnumberrange(0,3)*/
//2. Rounds a number to the specific number of decimals given 
let newnum=5.979673
  console.log(newnum);
newnum.toFixed(1);
newnum.toFixed(5);
//3. Is used to determine whether the passed value is a finite number
let newnum1=1/0
console.log(newnum1);
console.log(Number.isFinite(1/0));
