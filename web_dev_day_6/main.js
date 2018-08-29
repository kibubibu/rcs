

// function isEven(number) {
//     if (number % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log('number 2 is even ' + isEven(2));
// console.log('number 3 is even ' + isEven(3));
// console.log('number 4 is even ' + isEven(4));
// console.log('number 5 is even ' + isEven(5));
// console.log('number 2243241343435 is even ' + isEven(2243241343435));


// function isEven(number) {
//     if (number % 2 == 0) {
//         return true;
//     } 
//     return false;
// }
// console.log('number 2 is even ' + isEven(2));
// console.log('number 3 is even ' + isEven(3));
// console.log('number 4 is even ' + isEven(4));
// console.log('number 5 is even ' + isEven(5));
// console.log('number 2243241343435 is even ' + isEven(2243241343435));


// function isEven(number) {
//     return number % 2 == 0;
// }
// console.log('number 2 is even ' + isEven(2));
// console.log('number 3 is even ' + isEven(3));
// console.log('number 4 is even ' + isEven(4));
// console.log('number 5 is even ' + isEven(5));
// console.log('number 2243241343435 is even ' + isEven(2243241343435));



// function isEven(number) {
//     if (number % 2 == 0) {
//         return 'is even';
//     } else {
//         return 'is odd';
//     }
// }
// console.log('number 2 is even ' + isEven(2));
// console.log('number 3 is even ' + isEven(3));
// console.log('number 4 is even ' + isEven(4));
// console.log('number 5 is even ' + isEven(5));
// console.log('number 2243241343435 is even ' + isEven(2243241343435));


// function isEven(number) {
//     return number % 2 == 0 ? 'is even' : 'is odd';
// }
// console.log('number 2 is even ' + isEven(2));
// console.log('number 3 is even ' + isEven(3));
// console.log('number 4 is even ' + isEven(4));
// console.log('number 5 is even ' + isEven(5));
// console.log('number 2243241343435 is even ' + isEven(2243241343435));



// function fizzBazz(number) {
//     var output = '';
//     if (number % 2 === 0) {
//         output = 'Fizz ';
//     }
//     if (number % 3 === 0) {
//         output += 'Bazz';
//     }
//     if (output === '') {
//         output = number;
//     }
//     return output;
// }

// mainigaa tips FUNKCIJA
// var isEven2 = function(number){
//     return number % 2 == 0 ? 'is even' : 'is odd';
// }
// console.log('number 2 ' + isEven2(2));
// console.log('number 3 ' + isEven2(3));
// console.log('number 4 ' + isEven2(4));
// console.log('number 5 ' + isEven2(5));
// console.log('number 2243241343435 ' + isEven2(2243241343435));

// funkcija ieksh objekta = METODE
// var cat = {
//     name: 'Muris',
//     hunger: 10,
//     feed: function(){
//         this.hunger--; //samazina izsalkumu par 1, baksta ieksheejaas metodees visu
//     }
// }
// console.log(cat);
// // cat.hunger += 2; // padara sho izsalkushaaku
// cat.feed();
// cat.feed();
// cat.feed();
// console.log(cat);





// console.log(Math.PI); // Math.pow = kaapinaashana, Math.round = noapaljoshana, .floor - noapaljo uz leju, .ceil - noaapaljo uz augshu

// var now = new Date(); 
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);
// console.log(now);

// var foo = 'bar'; // string arii ir objekts
// console.log(foo.lenght);  // length objekta garums, indexOf - kuraa vietaa ir kaut kads vards (str.indexOf("locate"))

// console.log(foo.split(''));

// funkcija kas kaa parametru sanjem vineu vaardu
// split reverse join

console.log('pineapple'.split('').reverse().join());

function reverseWord(word) {
    return word.split('').reverse().join(''); 
}
    console.log(reverseWord ('alus ari ira sula'));




function isPalindrom(word) {
    return word == reverseWord(word);
}
console.log(isPalindrom ('alus ari ira sula'));
console.log(isPalindrom ('eye'));

// Text.split funkcija maajaas a,b,c,d,e, sadala masiivaa

//array methods - masiivi
