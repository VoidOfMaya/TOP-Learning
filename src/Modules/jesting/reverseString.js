const  revString = (text)=>{
    text = text.split('');
    let result = []
    for(let i = text.length ; i >= 0 ; i--){
        result.push(text[i]);
    }
    return result.join('');
}

module.exports = revString;