// var someNumber = 123; // integer 
// var someDecimal = 3.14; // float
// var someWord = 'Hello world'; // string '' "" ''
// var someTrue = true; // boolean (bool)
// var someNothing = null; // null / nil

// var someArray = [
//     'vaz',
//     'zaz',
//     'gaz',
//     'maz',
//     'bmw',
//     1,
//     3.14,
//     true,
// ]; // array
// // var i = 1;
// // console.log(someArray[i]);
// var johnny = {
//     name: 'Johnny',
//     surname: 'Doe',
//     fullName: 'Johnny Doe',
//     age: '21',
// }; // object
// console.log(johnny.name);
// console.log(johnny.["full name"]);
// console.log(johnny);

// var i = 1;
// console.log(i);
// i = 2;
// console.log(i);
// i = 'foo';
// console.log(i);

// var i = 1;
// console.log(i);
// i = 2;
// console.log(i);
// i = 3;
// console.log(i);
// i = 'foo';
// console.log(i);
// i = 'bar';
// console.log(i);
// i = 'baz';
// console.log(i);


// +
// - 
// *
// /
// // % 
// // var number1 = 2;
// // var number2 = 4;
// // console.log(1 + 1);
// // console.log(2 + 2 * 2);
// // console.log(number1 + number2);
// // console.log(number1 + 3);
// // var number3 = number1 - number2;
// // console.log(number3);
// // console.log((2 + 2) * 2); // 8
// // number1 = number1 + 1;
// // number1 += 1; // short
// // number1++;
// // number1--;
// // console.log(number1);
// // console.log(1 / 0);

// // console.log(4 % 2); // 0
// // console.log(5 % 2); // 1   5 / 2 = 4/2 paliek=1

// // console.log('foo' + 'bar');
// // console.log(1 + '1');
// // console.log('1' + 1);

// // ==
// // !=   not=
// // >
// // <
// // >=
// // <=
// // === strict comparison (equal)
// // !== strict comparison (not equal)

// // if (true) {
// //     console.log('was true');
// // }   else {
// //     console.log('was not true');
// // }

// // if (1 == 1) {
// //     console.log('was true');
// // }   else {
// //     console.log('was not true');
// // }

// // if (1 == 2) {
// //     console.log('was true');
// // }   else {
// //     console.log('was not true');
// // }


// // var name = 'Kārlis';
// // if (name == 'Anna') {
// //     console.log('Čau Anna');
// // } else if(name == 'Jānis') {
// //         console.log('Whats up Jānis');
// // } else {
// //         console.log('Nepazīstu tevi');
// // }

// var a = 1;
// var b = 2;
// var c = 3;
// // && = and
// // || = or
// if (a == 2 && (b == 3 || c == 3)) {

// }

// var name = 'Jānis';
// if (name == 'Jānis' 
// || name == 'Kārlis' 
// || name == 'Zane'); {
//     console.log('Čau, zināmais cilvēk');
// }   else {
//     console.log('Nepazīstu tevi');
// }



// var name = 'Jānis';
// if (name == 'Jānis') {  
//     console.log('Čau, zināmais cilvēk');
// }   else if (name == 'Kārlis') {
//     console.log('Čau, zināmais cilvēk');
// }   else if (name == 'Zane') {
// console.log('Čau, zināmais cilvēk');
// } else {
//     console.log('Nepazīstu tevi');
// }

// var name = 'Kārlis';
// switch (name) {
//     case 'Jānis':
//     case 'Kārlis':
//     case 'Zane':
//         console.log('Čau, zināmais cilvēk');
//         break;
//     default:
//         console.log('Nepazīstu tevi');
// }





// // var allowedNames = ['Jānis', 'Kārlis', 'Zane'];
// // if (allowedNames.indexOf(name) > -1 {
// //     console.log('Čau, zināmais cilvēk');
// // }   else {
// //     console.log('Nepazīstu tevi');
// // }

// // aizskaita lidz 10
// var i = 0;  
// while (i < 10) {
//     console.log(i);
//     i++;
// }
// // aizskaita lidz 10, attelo 5
// var i = 0;
// while (i < 10) {
//     if (i < 5) {
//     console.log(i);
//     }
//     i++;
// }

// while (i < 0) {
//     console.log(i);
//     i += 2;
// }

// // izskaita lidz 20, izdruka para skaitlus
// var i = 0;
// while (i < 20) {
//     if (i % 2 == 0) {
//     console.log(i);
//     }
//     i++;
// }

// var i2 = 0;
// while (i2 < 20) {
//     console.log(i2);
//     }
//     i += 2;
// }


// var i = 0;
// while (i < 20) {
//     if(i == 5) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// // break vietā continue - turpina ciklu no sakuma
// var i = 0;
// while (i < 20) {
//     i++;
//     if(i == 5) {
//         continue;
//     }
//     console.log(i);
// }


// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 20);


// //  skaitisanai visbiezak 0-20
// for (var i = 0; i < 20; i++) {
//     console.log(i);
// }

// // 20-0

// for (var i = 0; i > 20; i--) {
//     console.log(i);
// }

// var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw'];
// for (var index = 0; index < cars.length; index++) {
//     var car = cars[index];
//     console.log(car);
// }
// // izdrukā konkreeto
// var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw'];
// for (var index = 0; index < cars.length; index++) {
//     var car = cars[index];
//     if (index == 2) {
//         console.log(car);
//     }
// }

// //izdrukaa parejaas ne konkreto
// var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw'];
// for (var index = 0; index < cars.length; index++) {
//     var car = cars[index];
//     if (index != 2) {
//         console.log(car);
//     }
// }

// var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw'];
// for (var index = 0; index < cars.length; index++) {
//     console.log(car);
//     var car = cars[index];
//     if (index == 2) {
//         console.log(car);
//     }
// }


// var cars = ['vaz', 'gaz', 'bmw'];
// var superCar = 'gaz';
// for (var index = 0; index < cars.length; index++) {
//     console.log(car);
//     var car = cars[index];
//     if (car == superCar) {
//         console.log(car);
//     }
// }

// function addTwoNumbers(number1, number2) {
//     return number1 + number2;
// }

// console.log(addTwoNumbers(2, 3));




// function addTwoNumbers(number1, number2) {
//     var sum = number1 + number2;
//     console.log(sum);
// }




// for (var i = 0; i <= 30; i++) {
//     if (i % 2 == 0 && i % 3 == 0) {
//         console.log('Fizz Bazz');
//     } else if (i % 3 == 0) {
//         console.log('Bazz');
//     } else if (i % 2 == 0) {
//         console.log('Fizz');
//     } else {
//         console.log(i);
//     }
// }

// for (var i = 0; i <= 30; i++) {
//     var output = '';
//     if (i % 2 === 0) {
//         output = 'Fizz ';
//     }
//     if (i % 3 === 0) {
//         output += 'Bazz';
//     }
//     if (output === '') {
//         outout = i;
//     }
//     console.log(output);
// } 


