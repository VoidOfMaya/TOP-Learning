//===>hash map ground rulles<===
//limit size of bucket array
import {LinkedList} from "./linkedlists.js"
class hashmap{
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
            hashCode = primeN * hashCode + key.charCodeAt(i) % this.#bucket.length ;
        }
        return hashCode;
    }

    set(key, value){
        const hashed = this.#hash(key);
        
        if(this.#bucket[hashed] === null){
            const node = new LinkedLis();
            this.#bucket[hashed] = node;
            node.append({key, value});
        
        }else{
            const node = this.#bucket[hashed];
            if(node.contains(key)){
                const existingNode = node.getNode(node.find(key));
                existingNode.value = value;
            }else{
                node.append({key, value});
            }
        }
        const bucketCount = this.#countBuckets();
        const factor = this.#load * this.#capacity;
        if(bucketCount >= factor){
            this.#resize();
        }
        
    }
    get(key){
        const hashed = this.#hash(key);
        const node =this.#bucket[hashed]
        if(node !== null && node.contains(key)){
            const existingNode = node.getNode(node.find(key));
            return existingNode.value;
        }
        return null;
    }
    hasKey(key){
        const hashed = this.#hash(key);
        const node = this.#bucket[hashed];
        if(node !== null && node.contains(key)){
            return true;
        }else return false;
    }
    remove(key){
        const hashed = this.#hash(key);
        const node = this.#bucket[hashed];
        if(node !== null && node.contains(key)){
            node.removeAt(node.find(key));
        }
        if(node.getHead() === null){
            this.#bucket[hashed] = null
        }
    }
    length(){
        let counter = 0;
        this.#bucket.forEach(node => {
            if(node !== null){
               counter += node.getSize();
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
        this.#bucket.forEach((node, i) =>{
            if(node !== null){
                let currentNode = node.getHead();
                while(currentNode !== null){
                    keyArr.push(currentNode.value.key);
                    currentNode = currentNode.next;
                }
            }else return;
        })
        return keyArr;
    }
    values(){
        let keyArr = [];
        this.#bucket.forEach((node) =>{
            if(node !== null){
                let currentNode = node.getHead();
                while(currentNode !== null){
                    keyArr.push(currentNode.value.value);
                    currentNode = currentNode.next;
                }
            }else return;
        })
        return keyArr;
    }
    enteries(){
        let keyArr = [];
        this.#bucket.forEach((node, i) =>{
            if(node !== null){
                let currentNode = node.getHead()
                while(currentNode !== null){
                    keyArr.push(currentNode.value.key, currentNode.value.value);
                    currentNode = currentNode.next;
                }
            }else return;
        })
        return keyArr;
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
        let currentNode = node.getHead();
        
        while(currentNode !==null){
            this.set(currentNode.key, currentNode.value);
            currentNode = currentNode.next;

        }
       })
    }      
    
    #countBuckets(){
        let number = 0;
        this.#bucket.forEach(element => {
            if(element !== null){
                number++;
            }else return;
        });
        return number;
    }
    

}