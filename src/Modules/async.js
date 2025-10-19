//19,10,2025 : asynchronis coding


//testing async coding

const asyncPromis = function (task){

    let p = new Promise(function(resolve, reject){
        if(task !== undefined){
            resolve("hyyyaaaaaaa");
        }else{
            reject("emotional damage");
        }
    });
    //then. is for deciding what to do if promis is resolved, then recieves the result of .resolve();
    // .then can be chained and recieves the result of the previous .then
    // only triggers on .resolve()
    p.then((result)=>{
        console.log(result);
    //catch. if there is an error and promis rejected, only executes on promise.reject()
    //catch does whatever you tell it to do , oten! used to throw an error message
    }).catch(()=>{
        console.error();
        ('ERROR');
    //finally. runs regardless of the promises reject/resolve status
    }).finally(()=>{
        console.log("end fnction")
    });
    //Promise.onload.
    //calles even if  request status is 404, example use: checks if getrequest status returns a valid 200 OK status or 404 not found
    p.onload= ()=>{
        if (p.status ==200){
            //do something
        }else{
            //do an other thing
        }
    }
    //promise funcitonallity can be returned without creating a new promise

    if(/*some condition*/ true){
        return Promise.resolve(/* value */);
    }
    // explore the fetch and battery API!

    //Promise.all
    //only responds when all promises are completed 
    //it takes an array of Promises
    //fires call back once they are all resolved
    //returns .reject() if one or more promis is not resolved
    Promise.all([promise1, promise2]).then((result)=>{
        //both promises resolved
        //do something
    }).catch((error)=>{
        //one or more promise rejected
        //do something
    })

    //Promise.Race
    //takes a promise array like Promise.all
    //HOWEVER, it doesnt wait for all promises to reslove
    //it fires on the first resolve()/reject()
    //use cases: if requesting from a primery and secondary source 
    //this can be used  to fetch data from whichever resolves first
    Promise.race([promise1, promise2]).then((one)=>{
        console.log('then: ', one);
    }).catch((one, two)=>{
        console.log('catch: ', one )
    })



};

export{
    asyncPromis,
}
