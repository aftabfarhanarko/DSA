// ১. Doubly Linked List-এর Node ক্লাস (৩টি অংশ)
class Node {
  constructor(data) {
    this.prev = null; // আগের নোডের ঠিকানা
    this.data = data; // মূল ডেটা
    this.next = null; // পরের নোডের ঠিকানা
  }
}

// ২. Doubly Linked List ক্লাস
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // লিস্টের শেষে নতুন ডেটা যোগ করা
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail; // নতুন নোডের পেছনে বর্তমান tail-কে যুক্ত করা
      this.tail.next = newNode; // বর্তমান tail-এর সামনে নতুন নোড যুক্ত করা
      this.tail = newNode;      // নতুন নোডকে tail বানানো
    }
    this.size++;
  }

  // সামনের দিক থেকে সব ডেটা দেখা (Head -> Tail)
  printForward() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log("Forward:", result.join(" <-> "));
  }

  // পেছনের দিক থেকে সব ডেটা দেখা (Tail -> Head)
  printBackward() {
    let current = this.tail;
    const result = [];
    while (current) {
      result.push(current.data);
      current = current.prev; // prev ব্যবহার করে উল্টো দিকে যাওয়া হচ্ছে
    }
    console.log("Backward:", result.join(" <-> "));
  }
}

// --- ব্যবহার করে দেখা যাক ---
const browserHistory = new DoublyLinkedList();
browserHistory.append("Google.com");
browserHistory.append("YouTube.com");
browserHistory.append("Facebook.com");

browserHistory.printForward();  // আউটপুট: Forward: Google.com <-> YouTube.com <-> Facebook.com
browserHistory.printBackward(); // আউটপুট: Backward: Facebook.com <-> YouTube.com <-> Google.com
