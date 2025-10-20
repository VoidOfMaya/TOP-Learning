import { asyncPromis } from "./Modules/async";
import { memeSearch, fetchMemes } from "./Modules/APis";
//const timedCallBack = function(){
//    return "this timed function has concluded after 5 seconds";
//}

//const task = setTimeout(timedCallBack,5000);


console.log('running program');

//asyncPromis(task);


//20.10.2025 api requests



const container = document.createElement('img');
const result = memeSearch('cats');
fetchMemes(result, container);
document.body.appendChild(container);
