//===>hash map ground rulles<===
//limit size of bucket array
class hashmap{
    #loadFactor= 0.75;
    #capacity = 16
    #bucket = [];
    constructor (){
        this.#bucket = new Array(this.#capacity).fill(null);
    }

    #hash(key){
        let hashCode = 0;

        const primeN = 31;
        for(let i = 0;i < key.length; i++){
            hashCode = primeN * hashCode + key.charCodeAt(i) % this.#bucket.length ;
        }
        return hashCode;
    }

    set(key, value){
        index = this.#hash(key);
        if(!this.#bucket[index]){
            this.#bucket[index]= [];
        }
        const bucket = this.#bucket[index];
        for(let i = 0 ; i < this.#bucket.length; i++){
            const [existingKey, existingValue] = bucket[i];
            if(existingKey == key){
                bucket[i]=[key, value];
                return;
            }
        }
        
    }

}