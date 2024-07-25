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
const personalDetails = () => {
    return {
        firstName: "John",
        lastName: "Doe",
        car: "Mercedes" + " " + "Benz",
        age: 23
    }
}

const details = personalDetails();
console.log(details)
let firstMessage = " Hello"; firstMessage += " World!";
//Binary Representation
let z = -100; //binary represenation of  -100 is 11111111111111111111111110011100
z <<= 5; // this shifts all the bits in "z" to the left by 5 positions
console.log(z); //3200
//Moving num right shift
// Right shift assignment
let num = 900
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
console.log(individual);
const myFunction = (a, b) => {
    return a + b;

}
let l = myFunction(5, 8);//13
console.log(l);
const temp = (celsius) => {
    return (65 / 23) * (celsius - 32)

}
let t = temp(54)
console.log(t);
const caR = {
    brand: "Mercedes",
    model: "Benz",
    year: 2023,
    color: "black",
    cardetails: function () {
        const deTails = () => {
            return this.brand + " " + this.model
        }
        return deTails()
    }
};
console.log(caR.cardetails());
house = {
    type: "Bungalow",
    size: "14feet",
    locations: {
        county1: "Mombasa",
        county2: "Nairobi",
        county3: "Kisumu",
        conty4: "Kiambu",
        county5: "Nyeri",
    }
}
console.log(house.locations.county1)
//
let country = {
    name: "Kenya",
    population: 50000000,
    capital: "Nairobi",
    languages: ["English", "Kiswahili", "Swahili"],
    currency: "Kenyan Shillings",
    demonym: "Kenyan",
    area: 580367,
    continent: "Africa",
    dEtails: function () {
        const countryDetails = () => {
            return `Name:${this.name}, 
            Population:${this.population.toLocaleString()}, 
        Capital City:${this.capital},Language:${this.languages}, Currency:${this.currency},
        Denonym:${this.demonym}, Area Approximation:${this.area.toLocaleString()} sq km,
        Continent:${this.continent}`;
        }
        return countryDetails()

    }
}
console.log(country.dEtails())

// function toggleBulb() {
//     var bulbOn = document.getElementById('bulb-on');
//     var bulbOff = document.getElementById('bulb-off');

//     // Toggle visibility of bulbs
//     if (bulbOn.style.display === 'none') {
//         bulbOn.style.display = 'inline';
//         bulbOff.style.display = 'none';
//     } else {
//         bulbOn.style.display = 'none';
//         bulbOff.style.display = 'inline';
//     }
// }
//

const turnOn = () => {
    bulbOn.style.display = 'inline';
    bulbOff.style.display = 'none';

}
const turnOff = () => {
    bulbOn.style.display = 'none';
    bulbOff.style.display = 'inline';
}
 





