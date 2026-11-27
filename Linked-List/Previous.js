// 1. Node Class (Previous Pointer, Data, and Next Pointer)
class Node {
  constructor(data) {
    this.prev = null; // Reference to the previous node
    this.data = data; // Stores the actual data
    this.next = null; // Reference to the next node
  }
}

// 2. Doubly Linked List Class
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a new node at the end of the list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      // If the list is empty, the first node becomes both Head and Tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Establish a two-way connection between nodes
      this.tail.next = newNode; // The new node becomes the next node of the current tail
      newNode.prev = this.tail; // The current tail becomes the previous node of the new node
      this.tail = newNode; // Update the tail to the new node
    }

    this.size++;
  }

  // 3. Forward Traversal (Move from Head to Tail)
  forwardTraversal() {
    let current = this.head; // Start traversal from the head
    let output = "Head -> ";

    while (current) {
      output += `[${current.data}] <-> `;
      current = current.next; // Move forward using the next pointer
    }

    console.log("Forward:", output + "null");
  }

  // 4. Backward Traversal (Move from Tail to Head)
  backwardTraversal() {
    let current = this.tail; // Start traversal from the tail
    let output = "Tail -> ";

    while (current) {
      output += `[${current.data}] <-> `;
      current = current.prev; // Move backward using the previous pointer
    }

    console.log("Backward:", output + "null");
  }
}


const dll = new DoublyLinkedList();

dll.append(10);
dll.append(20);
dll.append(30);
dll.append(40);

// Print the list from Head to Tail
dll.forwardTraversal();

// Print the list from Tail to Head
dll.backwardTraversal();
