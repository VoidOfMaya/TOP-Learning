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
    //then. is for deciding what to do if promis is resolved;
    p.then(function(result){
        console.log(result);
    //catch. if there is an error and promis rejected
    }).catch(function(){
        console.log('ERROR');
    //finally. runs regardless of the promises reject/resolve status
    }).finally(function(){
        console.log("end fnction")
    });
    //onload. calles even if  request status is 404, example use: checks if getrequest status returns a valid 200 OK status or 404 not found


};

export{
    asyncPromis,
}
