// function buttonClick() {
//     var element = document
//     .getElementById('some-paragraph'); {
//     if (element.innerText == 'foo') {
//         element.innerText = 'bar';
//     } else {
//         element.innerText = 'foo'; 
//     }


// }
// setInterval(buttonClick, 500);   // vai setTimout
// }

//function buttonClick() {
//    var element = document
//       .guerySelector('#some-paragraph'); {
//        if (element.innerText == 'foo') {
//            element.innerText = 'bar';
//       } else {
//           element.innerText = 'foo';
//       }
//   }
//}

// console.log(document.querySelector('.other-paragraph').innerText); // klase atgriezhtikai pirmo elementu

// console.log(document.querySelectorAll('.other-paragraph'));

//mainaas vards, ciparinjsh paliek

//function checkParagraphContent() {
//    var elements = document.querySelectorAll('.other-paragraph');
//    for (var i = 0; i < elements.length; i++) {
//        var element = elements[i]; {
//            var number = i + 1;
//            if (element.innerText == 'foo ' + number) {
//               element.innerText = 'bar ' + number;
//           } else {
//               element.innerText = 'foo ' + number;
//          }
//
//      }
//  }
//}
//      console.log(element);

//function add(number) {
//    var element = document
//        .getElementById('number');
//    var currentValue = parseInt(element.innerText);
//    element.innerText = currentValue + number;
//}

//var count = 0;
//function addCount() {
//    count++;
//    document
//        .getElementById('counter')
//        .innerText = count;
//}

//anagrammu uzdevums

//function isAnagram(str1, str2) {
//    str1 = str1.replace(' ', '').split('').sort().join();
//    str2 = str2.replace(' ', '').split('').sort().join();
//    return str1 == str2; //nevajag if, atgriezh automatisi true false
//}
//console.log('anna ' + isAnagram('anna', 'anna'));
//console.log('random ' + isAnagram('kjgkgf', 'kgjkfg'));
//console.log('sula ' + isAnagram('sula', 'alus'));
//console.log('a a b ' + isAnagram('a b a', 'a a b'));
//uzspiezhot uz pogas, mainaas paragraafa teksts
function buttonStuff() {
    var element = document
        .getElementById('stuff-paragraph'); {
        if (element.innerText == 'bar') {
            element.innerText = 'foo';
        } else {
            element.innerText = 'bar';
        }
    }
}

//mainaas pogas teksts uzspiezhot
function buttonThreeStuff() {
    var element = document
        .getElementById('stuff'); {
        if (element.innerText == 'foo') {
            element.innerText = 'bar';
        } else if (element.innerText == 'bar') {
            element.innerText = 'baz';
        } else {
            element.innerText = 'foo';
        }
    }
}

