class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(source, destination) {
        this.addVertex(source);
        this.addVertex(destination);
        this.adjacencyList[source].push(destination);
    }

    bfs(start) {
        const visited = new Set([start]);
        const queue = [start];
        const order = [];

        while (queue.length > 0) {
            const vertex = queue.shift();
            order.push(vertex);

            this.adjacencyList[vertex].forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            });
        }

        return order;
    }

    dfs(start) {
        const visited = new Set();
        const order = [];

        const traverse = (vertex) => {
            visited.add(vertex);
            order.push(vertex);

            this.adjacencyList[vertex].forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    traverse(neighbor);
                }
            });
        };

        traverse(start);
        return order;
    }
}

const roadNetwork = new Graph();
roadNetwork.addEdge("Home", "School");
roadNetwork.addEdge("Home", "Grocery");
roadNetwork.addEdge("School", "Library");
roadNetwork.addEdge("Grocery", "Gym");

console.log("Road network adjacency list:", roadNetwork.adjacencyList);
console.log("BFS from Home:", roadNetwork.bfs("Home"));
console.log("DFS from Home:", roadNetwork.dfs("Home"));
