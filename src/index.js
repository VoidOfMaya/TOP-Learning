import { asyncPromis } from "./Modules/async";
import { memeSearch, fetchMemes } from "./Modules/APis";

//const timedCallBack = function(){
//    return "this timed function has concluded after 5 seconds";
//}

//const task = setTimeout(timedCallBack,5000);


console.log('running program');

//asyncPromis(task);


//20.10.2025 api requests



/*const container = document.createElement('img');

const searchBar = document.createElement('input');
const submitReq = document.createElement('div');

searchBar.placeholder = "click to search!";
searchBar.required;

submitReq.innerHTML = "let there be gifs"

submitReq.addEventListener('click',()=>{
    
    if( searchBar.value !== ""){
        const result = memeSearch(String(searchBar.value));
        fetchMemes(result, container);
    }else{
        console.log(`invalid search option!`);
    }
})
//fetchMemes(result, container);

document.body.appendChild(searchBar);
document.body.appendChild(submitReq)
document.body.appendChild(container);
*/

//computer science study: 22.10.2025
import { run } from "./Modules/recursion";
import { LinkedList } from "./Modules/linkedlists";
import { Hashmap } from "./Modules/hashmap";
/*
const list = new LinkedList ();
//1
list.append('cats');
list.append('dogs');
list.append('fish');
list.append('lizards');
list.append('birds');
//2
list.prepend('batman');
list.prepend('chickens');
//3
list.pop();
//4
list.toString();
//5
console.log(`size ; ${list.getSize()}`);
//6
console.log(`head ; ${JSON.stringify(list.getHead())}`);
//7
console.log(`tail ; ${JSON.stringify(list.getTail())}`);
//8
console.log(`get node: ${JSON.stringify(list.getNode(1))}`)
//8
console.log(list.find('batman')); 
//9
console.log(list.contains('lizards'));
list.insertAt('dragons', 3);
list.insertAt('mermaids', 6);
list.insertAt('vampiers', 0);
list.toString();

console.log(`remove 1`)
list.removetAt(0);
console.log(`remove 2`)
list.removetAt(3);
console.log(`remove 3`)
list.removetAt(6);
list.toString();
*/
const test = new Hashmap();
 test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 console.log(test.length());
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden')
 
 //console.log(`entiries: ${test.enteries()}`);
test.keys().forEach(element => {
    console.log(`{${element}}`);
});
console.log(test.length());

test.remove('banana')
test.keys().forEach(element => {
    console.log(`{${element}}`);
});
console.log(test.length());