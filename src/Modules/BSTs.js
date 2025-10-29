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
        console.log(arr);
        this.#array = arr.sort((a, b)=> a - b)
                         .filter((value, index, self)=>{
                            return self.indexOf(value) === index
        })//this.#sortArray(arr);

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
    
    find(value){
        let currentNode = this.#root;
        while(currentNode !== null){
            if(value === currentNode.data) return currentNode;

            if(value < currentNode.data){
                if(currentNode.left === null) return null;
                else currentNode = currentNode.left;

            }else if(value > currentNode.data){
                if(currentNode.right === null) return null;
                else currentNode = currentNode.right;
            }           
        }
    };
    //base case: 
    //           if value smaller then root check if left is null, if left is null new node insert
    //           if value greater then root check if right is null, if right is null new node insert
    insert(value){
        if (this.#root === null) {
            this.#root = new Node(value);
            return;
        }
        let currentNode = this.#root;
        while (currentNode !== null){
                if(value === currentNode.data) return console.warn(`this value already exists!`);
            if(value < currentNode.data){

                if(currentNode.left === null){
                    currentNode.left = new Node(value);
                    return;
                }else currentNode = currentNode.left;

            }else if(value > currentNode.data){

                if(currentNode.right === null){
                    currentNode.right= new Node(value);
                    return;
                }else currentNode = currentNode.right;
            
            }
        }  
    };
    // case 1: node is leaf node
    // case 2: node has 1 child
    // case 3: node has 2 children
    deleteItem(value){
        let currentNode = this.#root;
        let parentNode = null;

        while (currentNode !== null && currentNode.data !== value) {
            parentNode = currentNode;  // Keep track of the parent
            if (value < currentNode.data) {
                currentNode = currentNode.left;
            } else if (value > currentNode.data) {
                currentNode = currentNode.right;
            }
        }
        if(currentNode === null) return null;
        //case 1 leaf nodes
        if(currentNode.left ===null && currentNode.right === null){
            if(parentNode ===null) this.#root = null;
            else if(parentNode.left === currentNode) parentNode.left = null;
            else parentNode.right = null;    
        }
        //case 2 node has 1 child
        else if(currentNode.left ===null || currentNode.right === null){
            const childNode = currentNode.left ? currentNode.left : currentNode.right;

            if(parentNode === null) this.#root = childNode;
            else if(parentNode.left === currentNode) parentNode.left = childNode;
            else parentNode.right = childNode
        }
        //case 3 node has 2 children
        else{
            let successorParent = currentNode;
            let successor = currentNode.right;
            while(successor.left !== null){
                successorParent = successor;
                successor = successor.left;
            }
            
            currentNode.data = successor.data;

            if(successorParent !== currentNode){
                successorParent.left = successor.right;
            }else successorParent.right =successor.right;
        }
    };
    levelOrderForEach(fn){
        //breadth first algo:
        //get node
        //push node to queue
        //pull node from queue and push its children to queue
        //push current node to queue
        if(typeof fn !== "function") throw new Error('a call back funciton is required');
        if(this.#root === null) return;

        const queue = [];
        queue.push(this.#root);
        while(queue.length > 0){
            const currentNode =queue.shift();
            fn(currentNode);

            if(currentNode.left !== null) queue.push(currentNode.left);
            if(currentNode.right !== null) queue.push(currentNode.right);
        }

    };
    //<left><root><right>
    inOrderForEach(fn){
        if(typeof fn !== "function") throw new Error('a call back funciton is required');
        if(this.#root === null) return;
        

        this.#inOrder(this.#root, fn);

    };
    #inOrder(node, fn){
        if(node ===null)return;
        this.#inOrder(node.left, fn);
        fn(node);
        this.#inOrder(node.right, fn);
    }
    //<root><left><right>
    preOrderForEach(fn){
        if(typeof fn !== "function") throw new Error('a call back funciton is required');
        if(this.#root === null) return;
        

        this.#preOrder(this.#root, fn);

    };
    #preOrder(node, fn){
        if(node ===null)return;
        fn(node);
        this.#preOrder(node.left, fn);
        this.#preOrder(node.right, fn);
    }    
    //<left><right><root>
    postOrderForEach(fn){
        if(typeof fn !== "function") throw new Error('a call back funciton is required');
        if(this.#root === null) return;
        

        this.#postOrder(this.#root, fn);

    };
    #postOrder(node, fn){
        if(node ===null)return;
        this.#postOrder(node.left, fn);
        this.#postOrder(node.right, fn);
        fn(node);
    }

    height(value){
        const currentNode = this.find(value);
        if(currentNode === null) return null;
        //is leaf node
        const getHeight = (node)=>{
            if(node === null) return -1;

            const leftheight = getHeight(node.left);
            const rightheight = getHeight(node.right);
            return Math.max(leftheight, rightheight)+ 1;
        }
        return getHeight(currentNode);
    }
    depth(value){
        const currentNode = this.find(value);
        if(currentNode === null) return null;
        const getDepth = (node,currentDepth = 0)=>{
            if(node === null) return -1;
            if(node.data === value) return currentDepth;

            if(value<node.data){
                return getDepth(node.left, currentDepth+ 1);
            }else{
                return getDepth(node.right, currentDepth + 1);
            }
        }
        return getDepth(this.#root);
    }
    isBalanced(){}
}
export{
    Tree,
}

