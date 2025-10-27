//===>hash map ground rulles<===
//limit size of bucket array
class hashmap{
    #loadFactor= 0.75;
    #capacity = 16
    #bucket = [];

    hash(key){
        let hashCode = 0;

        const primeN = 31;
        for(let i = 0;i < key.length; i++){
            hashCode = primeN * hashCode + key.charCodeAt(i) % 16;
        }
        return hashCode;
    }

    set(key, value){
        
    }

}