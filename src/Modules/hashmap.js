//===>single demnsion hash map ground rulles<===
//limit size of bucket array

class Hashmap{
    #load= 0.75;
    #capacity = 16
    #bucket = [];
    constructor (){
        this.#bucket = new Array(this.#capacity).fill(null);
    }

    #hash(key){
        let hashCode = 0;

        const primeN = 31;
        for(let i = 0;i < key.length; i++){
            hashCode = (primeN * hashCode + key.charCodeAt(i)) % this.#bucket.length ;
        }

        return hashCode % this.#bucket.length ;
    }

    set(key, value){
        const hashed = this.#hash(key);
        this.#bucket[hashed] = {key, value};

        const bucketCount = this.#countBuckets();
        const factor = this.#load * this.#capacity;
        if(bucketCount >= factor){
            this.#resize();
        }
        
    }
    get(key){
        const hashed = this.#hash(key);
        const node =this.#bucket[hashed]
        if(node && node.key === key){
            return node.value;
        }
        return null;
    }
    hasKey(key){
        const hashed = this.#hash(key);
        const node = this.#bucket[hashed];
        if(node !== null && node.key ===key){
            return true;
        }else return false;
    }
    remove(key){
        const hashed = this.#hash(key);
        const node = this.#bucket[hashed];
        if(node && node.key === key){
            this.#bucket[hashed] = null;
        }
    }
    length(){
        let counter = 0;
        this.#bucket.forEach(node => {
            if(node !== null){
               counter++;
            }
        });
        return counter;
    }
    clear(){
        this.#capacity = 16;
        this.#bucket = new Array(this.#capacity).fill(null);

    }
    keys(){
        let keyArr = [];
        this.#bucket.forEach((node) =>{
            if(node !== null){
                keyArr.push(node.key);
            }else return;
        })
        return keyArr;
    }
    values(){
        let valueArr = [];
        this.#bucket.forEach((node) =>{
            if(node !== null){
                valueArr.push(node.value);
            }else return;
        })
        return valueArr;
    }
    enteries(){
        let Arr = [];
        this.#bucket.forEach((node) =>{
            if(node !== null){

                Arr.push(node.key, node.value);
            }else return;
        })
        return Arr;
    }

    #resize(){
        const newCapacity = this.#capacity * 2;
        let tempArr = []
        this.#bucket.forEach(node =>{
            if(node !== null){
                tempArr.push(node);
            }
        });

        this.#bucket = new Array(newCapacity).fill(null);
        this.#capacity = newCapacity;

        this.#rehash(tempArr);

    } 
    #rehash(arr){
       arr.forEach(node =>{
        
        this.set(node.key, node.value);
       })
    }      
    
    #countBuckets(){
        let number = 0;
        this.#bucket.forEach(element => {
            if(element !== null){
                number++;
            }
        });
        return number;
    }
    

}

export { 
    Hashmap,
}