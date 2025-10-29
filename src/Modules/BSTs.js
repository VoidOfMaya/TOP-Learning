//===>balanced binary tree<===
/*
what is a balnced binary tree?
    -height of left subtree and right subtree of root differ by at most 1.
    -left subtree is balanced.
    -rightsubtree is balanced.
    -root node is the middle element of a sorted array
main algorthim:-
-takes array
-if array > 0
-split array to first half (0 -> array.length/2 )
-split array to second half (array.length/2 -> array.length-1)
-define the mid (array.length/2);
-create a node with mid as root
-recursively call 
    -function on (first half) till array =< 1
    -function on (secondhalf) till array =< 1  
  
-
*/
class Node{
    data=null;
    left = null;
    right = null;
    constructor(value){
        this.data = value;
    }
}

class Tree{
    #root = null;
    #array = null;
    constructor(arr){
        this.#array = arr.sort((a, b)=> a - b)
                         .filter((value, index, self)=>{
                            return self.indexOf(value) === index
        })//this.#sortArray(arr);
        console.log(arr);
        console.log(this.#array);
        this.#root= this.#buildTree(this.#array);
    }

    #buildTree(arr){
        if (arr.length === 0 ) return null;

        const mid = Math.floor(arr.length / 2) ;        
        const node = new Node(arr[mid]);
        if(this.#root === null) this.#root = node;

        
        node.left= this.#buildTree(arr.slice(0, mid));
        node.right = this.#buildTree(arr.slice(mid+1));

        return node

        //console.log(`midpoint: ${mid}\nleft arr: ${A}\nright arr: ${arr}`); 
    }
    prettyPrint(node, prefix = '', isLeft = true){
        if (node === null) {
            return;
        }
        if (node.right  !== null) {
            this.prettyPrint(node.right , `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    };

    getRoot() {
        return this.#root;
    }
    find(value){};
    insert(value){};
    deleteItem(value){};
}
export{
    Tree,
}

