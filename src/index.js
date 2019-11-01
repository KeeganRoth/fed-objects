import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Thanks for learning❤️</h1>
<div>
 This is just placeholder text, check the console to view your progress
</div>
`;

// an example of creating an object.
// Precisely speaking, this is known specifically as an "object-literal"

const michael = {
  name: "Michael Liendo",
  age: 30,
  hobbies: ["eating tacos", "running"],
  hasSocialMedia: true,
  socialMedia: {
    twitter: "mtliendo"
  },
  getJoke: function() {
    return "Why did the Java programmer need glasses?";
  }
};

//////////

// Creating an object
const myDog = {
  breed: "Chocolate Lab",
  isPuppy: true,
  name: {
    first: "Remmy"
  }
};

const mattsDog = {
  ...myDog,
  name: {
    ...myDog.name
  }
};

mattsDog.name.first = "George";

console.log("Matts Dog", mattsDog);
console.log(myDog);
// Accessing a property on an object
const breedSentence = `I have a ${myDog.breed}`;
// console.log(breedSentence);

// Adding a property to an existing object
const myDogsAgeInMonths = 2;

myDog.ageInMonths = myDogsAgeInMonths;
// console.table(myDog);

//Accessing a property with bracket-syntax
// ( how to access an object's property based on a variable)
const favoriteDogCharacteristic = "breed";
const favChar = myDog[favoriteDogCharacteristic];
console.log(favChar);
