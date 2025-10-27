class LinkedList{
    Length = 0;
    head = null;
    append(value){
        const node =new Node(value)
        if(this.head === null){
            this.head = node;
            
        }else{
            let current = this.head
            while(current.next !== null){
                current = current.next
            }
            current.next = node
        }
        length++;
    }

    toString(){
        let current = this.head;
        while(current.next !== null){
            console.log(`(${current.value})=>`);
            current = current.next;
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