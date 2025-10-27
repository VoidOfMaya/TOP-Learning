class LinkedList{
    #length = 0;
    #head = null;
    append(value){
        const node =new Node(value)
        if(this.#head === null){
            this.#head = node;
            
        }else{
            let current = this.#head
            while(current.next !== null){
                current = current.next
            }
            current.next = node
        }
        this.#length++;
    }
    prepend(value){
        if(this.#head ===null){
            this.append(value);
        }
        else{
            const node =new Node (value);
            node.next = this.#head;
            this.#head = node;
        }
        this.#length++;
    }
    getSize(){
        return this.#length;
    }
    getHead(){
        return this.#head;
    }
    getTail(){
        let current = this.#head;
        while(current.next !== null){
            current= current.next
        }
        return current;
    }
    getNode(index){
        let current = this.#head;
        if( typeof index === "number"&& index < this.#length && index >= 0){
            for(let i = 0; i < index; i++){
                current = current.next;
            }
            return current;
        }else{
            console.warn(`index out of bound, please input a valid index`);
            return null;
        }
    }
    pop(){
        if(this.#length ===0) return;
        if(this.#length ===1){
            this.#head = null;
            this.#length--;
            return
        }
        const prev = this.getNode(this.#length-2);
        
        prev.next = null;
        this.#length--;
    }
    contains(value){
        for(let i = 0; i < this.#length; i++){
            const node =this.getNode(i);
            if(node.value === value) return true; 
        }
        return false;
    }
    find(value){
        for(let i = 0; i < this.#length; i++){
            const node =this.getNode(i);
            if(node.value === value){
                return i
            }
        }
        return null;
    }
    toString(){
        let current = this.#head;
        let str =''
        for(let i = 0; i < this.#length; i++){
            (i < this.#length-1) ? str= str + `(${current.value})->`: str= str + `null`;       
            current = current.next;
        }
        console.log(str);
    }
//extra credit:
    removetAt(index){
        if((typeof index !== "number" || index < 0 || index >= this.#length) ) return null;
        if(index === 0){
            if(this.#head === null) return null;
            this.#head = this.getNode(index + 1);
            this.#length--;
        }
        if(index === this.#length){
            const prev = this.getNode(index - 2)
            prev.next = null;
            this.#length--;
        }
        if(index > 0 && index < this.#length ){        
            const back = this.getNode(index -1);
            const front = this.getNode(index);
            back.next = front.next;
            this.#length--;
        }

    }
    insertAt(value ,index){
        if((typeof index !== "number" || index < 0 || index > this.#length) ) return null;

        if(index === 0){
            this.prepend(value);
        }
        if(index === this.#length){
            this.append(value);
        }
        if(index > 0 && index < this.#length ){        
            const node = new Node(value);
            const back = this.getNode(index -1);
            const front = this.getNode(index);
            back.next = node;
            node.next = front;
            this.#length++;
        }   
    }
}
class Node{
   
    constructor(value){
        this.value = value;
        this.next = null;
    }

}


export{
    LinkedList,
}