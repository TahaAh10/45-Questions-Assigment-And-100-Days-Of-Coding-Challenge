/////////////////////////////////////////////////////// 45 Questions Assignment /////////////////////////////////////

// console.log("Hello World");    

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





/////////////////////////////////////////////////////// 100 Days Coding Challenge //////////////////////////////////////

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

// // // question 88
// function findCodePosition(str: string): number {
//     return str.indexOf("code"); // Looks for "code" and tells where it found it
// }
// console.log(findCodePosition("Learn to code with JavaScript"));
// // It tells us the position number where "code" starts.

// // question 89
// function hasJavaScript(str: string): boolean {
//     return str.includes("JavaScript");
// }
// console.log(hasJavaScript("I love coding in JavaScript!"));

// // question 90
// function extractFirstTenChars(str: string): string {
//     return str.substring(0, 10);
// }
// console.log(extractFirstTenChars("Hello, JavaScript world!"));

// // question 91
// function roundToNearestInteger(num: number): number {
//     return Math.round(num);
// }
// console.log(roundToNearestInteger(4.7));
// console.log(roundToNearestInteger(4.4));

// // question 92 
// function convertStringToNumber(str: string): number {
//     return parseFloat(str);
// }
// console.log(convertStringToNumber("123.45"));
// console.log(convertStringToNumber("98"));

// // question 93
// function isValueNaN(value: any): boolean {
//     return isNaN(value);
// }
// console.log(isValueNaN("hello"));
// console.log(isValueNaN(123));

// // question 94
// let favoriteFruits: string[] = ["Apple", "Banana", "Cherry"];
// favoriteFruits.push("Mango"); // Adds "Mango" to the end of the array

// console.log(favoriteFruits);

// // question 95
// function removeLastElement<T>(arr: T[]): T | undefined {
//     return arr.pop(); // Removes and returns the last element of the array
// }
// const fruits: string[] = ["Apple", "Banana", "Cherry"];
// console.log(removeLastElement(fruits)); // Outputs: 'Cherry'
// console.log(fruits);

// // question 96
// function replaceBananaWithMango(fruits: string[]): void {
//     const index = fruits.indexOf("Banana"); // Finds the index of "Banana"
//     if (index !== -1) fruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
// }
// const fruits: string[] = ["Apple", "Banana", "Cherry"];
// replaceBananaWithMango(fruits);
// console.log(fruits);

// // question 97
// const words: string[] = ["Hello", "World", "TypeScript", "JavaScript"];
// // Uses .map() to create a new array with the length of each word
// const lengths: number[] = words.map(word => word.length);
// console.log(lengths);

// // question 98
// function filterGreaterThanTen(numbers: number[]): number[] {
//     return numbers.filter(number => number > 10);
// }
// const numbers: number[] = [5, 10, 15, 20, 25];
// console.log(filterGreaterThanTen(numbers));

// // question 99
// function calculateSum(numbers: number[]): number {
//     return numbers.reduce((accumulator, current) => accumulator + current, 0);
// }
// const numbers: number[] = [1, 2, 3, 4, 5];
// console.log(calculateSum(numbers));

// // question 100
// function getCurrentDateFormatted(): string {
//     const now = new Date();
//     const day = String(now.getDate()).padStart(2, '0');
//     const month = String(now.getMonth() + 1).padStart(2, '0');
//     const year = now.getFullYear();
//     return `${day}-${month}-${year}`;
// }
// console.log(getCurrentDateFormatted());

// // Question 101
// function daysUntilNewYear(): number {
//     const today = new Date();
//     const newYear = new Date(today.getFullYear() + 1, 0, 1);
//     const diff = newYear.getTime() - today.getTime();
//     const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
//     return days;
// }
// console.log(daysUntilNewYear() + " days until New Year.");

// // question 102
// function getNextBirthday(month: number, day: number): Date {
//     const today = new Date();
//     let year = today.getFullYear();
//     const birthday = new Date(year, month - 1, day);
//     if (birthday < today) {
//         birthday.setFullYear(year + 1);
//     }
//     return birthday;
// }
// const nextBirthday = getNextBirthday(1, 24);
// console.log("Next birthday on:", nextBirthday.toLocaleDateString());

// // question 103
// const squareRoot: number = Math.sqrt(144);

// console.log(squareRoot);

// // question 104
// function getRandomInt(): number {
//     return Math.floor(Math.random() * 10) + 1;
// }
// console.log(getRandomInt());

// // question 105
// const difference: number = Math.abs(-5 - 5);
// console.log(difference);

// // question 106
// function getRandomBoolean(): boolean {
//     return Math.random() > 0.5;
// }
// console.log(getRandomBoolean());

// // question 107
// function getRandomHexColor(): string {
//     const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
//     return color;
// }
// console.log(getRandomHexColor()); 

// // question 108
// function rollDice(): number {
//     return Math.floor(Math.random() * 6) + 1;
// }
// console.log(rollDice());

// // // question 109 
// function isLeapYear(year: number): boolean {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }
// console.log(isLeapYear(2020));
// console.log(isLeapYear(1900));

// // question 110
// function isDivisibleByTwoAndThree(number: number): boolean {
//     // Uses the modulo operator to check for no remainder
//     return number % 2 === 0 && number % 3 === 0;
//   }
  
//   console.log(isDivisibleByTwoAndThree(12)); // Outputs: true
//   console.log(isDivisibleByTwoAndThree(14)); // Outputs: false

// // question 111 (Compare two strings to check if they are identical, ignoring case sensitivity)
// function areStringsEqualIgnoreCase(str1: string, str2: string): boolean {
//     // Converts both strings to lowercase before comparison
//     return str1.toLowerCase() === str2.toLowerCase();
//   }
  
//   console.log(areStringsEqualIgnoreCase("hello", "Hello"));
//   console.log(areStringsEqualIgnoreCase("world", "Word"));

// // question 112 (Write an if statement that logs "Good Morning" if the current time is before 12 PM)
// const currentTime = new Date();
// if (currentTime.getHours() < 12) {
//   console.log("Good Morning"); // It's morning if before 12 PM
// }

// // question 113 (Create a function that assigns a grade (A, B, C, D, F) based on a student's score)
// function assignGrade(score: number): string {
//     if (score >= 90) {
//       return "A";
//     } else if (score >= 80) {
//       return "B";
//     } else if (score >= 70) {
//       return "C";
//     } else if (score >= 60) {
//       return "D";
//     } else {
//       return "F";
//     }
//   }
  
//   console.log(assignGrade(85)); // Outputs: B
//   console.log(assignGrade(55)); // Outputs: F

// // // question 114 (Use an if-else-if chain to categorize a person's age group (child, teenager, adult)
// function categorizeAge(age: number): string {
//     if (age < 13) {
//       return "child";
//     } else if (age <= 19) {
//       return "teenager";
//     } else {
//       return "adult";
//     }
//   }
//   console.log(categorizeAge(12));
//   console.log(categorizeAge(18));
//   console.log(categorizeAge(25));

// // // question 115 (Create a Map that stores the names of countries as keys and their capitals as values.
// // // Add three countries to the Map.)
// const countries = new Map<string, string>();
// countries.set("USA", "Washington, D.C."); // Adds USA to the Map
// countries.set("France", "Paris"); // Adds France to the Map
// countries.set("Japan", "Tokyo"); // Adds Japan to the Map

// console.log(countries);

// // question 116 (Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists)
// const countries = new Map<string, string>();
// countries.set("USA", "Washington, D.C."); // Adds USA to the Map
// countries.set("France", "Paris"); // Adds France to the Map
// countries.set("Japan", "Tokyo"); // Adds Japan to the Map

// console.log(countries);
// function logCapitalOfCanada(countries: Map<string, string>): void {
//   if (countries.has("Canada")) {
//     console.log(`The capital of Canada is ${countries.get("Canada")}`);
//   } else {
//     console.log("Canada is not in the Map.");
//   }
// }
// logCapitalOfCanada(countries);

// // question 117 ( Iterate over a Map of student IDs and names, and log each pair to the console)
// const students = new Map<number, string>();
// students.set(1, "Alice");
// students.set(2, "Bob");
// students.set(3, "Charlie");

// // question 118
// function logDayOfWeek(dayNumber: number): void {
//     switch (dayNumber) {
//       case 1:
//         console.log("Sunday");
//         break;
//       case 2:
//         console.log("Monday");
//         break;
//       case 3:
//         console.log("Tuesday");
//         break;
//       case 4:
//         console.log("Wednesday");
//         break;
//       case 5:
//         console.log("Thursday");
//         break;
//       case 6:
//         console.log("Friday");
//         break;
//       case 7:
//         console.log("Saturday");
//         break;
//       default:
//         console.log("Invalid day number");
//         break;
//     }
//   }  
//   logDayOfWeek(3);

// // question 110
// function logSeason(month: number): void {
//     switch (month) {
//       case 12:
//       case 1:
//       case 2:
//         console.log("Winter");
//         break;
//       case 3:
//       case 4:
//       case 5:
//         console.log("Spring");
//         break;
//       case 6:
//       case 7:
//       case 8:
//         console.log("Summer");
//         break;
//       case 9:
//       case 10:
//       case 11:
//         console.log("Fall");
//         break;
//       default:
//         console.log("Invalid month");
//         break;
//     }
//   }
  
//   logSeason(4);

  // // question 119
  // function evaluateGrade(grade: string): void {
  //   switch (grade) {
  //     case "A":
  //       console.log("Excellent");
  //       break;
  //     case "B":
  //       console.log("Good");
  //       break;
  //     case "C":
  //       console.log("Fair");
  //       break;
  //     case "D":
  //       console.log("Poor");
  //       break;
  //     case "F":
  //       console.log("Fail");
  //       break;
  //     default:
  //       console.log("Invalid grade");
  //       break;
  //   }
  // }
  
  // evaluateGrade("B");

  // question 120
//   // Creates a Map to store student IDs (keys) and names (values)
// const students = new Map<number, string>();
// students.set(1, "Alice");
// students.set(2, "Bob");
// students.set(3, "Charlie");

// // Iterates over the Map and logs each student ID and name
// students.forEach((name, id) => {
//   console.log(`Student ID: ${id}, Name: ${name}`);
// });
// // This loop goes through each student and logs their ID and name.

// question 121
// // This function logs the day of the week based on a number (1-7)
// function logDayOfWeek(dayNumber: number): void {
//   switch (dayNumber) {
//     case 1:
//       console.log("Sunday");
//       break;
//     case 2:
//       console.log("Monday");
//       break;
//     case 3:
//       console.log("Tuesday");
//       break;
//     case 4:
//       console.log("Wednesday");
//       break;
//     case 5:
//       console.log("Thursday");
//       break;
//     case 6:
//       console.log("Friday");
//       break;
//     case 7:
//       console.log("Saturday");
//       break;
//     default:
//       console.log("Invalid day number");
//       break;
//   }
// }

// logDayOfWeek(3); // Outputs: Tuesday
// // Uses a switch statement to select the appropriate day based on the provided number.

// // question 122
// // Initializes a counter
// let count: number = 0;
// // This while loop runs until count is 5
// while (count < 5) {
//   console.log("Hello, World!"); // Logs "Hello, World!"
//   count++; // Increments count by 1
// }
// // Repeats logging "Hello, World!" 5 times, once per loop iteration.

// // question 123
// // Defines an array of favorite movies
// const favoriteMovies: string[] = [
//   "Inception",
//   "The Matrix",
//   "Interstellar",
//   "The Prestige",
// ];
// // Uses a for...of loop to iterate through favoriteMovies
// for (const movie of favoriteMovies) {
//   console.log(movie); // Logs each movie name
// }
// // Each movie in the array is logged to the console, one at a time.

// // question 124
// // This for loop counts from 1 to 10 but skips 5
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue; // Skips the rest of the loop for i = 5
//   }
//   console.log(i); // Logs numbers 1-4 and 6-10
// }
// // It demonstrates how to use 'continue' to skip a specific iteration.

// // question 125
// // Initializes the counter at 10
// let counter: number = 10;
// // This while loop counts down from 10 to 1 and stops at 5
// while (counter > 0) {
//   if (counter === 5) {
//     break; // Exits the loop when counter reaches 5
//   }
//   console.log(counter);
//   counter--; // Decrements the counter
// }
// // Logs the countdown from 10 but stops abruptly when it hits 5.

// // question 126
// // This function iterates through a string and logs each character until it finds a vowel
// function logUntilVowel(str: string): void {
//   const vowels = "aeiouAEIOU";
//   for (const char of str) {
//     if (vowels.includes(char)) {
//       console.log(`First vowel found: ${char}`);
//       break; // Stops the loop at the first vowel found
//     }
//     console.log(char); // Logs each character until a vowel is encountered
//   }
// }

// logUntilVowel("syzygy"); // Logs 's', 'y', 'z', 'y', and then 'First vowel found: y'
// // Demonstrates iterating through a string and stopping at the first vowel.

// // question 127
// // Defines an object with a name property and a method to return its name
// const person = {
//   name: "Alice",
//   getName: function () {
//     return this.name; // Uses 'this' to refer to the object itself and return its 'name' property
//   },
// };

// console.log(person.getName()); // Outputs: Alice
// // This method correctly identifies and returns the object's 'name' property using 'this'.

// // question 128
// // An object with multiple properties and a method that interacts with them using 'this'
// const rectangle = {
//   length: 4,
//   width: 5,
//   calculateArea: function () {
//     return this.length * this.width; // 'this' accesses 'length' and 'width' properties of the object
//   },
// };

// console.log(rectangle.calculateArea()); // Outputs: 20
// // The 'calculateArea' method uses 'this' to compute the area based on the object's own dimensions.

// //  question 129
// // Demonstrates 'this' behavior change in a nested function
// const myObject = {
//   property: "Value",
//   outerMethod: function () {
//     console.log(this.property); // Works as expected, logs "Value"

//     const innerMethod = () => {
//       console.log(this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
//     };

//     innerMethod();
//   },
// };

// myObject.outerMethod();
// // This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.

// // question 130
// // Arrow function that calculates the product of all its parameters
// const multiplyParameters = (...numbers: number[]) =>
//   numbers.reduce((total, number) => total * number, 1);

// console.log(multiplyParameters(2, 3, 4)); // Outputs: 24
// // This function uses the rest parameter syntax to take any number of arguments, then multiplies them together.

// question 131
// Defines a JavaScript object
// const person = {
//   name: "Alice",
//   age: 30,
//   city: "Wonderland",
// };

// // Converts the object into a JSON string
// const jsonString = JSON.stringify(person);

// console.log(jsonString); // Outputs: {"name":"Alice","age":30,"city":"Wonderland"}
// // Demonstrates converting an object to a JSON string, making it easy to store or transmit.

// // question 132
// // Reusing the person object from Question 133
// const person = {
//   name: "Alice",
//   age: 30,
//   city: "Wonderland",
// };

// // Converts the object into a JSON string with indentation
// const jsonString = JSON.stringify(person, null, 2); // The '2' specifies the number of spaces to use as white space

// console.log(jsonString);
// /* Outputs:
// {
//   "name": "Alice",
//   "age": 30,
//   "city": "Wonderland"
// }
// */
// // Shows how adding indentation to the JSON string makes it easier to read.

// // question 133
// // Demonstrates using console.log() inside a loop to track variable values
// for (let i = 1; i <= 5; i++) {
//   console.log(`Iteration ${i}, i value:, i`); // Logs the current iteration number and the value of i
// }
// // This loop iterates five times, logging the value of 'i' during each iteration to help with debugging.

// question 134
// function fetchSomething() {
//   return new Promise((resolve, reject) => {
//     // Simulating asynchronous operation
//     setTimeout(() => {
//       resolve("Data fetched successfully");
//     }, 1000);
//   });
// }

// async function fetchData() {
//   // Assuming fetchSomething returns a Promise
//   const data = await fetchSomething();
//   console.log(data);
//   // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
// }

// console.log(
//   "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
// );

// // This demonstrates how 'await' improves readability
// fetchData();

// question 135
// // Sample code snippet for setting a breakpoint
// console.log("Before breakpoint");
// // Set a breakpoint on the following line using your browser's developer tools
// console.log(
//   "This line has a breakpoint set on it in the browser's developer tools"
// );
// console.log("After breakpoint");

// question 136
// // Creates a Promise that either resolves or rejects based on a condition
// const conditionalPromise = new Promise<string>((resolve, reject) => {
//   const success = Math.random() > 0.5; // Randomly choose success or failure
//   if (success) {
//     resolve("Success!");
//   } else {
//     reject(new Error("Failure"));
//   }
// });

// conditionalPromise
//   .then((result) => console.log(result)) // Handles a successful resolution
//   .catch((error) => console.log(error.message)); // Handles a rejection
// // This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.

// // question 137
// // Example using Promise.all to wait for multiple promises to resolve
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise<string>((resolve) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values); // Outputs: [3, 42, "foo"]
// });
// // This demonstrates how Promise.all waits for all promises to resolve and then logs the array of their results.

// // question 138
// function executeCallback(
//   callback: (arg1: number, arg2: number) => void,
//   arg1: number,
//   arg2: number
// ): void {
//   callback(arg1, arg2); // Invokes the callback with the specified arguments
// }

// // Example callback function that adds two numbers
// const add = (a: number, b: number) => {
//   console.log(a + b); // Outputs the sum of a and b
// };

// executeCallback(add, 5, 3); // Outputs: 8
// // Demonstrates invoking a callback function with arguments to perform an addition.

// // question 139
// // This array of numbers will be filtered
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Uses .filter() with a callback function to filter out numbers greater than 5
// const filteredNumbers: number[] = numbers.filter((number) => number > 5);

// console.log(filteredNumbers); // Outputs: [6, 7, 8, 9, 10]
// // The callback function here checks each number, and .filter() creates a new array with numbers that meet the criteria.

// // question 140
// function fetchData(
//   callback: (error: Error | null, data?: string) => void
// ): void {
//   // Simulating an error condition
//   const error = new Error("Failed to fetch data");
//   const data = "Some data";

//   // Simulate fetching data with a chance of error
//   if (Math.random() > 0.5) {
//     callback(null, data); // No error, data is fetched successfully
//   } else {
//     callback(error); // Passes error to the callback
//   }
// }

// // Using the fetchData function with error handling in the callback
// fetchData((error, data) => {
//   if (error) {
//     console.error(error.message); // Handles the error
//   } else {
//     console.log(data); // Processes the data
//   }
// });
// // Demonstrates a callback pattern where errors are handled gracefully.

// // question 141
// // Uses setTimeout to log a message after a 2-second delay
// setTimeout(() => {
//   console.log("This message is shown after a 2-second delay.");
// }, 2000);
// // This showcases how to use setTimeout to delay actions in your code.

// // question 142
// console.log("Start");

// setTimeout(() => {
//   console.log("Callback executed"); // This gets queued to be executed by the event loop
// }, 0);

// console.log("End");
// // Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop

// question 143
// console.log("Before synchronous operation");
// // Simulate a synchronous blocking operation
// for (let i = 0; i < 1e9; i++) {} // A long loop
// console.log("After synchronous operation");

// // Asynchronous example
// console.log("Before asynchronous operation");
// setTimeout(() => {
//   console.log("Asynchronous operation completed");
// }, 1000);
// console.log("After asynchronous operation setup");
// // Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.

// // question 144
// // TYPE ANNOTATIONS
// let myNumberExOne: number = 42;
// let myStringExOne: string = "Hello, TypeScript";
// console.log("My Number Is:", myNumberExOne);
// console.log("My String Is:", myStringExOne);
// // Another way to write this code is as follows:
// let myNumberExTwo: number;
// let myStringExTwo: string;
// myNumberExTwo = 42;
// myStringExTwo = "Hello, TypeScript";
// console.log("My Number Is:", myNumberExTwo);
// console.log("My String Is:", myStringExTwo);
// //DYNAMIC TYPE DETERMINATION

// let greeting = "Hello, world!";
// console.log(greeting);
// //any type
// let myVariable: any = 42;
// myVariable = "Hello, TypeScript";
// console.log(myVariable)

// question 145
//TYPE ANNOTATIONS WITH OBJECTS
// let personExOne: {
//   name: string;
//   age: number;
//   jobTitle?: string;
//   address: {
//     street: string;
//     city: string;
//   };
// };
// personExOne = {
//   name: "Alice",
//   age: 30,
//   jobTitle: "Engineer",
//   address: {
//     street: "123 Main St",
//     city: "Wonderland",
//   },
// };
// let personExTwo: {
//   name: string;
//   age: number;
//   jobTitle?: string;
//   address: {
//     street: string;
//     city: string;
//   };
// } = {
//   name: "Alice",
//   age: 30,
//   jobTitle: "Engineer",
//   address: {
//     street: "123 Main St",
//     city: "Wonderland",
//   },
// };

// // question 146
// //TYPE ANNOTATIONS WITH FUNCTION *
// // Function to calculate the area of a rectangle
// function calculateRectangleArea(lengthRectAngle: number, widthOfRectAngle: number): number {
//  return lengthRectAngle * widthOfRectAngle;
// }
// const lengthRectAngle = 5;
// const widthOfRectAngle = 3;
// const area = calculateRectangleArea(lengthRectAngle, widthOfRectAngle);
// console.log(`The area of the rectangle is: ${area}`);

// // question 147
// // Optional Parameters:
// function greetOptional(name: string, age?: number) {
//   if (age !== undefined) {
//     console.log(`Hello, ${name}! You are ${age} years old.`);
//   } else {
//     console.log(`Hello, ${name}!`);
//   }
// }
// greetOptional("Alice");
// greetOptional("Bob", 30);
// function greetDefault(name: string, age: number = 25) {
//   console.log(`Hello, ${name}! You are ${age} years old.`);
// }
// greetDefault("Alice");
// greetDefault("Bob", 30);

// // question 148
// // // Function with a rest parameter and type annotations
// function addAll(...nums: number[]): number {
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     result += nums[i];
//   }
//   return result;
// }
// console.log(addAll(10, 20, 30, 100, 10.5, +true));

// // question 149
// //ARROW FUNCTION
// const addWithArrow = (num1: number, num2: number): number => num1 + num2;
// console.log(addWithArrow(10, 20));

// // question 150
// //ANONYMOUS FUNCTION
// const add = function (num1: number, num2: number): number {
//   return num1 + num2;
// };
// console.log(add(10, 20));

// // question 151
// // void
// function greet(name: string): void {
//   console.log(`Hello, ${name}!`);
// }
// function noReturnValue(): void {
// }
// function throwError(message: string): never {
//   throw new Error(message);
// }
// function infiniteLoop(): never {
//   while (true) {
//   }
// }

// // question 152
// //UNION TYPES
// let myVar: string | number;
// myVar = "Hello";
// console.log(myVar)
// myVar = 42;
// console.log(myVar)

// question 153
//LITERAL TYPES
// let direction: "left" | "right" | "up" | "down";
// function setColor(color: "red" | "green" | "blue") {
// }

// // question 154
// //NULLABLE TYPES
// let username: string | null = "Glicher";
// let ageEx: number | null = null;
// function greetUser(username: string | null) {
//     if (username === null) {
//         console.log("Hello, Guest!");
//     } else {
//         console.log(`Hello, ${username}!`);
//     }
// }
// greetUser("Glitcher");
// greetUser(null);

// // question 155
//TYPE ALIAS
// type MyString = string;
// let myName: MyString = "Glitcher";
// type MyStringOrNumber = string | number;
// let myValue: MyStringOrNumber = 10;
// type Employee = {
//   name: string;
//   age: number;
//   email?: string;
// };
// const alice: Employee = {
//   name: "Alice",
//   age: 30,
//   email: "alice@example.com",
// };
// const bob: Employee = {
//   name: "Bob",
//   age: 25,
// };
// console.log(alice);
// console.log(bob);

// //question 156
// //INTERSECTION TYPE
// type FirstType = {
//  name: string;
//  age: number;
// };
// type SecondType = {
//  address: string;
//  phone: string;
// };
// type CombinedType = FirstType & SecondType;
// const person: CombinedType = {
//  name: "John Doe",
//  age: 30,
//  address: "123 Main St",
//  phone: "123-456-7890",
// };

// question 157
// // Annotating an array of strings
// let fruits: string[] = ["apple", "banana", "cherry"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`Fruit: ${fruits[i].toUpperCase()}`);
// }

// question 158
//TYPE ANNOTATIONS WITH MULTIDIMENSIONAL ARRAYS
// let arrayOne: number[] = [1, 2, 3, 4, 5];
// let arrayTwo: string[] = ["A", "B", "C"];
// let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

// question 159
//Defining a tuple type
// let article: readonly [number, string, boolean] = [11, "Title One", true];
// article = [12, "Title Two", false];
// console.log(article);
// const [id, title, published] = article;
// console.log(id);
// console.log(title);
// console.log(published);

// // question 160
// //ENUMS
// enum Days {
//   Sunday,
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
// }
// const today: Days = Days.Wednesday;
// console.log(`Today is ${Days[today]}`);

// // question 161
// interface PersonEx1 {
//   name: string;
//   age: number;
// }
// const John: PersonEx1 = {
//   name: "John",
//   age: 30,
// };

//question 162
// interface PersonEx2 {
//   name: string;
//   age: number;
//   greet(message: string): void;
// }
// const Sarah: PersonEx2 = {
//   name: "Sarah",
//   age: 30,
//   greet(message: string) {
//     console.log(`${this.name} says: ${message}`);
//   },
// };

// Sarah.greet("Hello, TypeScript!");

//question 163
// //Homepage Interface Declaration
// interface Settings {
//   readonly theme: boolean;
//   font: string;
// }
// interface Settings {
//   sidebar: boolean;
// }
// interface Settings {
//   external: boolean;
// }
// let userSettings: Settings = {
//   theme: true,
//   font: "Open Sans",
//   sidebar: false,
//   external: true,
// };

// question 164
// // This example is for educational purposes, but it is not going to work. 
// const imgElement: HTMLImageElement = document.createElement("img");
// imgElement.src = "image.jpg";
// imgElement.alt = "My Image";

// if (imgElement.complete) {
//     console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
// } else {
//     imgElement.addEventListener("load", () => {
//         console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
//     });
// }

// // question 165
// // Interface
// interface PersonExInterface {
//   name: string;
//   age: number;
// }
// type PersonExType = {
//   name: string;
//   age: number;
// };
// interface AnimalExInterface {
//   type: string;
// }
// interface Dog extends AnimalExInterface {
//   bark(): void;
// }
// class Labrador implements Dog {
//   type: string = "dog";
//   bark() {
//     console.log("Woof!");
//   }
// }
// type AnimalExType = {
//   type: string;
// };
// type Monkey = AnimalExType & {
//   bark(): void;
// };
// const labrador: Monkey = {
//   type: "monkey",
//   bark() {
//     console.log("Woof!");
//   },
// };
// interface Car {
//   brand: string;
// }
// interface Car {
//   model: string;
// }
// const myCar: Car = {
//   brand: "Toyota",
//   model: "Camry",
// };

// question 166
// class Product {
//   id: number;
//   name: string;
//   price: number;

//   constructor(id: number, name: string, price: number) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }
//   getProductInfo(): string {
//     return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
//   }
// }
// const product1 = new Product(1, "Widget", 20.0);
// console.log(product1.getProductInfo());

// // question 167
// class MyClassPublic {
//   public name: string;
//   constructor(name: string) {
//       this.name = name;
//   }
// }
// const instancePublic = new MyClassPublic("John");
// console.log(instancePublic.name);
// class MyClassPrivate {
//   private secret: string;

//   constructor(secret: string) {
//       this.secret = secret;
//   }
//   revealSecret() {
//       console.log(this.secret);
//   }
// }
// const instancePrivate = new MyClassPrivate("My secret");
// instancePrivate.revealSecret();
// class Parent {
//   protected familyName: string;

//   constructor(name: string) {
//       this.familyName = name;
//   }
// }
// class Child extends Parent {
//   introduceFamily() {
//       console.log(`Our family name is ${this.familyName}`);
//   }
// }
// const parentEx = new Parent("Smith");
// const childEx = new Child("Johnson");
// childEx.introduceFamily(); 

// // question 168
// class ProductExAccessors {
//     private _price: number;
//   constructor(private id: number, private name: string) {
//     this._price = 0;
//   }
//   get price(): number {
//     return this._price;
//   }
//   set price(newPrice: number) {
//     if (newPrice >= 0) {
//       this._price = newPrice;
//     } else {
//       console.log("Price cannot be negative.");
//     }
//   }
//   getProductInfo(): string {
//     return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
//   }
// }
// const productEx = new ProductExAccessors(1, "Widget");
// console.log(productEx.getProductInfo());
// productEx.price = 20.0;
// console.log(productEx.getProductInfo());
// productEx.price = -5;

// question 169
// class ProductStaticMembers {
//   private static nextId: number = 1;
//   constructor(private id: number, private name: string) {}
//   static generateNextId(): number {
//     return ProductStaticMembers.nextId++;
//   }
//   getProductInfo(): string {
//     return `ID: ${this.id}, Name: ${this.name}`;
//   }
// }
// const product1static = new ProductStaticMembers(
//   ProductStaticMembers.generateNextId(),
//   "Widget"
// );
// const product2static = new ProductStaticMembers(
//   ProductStaticMembers.generateNextId(),
//   "Gadget"
// );
// console.log(product1static.getProductInfo());
// console.log(product2static.getProductInfo());

// // question 170
// abstract class AbstractItem {
//   private static nextId: number = 1;

//   constructor(public id: number, protected name: string) {}

//   static generateNextId(): number {
//     return AbstractItem.nextId++;
//   }

//   abstract getItemInfo(): string;
// }

// class Item extends AbstractItem {
//   constructor(id: number, name: string) {
//     super(id, name);
//   }

//   getItemInfo(): string {
//     return `ID: ${this.id}, Name: ${this.name}`;
//   }
// }

// const item1: AbstractItem = new Item(AbstractItem.generateNextId(), "Widget");
// const item2: AbstractItem = new Item(AbstractItem.generateNextId(), "Gadget");

// console.log(item1.getItemInfo()); // ID: 1, Name: Widget
// console.log(item2.getItemInfo());

// // question 171
// abstract class AbstractEntity {
//   private static nextId: number = 1;
//   protected constructor(public id: number, protected name: string) {} // Change 'private' to 'protected'
//   static generateNextId(): number {
//     return AbstractEntity.nextId++;
//   }
//   abstract getEntityInfo(): string;
// }

// // Create a concrete subclass
// class Entity extends AbstractEntity {
//   constructor(id: number, name: string) {
//     super(id, name);
//   }
//   getEntityInfo(): string {
//     return `ID: ${this.id}, Name: ${this.name}`;
//   }
// }

// // Create another concrete subclass
// class AnotherEntity extends AbstractEntity {
//   constructor(id: number, name: string) {
//     super(id, name);
//   }
//   getEntityInfo(): string {
//     return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
//   }
// }

// // Generate unique IDs for entities using the static method
// const entity1: AbstractEntity = new Entity(
//   AbstractEntity.generateNextId(),
//   "Widget"
// );
// const entity2: AbstractEntity = new AnotherEntity(
//   AbstractEntity.generateNextId(),
//   "Gadget"
// );
// console.log(entity1.getEntityInfo());
// console.log(entity2.getEntityInfo());


// question 172
// function returnType<T>(val: T): T {
//   return val;
// }
// const numValue: number = returnType<number>(100);
// const strValue: string = returnType<string>("Elzero");
// const boolValue: boolean = returnType<boolean>(true);
// const arrValue: number[] = returnType<number[]>([1, 2, 3, 4]);

// console.log(`Number Value: ${numValue}`);
// console.log(`String Value: ${strValue}`);
// console.log(`Boolean Value: ${boolValue}`);
// console.log(`Array Value: ${arrValue}`);

// question 173
// function returnTypeEx<T>(val: T): T {
//   return val;
// }
// console.log(returnTypeEx<number>(100));
// console.log(returnTypeEx<string>("Elzero"));
// const returnTypeArrowSyntax = <T>(val: T): T => val;
// console.log(returnTypeArrowSyntax<number>(100));
// console.log(returnTypeArrowSyntax<string>("Elzero"));
// function testType<T>(val: T): string {
//   return `The Value Is ${val} And Type Is ${typeof val}`;
// }
// console.log(testType<number>(100));
// console.log(testType<string>("Elzero"));
// function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
//   return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
// }
// console.log(multipleTypes<string, number>("Osama", 100));
// console.log(multipleTypes<string, boolean>("Elzero", true));

// // question 174
// class User<T = string> {
//   constructor(public value: T) {}
//   show(msg: T): void {
//     console.log(`${msg} - ${this.value}`);
//   }
// }
// let userOne = new User<string>("Elzero");
// console.log(userOne.value);
// userOne.show("Message");
// let userTwo = new User<number | string>(100);
// console.log(userTwo.value);
// userTwo.show("Message");

// question 175
// interface Book {
//   itemType: string;
//   title: string;
//   isbn: number;
// }

// interface Game {
//   itemType: string;
//   title: string;
//   style: string;
//   price: number;
// }

// class Collection<T> {
//   public data: T[] = [];
//   add(item: T): void {
//     this.data.push(item);
//   }
// }
// let itemOne = new Collection<Book>();
// itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
// itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
// console.log(itemOne);
// let itemTwo = new Collection<Game>();
// itemTwo.add({
//   itemType: "Game",
//   title: "Uncharted",
//   style: "Action",
//   price: 150,
// });
// console.log(itemTwo);

// question 176
// let data: any = "1000";

// console.log((data as string).repeat(3));

// // question 177
// let age: number = 22;
// if (age > 20) {
//   console.log("pass");
// } else if (age < 20) {
//   console.log("return");
// } else {
//   console.log("reboot");
// }

// // question 178
// let favoriteFruits: string[] = ["Apple", "Banana", "Cherry"];
// favoriteFruits.push("Mango");
// console.log(favoriteFruits);

// // question 179
// function removeLastElement<T>(arr: T[]): T | undefined {
//   return arr.pop();
// }
// const fruits: string[] = ["Apple", "Banana", "Cherry"];
// console.log(removeLastElement(fruits));
// console.log(fruits); 

// // question 180
// function replaceBananaWithMango(fruits: string[]): void {
//   const index = fruits.indexOf("Banana");
//   if (index !== -1) fruits[index] = "Mango";
// }
// const fruits: string[] = ["Apple", "Banana", "Cherry"];
// replaceBananaWithMango(fruits);
// console.log(fruits);