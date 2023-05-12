//EXAMINE THE DOCUMENT OBJECT//
// //console.dir(document);
// //console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
//console.log(document.images);


// GETELEMENTBYID // (Selectors)
//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerHTML = 'GoodBye';
//console.log(headerTitle.textContent); // it wont work on style tag
//console.log(headerTitle.innerText); // works on inside the style tag also
//headerTitle.innerHTML = '<h3>Hello</h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';
//header.style.borderBottom = 'solid 3px #000';
//(all these stuffs are used in jquery but now we can use them using JavaScript)


//(Another Selector)
//GETELEMENTSBYCLASSNAME(it is used to get group of elements not single elements)
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);
// //items[1].textContent = 'Hello';
// items[0].style.fontWeight = 'bold';
// items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
// items[3].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';
//items[4].style.backgroundColor = 'orange';

// ERROR
//items.style.backgroundColor = '#f4f4f4'; // it doesnt work coz its a HTML collection
// to solve this error we can use for loop and resolve

//for (var i = 0; i < items.length; i++) {
//    items[i].style.backgroundColor = '#f4f4f4';
//}

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[0]);
// // //items[1].textContent = 'Hello';
// li[0].style.fontWeight = 'bold';
// li[1].style.fontWeight = 'bold';
// li[2].style.fontWeight = 'bold';
// li[3].style.fontWeight = 'bold';
// li[4].style.fontWeight = 'bold';
// // items[2].style.backgroundColor = 'green';
// li[4].style.backgroundColor = 'pink';


// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 6px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'black';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';

// QUERYSELECTORALL //
var titles = document.querySelectorAll('.title');
console.log(titles);
//titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
//var secItem = document.querySelectorAll('li:nth-child(2)');


for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#008000';
    even[i].style.backgroundColor = '#ccc';
    //secItem[1].style.color = '#008000';

}







