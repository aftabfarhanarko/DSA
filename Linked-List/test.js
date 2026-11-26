
// Node Crate
class Node {
    constructor(data) {
        this.data = data ; // First  Data  Saved Node
        this.next = null; 
    }
}

const firstNode = new Node("Email Send");
const secondNode = new Node("Database Update Right Now");

firstNode.next = secondNode;

console.log(firstNode, secondNode);
