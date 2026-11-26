class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // 1. Empty Linked List (Initially everything is empty)
    this.head = null;
    this.tail = null;
    this.size = 0; // Size is zero
  }

  // Method to check if the list is empty
  isEmpty() {
    return this.size === 0;
  }

  // 2. Node Connection & Dynamic Size Increase (Adding new data)
  add(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      // If the list is empty, the first node becomes both Head and Tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Connect the new node to the previous last node (tail)
      this.tail.next = newNode;
      // Set the new node as the new last node (tail)
      this.tail = newNode;
    }

    this.size++; // Dynamically increase size by 1
  }

  // 3. Dynamic Size Decrease (Removing data from the beginning)
  removeFirst() {
    if (this.isEmpty()) {
      console.log("List is already empty!");
      return null;
    }

    const removedData = this.head.data;
    this.head = this.head.next; // Change the connection to make the next node the new Head
    this.size--; // Dynamically decrease size by 1

    // If all data is deleted, Tail must also be set to null
    if (this.isEmpty()) {
      this.tail = null;
    }

    return removedData;
  }
}

// --- Usage and Output of the Code ---
const myList = new LinkedList();

console.log("1. Is it initially empty?:", myList.isEmpty()); // true
console.log("Initial size:", myList.size); // 0

// Adding nodes (Creating connections and increasing size)
myList.add("Dhaka");
myList.add("Chittagong");
myList.add("Sylhet");

console.log("2. Size after adding 3 items:", myList.size); // 3
console.log(
  "Head and Tail connection:",
  myList.head.data,
  "->",
  myList.head.next.data,
  "->",
  myList.tail.data
); // Output: Dhaka -> Chittagong -> Sylhet

// Removing a node (Size will decrease dynamically)
myList.removeFirst();

console.log("3. New size after removing 1 item:", myList.size); // 2
console.log("New Head:", myList.head.data); // Chittagong