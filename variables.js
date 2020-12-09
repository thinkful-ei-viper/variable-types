'use strict';
let name = "Terra";
name = "Borb";


const occupation = 'Teacher';
occupation='Movie Star';//Error!


const person = {
    name: 'Terra',
    gender:'female',
    age: 100
};

//What I cant do
person = "I am a person";

// What I Can do
person.age=101;
person.name="Borb";

try  {
    addToDatabase();
  }
  catch (error) {
   // This block runs if the try block fails. `e`
   // is an object representing the error
   console.log(e.statusCode);
  }



const name ="Borb";
for(let i =0; i< 10;i++){
    console.log(i);

}

function coolFunc(){
    let x= 5;
    return x;
}

console.log(x)//undefined
console.log(coolFunc())//logs 5