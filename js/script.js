//Question 1

const instrument = "guitar";

console.log(instrument);

//Question 2

const button = document.querySelector("button.login");

console.dir(button);

//Question 3

const instruments = [
    {
        type: "guitar",
        colour: "red",
    },
    {
        type: "piano",
        colour: "black",
    },
];

console.table(instruments)

//Question 4

const name = "Percival";
const age = 13;

//Question 5

let total = 0;
total = total + 10;

//Question 6

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

//Qeustion 7

const firstName = "Florence";

const introduction = `Hello, my name is ${firstName}.`;

console.log(introduction);

//Question 8

const title = "Big Technical Event";

const whatToHave = "good time";

const welcome = `Welcome

This ${title} is starting today.

Have a ${whatToHave}!`;

console.log(welcome);

//Question 9

const car = {
    "paint-colour": "red",
    "number of wheels": 3
};

console.log(car["paint-colour"]);
console.log(car["number of wheels"])

//Question 10

const product = {
    name: "Chicken Lips",
    price: 35,
    expired: false,
    getExpired: function() {
        console.log(this.expired);
    }
}

product.getExpired();

//Question 1

const heading = document.querySelector("h3")

heading.innerText = "Welcome";

//Question 2

const headingTwo = document.querySelectorAll("h4")

headingTwo.margin.bottom = "-20px";

//Question 3

headingTwo[1].style.backgroundColor = "red";

//Question 4

const textOne = document.querySelectorAll("p");

textOne[0].style.fontSize = "24px";
textOne[0].style.color = "blue";

//Question 5

const text = document.querySelectorAll(".text-three")

text.innerhtml = "<span>" + text.innerhtml + "</span>";

