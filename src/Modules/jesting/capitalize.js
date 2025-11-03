const capitalize = (text)=>{
    let isFirst = true;
    text = text.split('');
    for(let i = 0; i < text.length; i++){
        if(/[a-zA-Z]/.test(text[i]) && isFirst){
            text[i] = text[i].toUpperCase();
            isFirst = false;
        }
    }
    return text.join('');
}

module.exports = capitalize;