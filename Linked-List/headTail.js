// Creat Node

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linklist

class LinkedList {
  // Head and Tail Declier
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Tail ব্যবহার করে লিস্টের শেষে দ্রুত (O(1)) নতুন ডেটা যোগ করা
  append(data) {
    const newNode = new Node(data);

    //  // লিস্ট যদি একদম খালি থাকে, তবে প্রথম নোডটিই Head এবং Tail হবে
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    // বর্তমান Tail-এর পর নতুন নোড যুক্ত করা এবং Tail আপডেট করা
    this.tail.next = newNode;
    this.tail = newNode;
  }
}

const list = new LinkedList();
list.append(10); // Head = 10, Tail = 10
list.append(20); // Head = 10, Tail = 20
list.append(30); // Head = 10, Tail = 30

console.log(list);
