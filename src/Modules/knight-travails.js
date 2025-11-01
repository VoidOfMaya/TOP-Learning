class Node{

}
class Graph{
    xCor =[];//width
    yCor =[];//height
    constructor(size){
        for(let i = 0; i < size ; i++){
            this.xCor.push(i);
            this.yCor.push(i);
            
        }
        console.log(`intialize grid:\nX: ${this.xCor}\nY: ${this.yCor}`);
    }
    getKnightMoves([x, y]){
        const moveSet = [[x + 2, y - 1],[x + 2, y + 1],
                         [x + 1, y - 2],[x + 1, y + 2],
                         [x - 1, y - 2],[x - 1, y + 2],
                         [x - 2, y - 1],[x - 2, y + 1]]
    }
}

export{
    Graph,
}