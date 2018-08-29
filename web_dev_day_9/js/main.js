//document
//    .getElementById('some-btn')
//    .addEventListener('click', function () {
//        var el = document.getElementById('super-p');
//        if (el.innerText == 'foo') {
//            el.innerText = 'bar';
//        } else {
//            el.innerText = 'foo';
//        }
//    });


//jQuery = $  api.jquery.com dokumentaacija

// mainaas pogas teksts
// $('#some-btn').click(function(){
//     if ($(this).text() == 'foo') {
//         $(this).text('bar');
//     } else {
//         $(this).text('foo');        
//     }
// }); 

//ar p id

// $('#some-btn').click(function(){
//     if ($('#super-p').html() == 'foo') {
//         $('#super-p').html('bar');
//     } else {
//         $('#super-p').html('foo');        
//     }
// }); 

//ar class
// $('#some-btn').click(function(){
//     if ($('.super-p').html() == 'foo') {
//         $('.super-p').html('bar');
//     } else {
//         $('.super-p').html('foo');        
//     }
// }); 

//uzbraucot uz pogas, mainaas 3

// $('#some-btn').click(function(){
//     if ($('.super-p').html() == 'foo') {
//         $('.super-p').html('bar');
//     } else if ($('.super-p').html() == 'bar') {
//         $('.super-p').html('baz');         
//     } else {
//         $('.super-p').html('foo');        
//     }
// }); 

//paliek ciparinji
// $('#some-btn').click(function () {
//     $('.super-p').each(function (i) {
//         var num = i + 1;
//         if ($(this).html() == 'foo ' + num) {
//             $(this).html('bar ' + num);
//         } else if ($(this).html() == 'bar ' + num) {
//             $(this).html('baz ' + num);
//         } else {
//             $(this).html('foo ' + num);
//         }
//     });
// });

// $('#some-btn').click(function(){
//     $('.super-p').each(function(i){ //i vietaa var rakstiti dajebko
//         console.log(i);
//  //       console.log($(this)); palidz noteikt, kas ir tHIS
//     });  

/// ar data-number bez i
// $('#some-btn').click(function () {
//     $('.super-p').each(function () {
//         var num = $(this).attr('data-number');
//         if ($(this).html() == 'foo ' + num) {
//             $(this).html('bar ' + num);
//         } else if ($(this).html() == 'bar ' + num) {
//             $(this).html('baz ' + num);
//         } else {
//             $(this).html('foo ' + num);
//         }
//     });
// });

//vienkaarshaakaa pieeja
// $('#some-btn').click(function () {
//     $('.super-p').each(function () {
//         var num = $(this).attr('data-number');
//         if ($(this).html() == 'foo ' + num) {
//             $(this).html('bar ' + num);
//         } else if ($(this).html() == 'bar ' + num) {
//             $(this).html('baz ' + num);
//         } else {
//             $(this).html('foo ' + num);
//         }
//     });
// });

//ar teksta izoleeshanu = viskorektakais piemers, lai cipairnjsh nemainiitos
// $('#some-btn').click(function () {
//         if ($('.super-p span').html() == 'foo') {
//             $('.super-p span').html('bar');
//         } else if ($('.super-p span').html() == 'bar') {
//             $('.super-p span').html('baz');
//         } else {
//             $('.super-p span').html('foo');
//         }
// });


// // elemnetu paslepshana ar citu pogu + taimeris
// $('#some-other-btn').click(function(){
//     $('.super-p').toggle(2000); //hide pasleepj , toggle atgriezh
// });


//pieskaita un atnjem lietas
// $('.add').click(function(){
//     var action = $(this).attr('data-action');
//     var currentNumber = $('#some-input').val();
//     var newValue = parseInt(currentNumber) + parseInt(action);
//     $('#some-input').val(newValue);   //shis apdeito vertibu
// });


$('input').keyup(function(){
    if ($('#input1').val() == $('#input2').val()) {
        $('p').html('yay!')
    } else {
        $('p').html('oh no...')
    }
});