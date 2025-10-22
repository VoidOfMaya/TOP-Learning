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

run();

