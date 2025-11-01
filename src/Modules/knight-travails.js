class Node{

}
class Graph{
    xCor =[];//width
    yCor =[];//height
    constructor(){

        for(let i = 0; i < 8 ; i++){
            this.xCor.push(i);
            this.yCor.push(i);
            
        }
        console.log(`intialize grid:\nX: ${this.xCor}\nY: ${this.yCor}`);
    }
    getKnightMoves([x, y],[tx, ty]){
        const moveSet = [
            [2,-1],[2, 1],
            [1,-2],[1, 2],
            [-1,-2],[-1,2],
            [-2,-1],[-2,1]
        ];

        if(x === tx && y === ty){
            return[[x,y]];
        };
        const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
        const parent = Array.from({ length: 8 }, () => Array(8).fill(null));  
        visited[x][y] = true;

        const queue = [[x , y]];
        while(queue.length > 0){
            const currentNode = queue.shift();
            const [cX, cY] = currentNode;

            for(let move of moveSet){
                const [dx, dy] = move;
                const nX = cX + dx;
                const nY = cY + dy;

                if(nX >= 0 && nX < 8 && nY >= 0 && nY < 8 && !visited[nX][nY]){
                    visited[nX][nY] = true;
                    queue.push([nX, nY]);

                    parent[nX][nY]= [cX, cY];

                    if(nX === tx && nY === ty){
                        const path = [];
                        let current = [nX, nY];
                        while(current !== null){
                            path.unshift(current);
                            current = parent[current[0]][current[1]];
                        }
                        console.log(`=> you made it in ${path.length} moves!, heres your path:`);
                        path.forEach((point, i) =>{
                            console.log(`[${path[i]}]`);
                        })
                        return path
                    }
                }

            }
        }
        return null;

    }
}

export{
    Graph,
}