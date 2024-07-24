let name = "John" + " " + "Doe";
let x = 56;
y = 67;
sum = x + y
let mult = x *= y
x /= y
x;
y;
console.log(sum)
let carName = "Mercedes" + " " + "Benz" + " " + "C550"
let personalDetails = () => {
    return {
        firstName: "John",
        lastName: "Doe",
        car: "Mercedes" + " " + "Benz",
        age: 23
    }
}

let details = personalDetails();
console.log(details)
let firstMessage = " Hello"; firstMessage += " World!";
//Binary Representation
let z = -100; //binary represenation of  -100 is 11111111111111111111111110011100
z <<= 5; // this shifts all the bits in "z" to the left by 5 positions
console.log(z); //3200
//Moving num right shift
// Right shift assignment
let  num = 900
num >>= 6;
console.log(num); //14
//Nullish Coalescing Assignment
let w;
w ??= 5;
console.log(w)//5
//
let c;
c ??= 15
console.log(c)
//Adding a number to a string.
let vehicle = 16 + "Mercedes" //16Mercedes
//Adding a string to a number
let plate = "KBZ" + " " + "Benz" + " " + 334 + "Z"
console.log(plate) //KBZ Benz 334Z
const individual = {}
//
individual.firstname = "Doe",
individual.lastname = "John",
individual.emails = "doejohn@gmail.com",
individual.age = 23,
individual.gender = "male",
individual.country = "Kenya"
console.log(individual.country)
console.log(individual)

