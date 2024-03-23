// ****************** Question # 01 ***********************

// const quest:string = "Node JS, VS-Code & TypeSript";
// console.log(`Succesfully Install ${quest}.`)

// ****************** Question # 02 ***********************

// const personName:string = "Eric";
// console.log(`Hello, ${personName} whould you like to learn some phyton today?`);

// ****************** Question # 03 ***********************

// let personName:string = "Umar Hasnain";
// let personName1:string = personName.toUpperCase();
// let personName2:string = personName.toLowerCase();
// let personName3:string = personName.toLocaleUpperCase();

// console.log(personName);
// console.log(personName1);
// console.log(personName2);
// console.log(personName3);

// //CHATGPT CODE
// let personName: string = "John Doe";

// console.log("Lowercase: " + personName.toLowerCase());
// console.log("Uppercase: " + personName.toUpperCase());

// // Titlecase function
// function toTitleCase(str: string): string {
//     return str.replace(/\b\w/g, (char: string) => char.toUpperCase());
// }

// console.log("Titlecase: " + toTitleCase(personName));

// ****************** Question # 04 ***********************

// let quote: string = "Success is liking yourself, liking what you do, and liking how you do it.";
// let author: string = "Albert Einstein";

// console.log(`${author} once said, "${quote}"`);


// ****************** Question # 05 ***********************
// let famous_person: string = "Albert Einstein";
// let quote: string = "A person who never made a mistake never tried anything new.";
// let message: string = `${famous_person} once said, "${quote}"`;

// console.log(message);


// ****************** Question # 06 ***********************

// let personNameWithWhitespace: string = "\t\n   John Doe   \t\n";
// console.log("Name with whitespace:");
// console.log(personNameWithWhitespace);

// let strippedName: string = personNameWithWhitespace.trim();
// console.log("\nStripped name:");
// console.log(strippedName);


// ****************** Question # 07 ***********************
// Addition
// let additionResult: number = 5 + 3;
// console.log("Addition:", additionResult);

// // Subtraction
// let subtractionResult: number = 10 - 2;
// console.log("Subtraction:", subtractionResult);

// // Multiplication
// let multiplicationResult: number = 4 * 2;
// console.log("Multiplication:", multiplicationResult);

// // Division
// let divisionResult: number = 16 / 2;
// console.log("Division:", divisionResult);




// ****************** Question # 08 ***********************

// console.log(5 + 3);
// console.log(2 - 10);
// console.log(2 * 4);
// console.log(16 / 2);


// ****************** Question # 09 ***********************

// let favoriteNumber: number = 4;
// console.log(`My Favorite Number is: ${favoriteNumber}`)

// ****************** Question # 10 ***********************

// let myName: string = "Umar Hasnain";
// let todayDate: number = 14 / 3 / 2024;

// console.log(`My name is: ${myName} and today Date is: ${todayDate}`)


// ****************** Question # 11 ***********************

// let names: string[] = ["Huzaifa", "Abubakar", "Abdul Moiz", "Owais"];

// for (let i = 0; i < names.length; i++) {

//     console.log(`My Freinds Name is: ${names[i]}`)
// }


// ****************** Question # 12 ***********************


// let freindNames: string[] = ["Huzaifa", "Abubakar", "Abdul Moiz", "Owais"];
// let greetingMessage: string = "Hello, ";


// console.log("Greetings to friends:");
// for (let i = 0; i < freindNames.length; i++) {
//     console.log(`${greetingMessage}${freindNames[i]}!`);
// }

// ****************** Question # 13 ***********************

// let favoriteTransportation: string[] = ["Tesla Model S", "Honda Civic", "Ford Mustang", "BMW 3 Series"];

// console.log("Statements about favorite transportation:");
// for (let i = 0; i < favoriteTransportation.length; i++) {
//     console.log(`I would like to own a ${favoriteTransportation[i]}.`);
// }


// ****************** Question # 14 ***********************

// let guestList: string[] = ["Ali", "Hamza", "Muzammil"];

// console.log("Invitation to dinner:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]},\n\nYou are cordially invited to dinner at my place. It would be an honor to have you join us for an evening of good food and conversation.\n\nBest regards,\n[Your Name]`);
// }

// ****************** Question # 15 ***********************

// let guestList: string[] = ["Ali", "Hamza", "Muzammil"];
// let guestCantMakeIt: string = "Hamza";
// let newGuest: string = "Ahmed";

// console.log(`${guestCantMakeIt} can't make it to dinner.`);

// guestList[guestList.indexOf(guestCantMakeIt)] = newGuest;

// console.log("\nNew invitation to dinner:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]},\n\nYou are cordially invited to dinner at my place. It would be an honor to have you join us for an evening of good food and conversation.\n\nBest regards,\n[Umar Hasnain]`);
// }


