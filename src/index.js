import { asyncPromis } from "./Modules/async";

const timedCallBack = function(){
    return "this timed function has concluded after 5 seconds";
}

const task = setTimeout(timedCallBack,5000);


console.log('running program');

asyncPromis(task);