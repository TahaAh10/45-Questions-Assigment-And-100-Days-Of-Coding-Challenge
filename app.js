// console.log("Hello World");    
// Question 46
// let laptop = {
//     model: "Dell XPS 15",
//     processor: "Core i7-13700H",
//     year: 2021,
//     describe: function() {
//         console.log(`This laptop is a ${this.year} ${this.model} ${this.processor}.`);
//     }
// };
// laptop.describe();
// Question 47
// let laptops = [
//     { make: "Dell", model: "XPS 15", year: 2021 },
//     { make: "Apple", model: "MacBook Pro", year: 2020 },
//     { make: "HP", model: "Spectre x360", year: 2021 },
//     { make: "Lenovo", model: "ThinkPad X1 Carbon Gen 10", year: 2023 }
// ];
// let [laptop1, laptop2, laptop3, laptop4] = laptops;
// console.log(laptop1);
// console.log(laptop2);
// console.log(laptop3);
// console.log(laptop4);
// question 48
// let pricesSet1 = [1000, 2500, 3500];
// let pricesSet2 = [1000, 1500, 1500];
// let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
// console.log(combinedPrices);
// question 49
// function logHobbies(...hobbies: string[]) {
//     hobbies.forEach(hobby => {
//         console.log(`I enjoy ${hobby}.`);
//     });
// }
// logHobbies("reading", "coding", "cycling");
//question 50
// let myIdealDay = `My ideal day would involve:
// 1. Waking up early and going for a jog.
// 2. Spending a few hours coding on a personal project.
// 3. Ending the day by reading a good book.`;
// console.log(myIdealDay);
//question 51
// function calculateArea(width: number, height: number): number {
//     return width * height;
// }
// let calculateAreaArrow = (width: number, height: number): number => width * height;
// console.log(calculateAreaArrow(2, 10));
// question 52
// let smartphone = {
//     brand: "Samsung",
//     models: "Galaxy S21, Galaxy S21+, S21 Ultra",
//     specs: {
//         storage: "128GB, 256GB, 512GB, 1TB",
//         screenSize: "6.2 inches, 6.7 inches, 6.8 inches",
//         batteryLife: "18 hours",
//            }
// };
// console.log(smartphone);
//question 53
// let developerSkills = {
//     languages: ["TypeScript", "JavaScript", "Python"],
//     frameworks: ["React", "Angular", "Vue"],
//     tools: ["Git", "Webpack", "Docker"]
// };
// let { languages, frameworks, tools } = developerSkills;
// console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
// question 54
// function createObjectWithDynamicKey(key: string, value: string): Record<string, string> {
//     let dynamicObject: Record<string, string> = {};
//     dynamicObject[key] = value;
//     return dynamicObject;
// }
// let userPreference = createObjectWithDynamicKey("theme", "dark");
// console.log(userPreference);
// // question 55
// let numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = numbers.map(number => number * 2);
// console.log(doubledNumbers);
// //question 56
// let mixedArray = [1, "apple", 2, "banana", true, "carrot"];
// let stringsArray = mixedArray.filter(item => typeof item === "string");
// console.log(stringsArray);
// //question 57
// let grades = [88, 94, 72, 99, 53, 77];
// let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
// console.log(averageGrade);
// // question 58
// function averageScore(...scores: number[]): number {
//     let total = scores.reduce((sum, score) => sum + score, 0);
//     return total / scores.length;
// }
// console.log(averageScore(80, 90, 100, 70));
// // question 59
// function makeAdder(valueToAdd: number): (num: number) => number {
//     return function(num: number): number {
//         return num + valueToAdd;
//     };
// }
// let addFive = makeAdder(5);
// console.log(addFive(10));
// question 60
// let userProfile = (function() {
//     let name = "John";
//     let age = 30;
//     return {
//         displayInfo: function() {
//             console.log(`Name: ${name}, Age: ${age}`);
//         }
//     };
// })();
// userProfile.displayInfo();
// quuestion 61
// enum Automobile {
//     Car,
//     Truck,
//     Motorcycle
// }
// console.log(Automobile.Car);
// // qestion 62
// interface Student {
//     name: string;
//     age: number;
//     courses: string[];
// }
// let student: Student = {
//     name: "Alice",
//     age: 22,
//     courses: ["Math", "Science", "History"]
// };
// console.log(student);
// //question 63
// type Shape = {
//     kind: "circle" | "rectangle";
//     radius?: number;
//     width?: number;
//     height?: number;
// };
// let circle: Shape = {
//     kind: "circle",
//     radius: 5
// };
// let rectangle: Shape = {
//     kind: "rectangle",
//     width: 10,
//     height: 20
// };
// console.log(circle);
// console.log(rectangle);
// // question 64
// function combineStringAndNumber(text: string, number: number): string {
// return text + number;
// }
// console.log(combineStringAndNumber("Age: ", 30));
// // question 65
// function remainder(num1: number, num2: number): number {
//     return num1 % num2;
// }
// console.log(remainder(5, 2));
// // question 66
// function checkBothTrue(val1: boolean, val2: boolean): boolean {
// return val1 && val2;
// }
// console.log(checkBothTrue(true, false));
// question 67
// function addNumberAndString(number1: number, numberString: string): number {
//     return number1 + Number(numberString);
// }
// console.log(addNumberAndString(10, "5"));
// question 68
// function multiplyDecimals(num1: number, num2: number): number {
//     return Math.round((num1 * num2) * 100) / 100;
// }
// console.log(multiplyDecimals(0.1, 0.2));
// question 69
// This function divides two numbers and finds the quotient and remainder
// function divideAndRemainder(dividend: number, divisor: number): { quotient: number; remainder: number } {
//     let quotient = Math.floor(dividend / divisor);
//     let remainder = dividend % divisor;
//     // Returns both in an object
//     return { quotient, remainder };
// }
// console.log(divideAndRemainder(10, 3));
// question 70
// function printNumbersWithLet() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//     }
// }
// printNumbersWithLet();
// question 71
// let age = 25;
// age = 26;
// console.log(age);
// let myName = "Alice";
// try {
//     myName = "Bob";
// } catch (error) {
//     console.log("Error: Can't reassign a `let`-declared variable.");
// }
// // question 72
// {
//     let blockLet = "visible inside the block";
//     const blockConst = "also only inside the block";
//     console.log(blockLet); // Works fine here
//     console.log(blockConst); // Also works fine here
// }
// try {
//     console.log(blockLet); // This will fail
// } catch (error) {
//     console.log("`blockLet` is not accessible outside the block.");
// }
// try {
//     console.log(blockConst); // This will also fail
// } catch (error) {
//     console.log("`blockConst` is not accessible outside the block.");
// }
// // This shows that `let` and `const` keep variables safe inside the block where they're defined.
// question 73
// function updateVariable() {
//     let number = 10;
//     console.log("Initial value:", number);
//     number = 20;
//     console.log("Updated value:", number);
// }
// updateVariable();
// question 74
// function swapValues() {
//     let a = 5, b = 10;
//     console.log("Before swap: a =", a, "b =", b);
//     let temp = a;
//     a = b;
//     b = temp;
//     console.log("After swap: a =", a, "b =", b);
// }
// swapValues();
// question 75
// function useCompoundOperators() {
//     let x = 4;
//     console.log("Initial x:", x);
//     x += 2;
//     console.log("After addition:", x);
//     x -= 1;
//     console.log("After subtraction:", x);
//     x *= 3;
//     console.log("After multiplication:", x);
//     x /= 2;
//     console.log("After division:", x);
// }
// useCompoundOperators();
// // question 76
// function addNumbers(num1: number, num2: number): number {
//     return num1 + num2;
// }
// console.log(addNumbers(5, 7));
// // question 77
// function greetUser(name: string = "anonymous") {
//     console.log(`Hello, ${name}!`);
// }
// greetUser("Alice");
// greetUser();
// // question 78
// function squareDeclaration(number: number): number {
//     return number * number;
// }
// const squareExpression = function(number: number): number {
//     return number * number;
// };
// console.log(squareDeclaration(4));
// console.log(squareExpression(4));
// question 79
// let car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// console.log(car.model);
// question 80
// let car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// car = Object.assign({}, car, {color: "blue", year: 2021});
// console.log(car);
// // question 81
// function logObjectProperties(obj: Record<string, any>) {
//     for (let property in obj) {
//         if (Object.prototype.hasOwnProperty.call(obj, property)) {
//             console.log(`${property}: ${obj[property]}`);
//         }
//     }
// }
// logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
// // question 82
// function stringLength(str: string): number {
//     return str.length;
// }
// console.log(stringLength("Alice"));
// // question 83
// function convertCase(str: string) {
//     let upperStr = str.toUpperCase();
//     let lowerStr = str.toLowerCase();
//     console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
// }
// convertCase("Hello World");
// // question 84
// function replaceJavaScriptWithTypeScript(sentence: string): string {
//     return sentence.replace(/JavaScript/g, "TypeScript");
// }
// console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
// // question 85
// function findCodePosition(str: string): number {
//     return str.indexOf("code");
// }
// console.log(findCodePosition("Learn to code with JavaScript"));
// // question 86
// function hasJavaScript(str: string): boolean {
//     return str.includes("JavaScript");
// }
// console.log(hasJavaScript("I love coding in JavaScript!"));
// // question 87
// function extractFirstTenChars(str: string): string {
//     return str.substring(0, 10);
// }
// console.log(extractFirstTenChars("Hello, JavaScript world!"));
// // question 88
// This function finds where "code" first shows up in a text
function findCodePosition(str) {
    return str.indexOf("code"); // Looks for "code" and tells where it found it
}
// Example: Searching within a sentence
console.log(findCodePosition("Learn to code with JavaScript")); // Outputs the start position of "code"
// It tells us the position number where "code" starts.
// question 2
// let personName: string = "Eric";
// let message: string = `Hello ${personName}, would you like to learn some Python today?`;
// console.log(message);
// question 3
// let personName: string = "John Doe";
// console.log("Lowercase:", personName.toLowerCase());
// console.log("Uppercase:", personName.toUpperCase());
// // Function to convert name to title case
// function toTitleCase(str: string): string {
//     return str.replace(/\w\S*/g, function(txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }
// Print name in title case
// console.log("Titlecase:", toTitleCase(personName));
// question 4
// let quote: string = "A person who never made a mistake never tried anything new.";
// let author: string = "Albert Einstein";
// console.log(`${author} once said, "${quote}"`);
//question 5
// let famous_person: string = "Albert Einstein";
// let quote: string = "A person who never made a mistake never tried anything new.";
// let message: string = `${famous_person} once said, "${quote}"`;
// console.log(message);
//question 6
// let personNameWithWhitespace: string = "\t\n   John Doe   \n\t";
// console.log("Name with whitespace:", personNameWithWhitespace);
// let strippedName: string = personNameWithWhitespace.trim();
// console.log("Stripped name:", strippedName);
// question 7
// // Addition operation resulting in 8
// console.log("Addition:", 5 + 3);
// // Subtraction operation resulting in 8
// console.log("Subtraction:", 10 - 2);
// // Multiplication operation resulting in 8
// console.log("Multiplication:", 4 * 2);
// // Division operation resulting in 8
// console.log("Division:", 16 / 2);
//question 8
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);
//question 9
// let favoriteNumber: number = 7;
// // Create a message revealing your favorite number
// let message: string = `My favorite number is ${favoriteNumber}.`;
// // Print the message
// console.log(message);
//question10
// // Author: [Your Name]
// // Date: [Current Date]
// // Store a person's name in a variable
// let personName: string = "Eric";
// // Create a message for the person
// let message: string = `Hello ${personName}, would you like to learn some Python today?`;
// // Print the message
// console.log(message);
//question 11
// // Store the names of your friends in an array called names
// let names: string[] = ["Alice", "Bob", "Charlie", "David", "Emma"];
// // Print each person's name by accessing each element in the list, one at a time
// names.forEach(name => console.log(name));
// question 12
// Store the names of your friends in an array called names
// let names: string[] = ["Alice", "Bob", "Charlie", "David", "Emma"];
// // Define the message
// let message: string = "Hello, ";
// // Print a personalized message to each person
// names.forEach(name => console.log(message + name));
//question 13
// Store your favorite modes of transportation in an array called transportation
// let transportation: string[] = ["car", "motorcycle", "bicycle", "train", "plane"];
// // Print statements about each mode of transportation
// transportation.forEach(item => console.log(`I would like to own a ${item}.`));
//question14
// Store the names of people you'd like to invite to dinner in an array called guestList
// let guestList: string[] = ["Albert Einstein", "Jane Austen", "Leonardo da Vinci"];
// // Print an invitation message to each person
// guestList.forEach(person => console.log(`Dear ${person}, you are cordially invited to dinner at my place!`));
//question15
// Store the names of people you'd like to invite to dinner in an array called guestList
// let guestList: string[] = ["Albert Einstein", "Jane Austen", "Leonardo da Vinci"];
// // Print an invitation message to each person
// guestList.forEach(person => console.log(`Dear ${person}, you are cordially invited to dinner at my place!`));
// // Print the name of the guest who can't make it
// let cantMakeIt: string = "Jane Austen";
// console.log(`${cantMakeIt} can't make it to dinner.`);
// // Replace the name of the guest who can't make it with the name of the new person you are inviting
// let newGuest: string = "Isaac Newton";
// let index: number = guestList.indexOf(cantMakeIt);
// if (index !== -1) {
//     guestList[index] = newGuest;
// }
// // Print a second set of invitation messages
// guestList.forEach(person => console.log(`Dear ${person}, you are cordially invited to dinner at my place!`));
//question 16
// let guestList: string[] = ["Albert Einstein", "Jane Austen", "Leonardo da Vinci"];
// // Print an invitation message to each person
// guestList.forEach(person => console.log(`Dear ${person}, you are cordially invited to dinner at my place!`));
// // Print a message informing people that you found a bigger dinner table
// console.log("Great news! I found a bigger dinner table!");
// // Add one new guest to the beginning of the array
// guestList.unshift("Marie Curie");
// // Add one new guest to the middle of the array
// guestList.splice(Math.floor(guestList.length / 2), 0, "Nikola Tesla");
// // Add one new guest to the end of the array using push()
// guestList.push("Ada Lovelace");
// // Print a new set of invitation messages
// guestList.forEach(person => console.log(`Dear ${person}, you are cordially invited to dinner at my place!`));
// //question 17
// let guestList: string[] = ["Albert Einstein", "Jane Austen", "Leonardo da Vinci"];
// guestList.forEach(person => console.log(`Dear ${person}, you are cordially invited to dinner at my place!`));
// console.log("Great news! I found a bigger dinner table!");
// guestList.unshift("Marie Curie");
// guestList.splice(Math.floor(guestList.length / 2), 0, "Nikola Tesla");
// guestList.push("Ada Lovelace");
// guestList.forEach(person => console.log(`Dear ${person}, you are cordially invited to dinner at my place!`));
// //question 18
// let placesToVisit: string[] = ["Paris", "Tokyo", "Machu Picchu", "Santorini", "Sydney"];
// console.log("Original Order:", placesToVisit.join(", "));
// console.log("Alphabetical Order:", [...placesToVisit].sort().join(", "));
// console.log("Original Order:", placesToVisit.join(", "));
// console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse().join(", "));
// console.log("Original Order:", placesToVisit.join(", "));
// console.log("Reversed Order:", placesToVisit.reverse().join(", "));
// console.log("Reversed Again:", placesToVisit.reverse().join(", "));
// console.log("Sorted Alphabetical Order:", placesToVisit.sort().join(", "));
// console.log("Reverse Sorted Alphabetical Order:", placesToVisit.sort().reverse().join(", "));
// //question 19
// console.log(`Number of people invited to dinner: ${guestList.length}`);
// //question 20
// let mountains: string[] = ["Everest", "K2", "Kangchenjunga", "Makalu", "Cho Oyu"];
// //question 21
// let person: {name: string, age: number, city: string} = {name: "John", age: 30, city: "New York"};
// //question 22
// let numbers: number[] = [1, 2, 3];
// // console.log(numbers[10]); // This line produces an error because the index 10 is out of range
// //question 23
// let car: string = 'subaru';
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');
// // Add more conditional tests here...
// //question 24
// console.log("Equality Test with Strings:", 'apple' == 'apple');
// console.log("Inequality Test with Strings:", 'apple' != 'orange');
// console.log("Lowercase Test:", 'Apple'.toLowerCase() == 'apple');
// console.log("Numerical Tests:", 5 > 3, 10 <= 20, 15 != 20);
// console.log("Logical AND Test:", true && false);
// console.log("Logical OR Test:", true || false);
// console.log("Item in Array Test:", mountains.includes('Everest'));
// console.log("Item not in Array Test:", !mountains.includes('Denali'));
// //question 25
// let alien_color: string = 'green';
// if (alien_color == 'green') console.log("You just earned 5 points!");
// //question 26
// if (alien_color == 'green') {
//     console.log("You just earned 5 points for shooting the alien.");
// } else {
//     console.log("You just earned 10 points.");
// }
// //question 27
// if (alien_color == 'green') {
//     console.log("You earned 5 points.");
// } else if (alien_color == 'yellow') {
//     console.log("You earned 10 points.");
// } else if (alien_color == 'red') {
//     console.log("You earned 15 points.");
// }
// //question 28
// let age: number = 35;
// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age < 4) {
//     console.log("The person is a toddler.");
// } else if (age < 13) {
//     console.log("The person is a kid.");
// } else if (age < 20) {
//     console.log("The person is a teenager.");
// } else if (age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }
// //question 29
// let favorite_fruits: string[] = ["banana", "apple", "mango"];
// if (favorite_fruits.includes("banana")) console.log("You really like bananas!");
// // Add more if statements for other fruits...
// //question 30
// let usernames: string[] = ["admin", "John", "Jane", "Doe"];
// usernames.forEach(username => {
//     if (username == 'admin') {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// });
// //question 31
// let users: string[] = []; // Initialize an empty array for users
// if (users.length === 0) { // Check if the list of users is empty
//     console.log("We need to find some users!"); // Print a message if the list is empty
// } else {
//     users.forEach(user => console.log(user)); // Print each user if the list is not empty
// }
// //question 32
// let current_users: string[] = ["John", "Jane", "Alice", "Bob", "Charlie"];
// let new_users: string[] = ["Jane", "Charlie", "Eve", "Adam", "Frank"];
// new_users.forEach(new_user => {
//     if (current_users.map(user => user.toLowerCase()).includes(new_user.toLowerCase())) {
//         console.log(`Sorry, ${new_user} is already taken. Please choose a different username.`);
//     } else {
//         console.log(`${new_user} is available.`);
//     }
// });
// //question 33
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach(number => {
//     if (number === 1) {
//         console.log(`${number}st`);
//     } else if (number === 2) {
//         console.log(`${number}nd`);
//     } else if (number === 3) {
//         console.log(`${number}rd`);
//     } else {
//         console.log(`${number}th`);
//     }
// });
// //question 34
// let pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];
// pizzas.forEach(pizza => console.log(`I like ${pizza} pizza.`));
// console.log("I really love pizza!");
// //question 35
// let animals: string[] = ["Dog", "Cat", "Rabbit"];
// animals.forEach(animal => console.log(`A ${animal.toLowerCase()} would make a great pet.`));
// console.log("Any of these animals would make a great pet!");
// //question 36
// function make_shirt(size: string, message: string): void {
//     console.log(`A ${size} shirt with the message "${message}"`);
// }
// make_shirt("Large", "I love TypeScript");
// //question 37
// function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
//     console.log(`A ${size} shirt with the message "${message}"`);
// }
// make_shirt();
// make_shirt("Medium");
// make_shirt("Small", "Hello, World!");
// //question 38
// function describe_city(city: string, country: string = "Pakistan"): void {
//     console.log(`${city} is in ${country}`);
// }
// describe_city("Karachi");
// describe_city("Lahore");
// describe_city("New York", "USA");
// //question 39
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }
// console.log(city_country("Lahore", "Pakistan"));
// console.log(city_country("London", "UK"));
// console.log(city_country("Tokyo", "Japan"));
// //question 40
// function make_album(artist: string, title: string, tracks?: number): Object {
//     let album: any = {
//         "artist": artist,
//         "title": title
//     };
//     if (tracks !== undefined) {
//         album["tracks"] = tracks;
//     }
//     return album;
// }
// console.log(make_album("Artist 1", "Album 1"));
// console.log(make_album("Artist 2", "Album 2", 10));
// //question 41
// let magicians: string[] = ["David Copperfield", "David Blaine", "Harry Houdini"];
// function show_magicians(magicians: string[]): void {
//     magicians.forEach(magician => console.log(magician));
// }
// show_magicians(magicians);
// //question 42
// function make_great(magicians: string[]): string[] {
//     return magicians.map(magician => `the Great ${magician}`);
// }
// magicians = make_great(magicians);
// show_magicians(magicians);
// //question 43
// let original_magicians: string[] = ["David Copperfield", "David Blaine", "Harry Houdini"];
// let great_magicians: string[] = make_great([...original_magicians]);
// show_magicians(original_magicians);
// show_magicians(great_magicians);
// //question 44
// function make_sandwich(...items: string[]): void {
//     console.log("You ordered a sandwich with:", ...items);
// }
// make_sandwich("Bread", "Cheese", "Tomato");
// make_sandwich("Ham", "Lettuce", "Mayonnaise", "Mustard");
// //question 45
// function car_info(manufacturer: string, model: string, ...extras: string[]): Object {
//     let car: any = {
//         "manufacturer": manufacturer,
//         "model": model
//     };
//     extras.forEach(extra => {
//         let [key, value] = extra.split(":");
//         car[key] = value;
//     });
//     return car;
// }
// console.log(car_info("Toyota", "Corolla", "Color: Red", "Year: 2022"));
// console.log(car_info("Honda", "Civic", "Color: Blue", "Automatic: Yes", "Sunroof: No"));
