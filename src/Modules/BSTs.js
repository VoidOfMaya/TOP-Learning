//===>balanced binary tree<===
/*
what is a balnced binary tree?
    -height of left subtree adn right subtree of root differ by at most 1.
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
    #root=null;
    #lNode = null;
    #rNode = null;
    constructor(value){
        this.setRoot(value);
    }

    setRoot(value){
        this.#root = value;
    }
    setLNode(value){
        this.#lNode = value;
    }
    setRNode(value){
        this.#rNode = value;
    }
    getRoot() {
        return this.#root;
    }
    getLNode() {
        return this.#lNode;
    }
    getRNode() {
        return this.#rNode;
    }
}

class Tree{
    #root = null;
    #array = null;
    constructor(arr){
        this.#array = this.#sortArray(arr);
        this.#root= this.#buildTree(this.#array);
    }
    #sortArray (array){
        const uniqueArray = array.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        return uniqueArray.sort((a,b)=>a-b);
    };
    #buildTree(arr){
        if(arr.length === 0){
            return null;
        }
        
        const midindex = Math.floor(arr.length/2);
        const node = new Node(arr[midindex]);

        node.setLNode(this.#buildTree(arr.slice(0, midindex)));
        node.setRNode(this.#buildTree(arr.slice(midindex +1)));

        return node;

    }
    prettyPrint(node, prefix = '', isLeft = true){
        if (node === null) {
            return;
        }
            const leftNode = node.getLNode();
            const rightNode = node.getRNode();
    
        if (rightNode  !== null) {
            this.prettyPrint(rightNode , `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.getRoot()}`);
        if (leftNode !== null) {
            this.prettyPrint(leftNode, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    };

    getRoot() {
        return this.#root;
    }
}
export{
    Tree,
}

