class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // ১. Empty Linked List (শুরুতে সব খালি)
    this.head = null;
    this.tail = null;
    this.size = 0; // আকার শূন্য
  }

  // লিস্টটি খালি কি না তা চেক করার মেথড
  isEmpty() {
    return this.size === 0;
  }

  // ২. Node Connection & Dynamic Size বৃদ্ধি (নতুন ডেটা যোগ)
  add(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      // লিস্ট খালি থাকলে প্রথম নোডটিই Head এবং Tail হবে
      this.head = newNode;
      this.tail = newNode;
    } else {
      // আগের শেষ নোডের (tail) সাথে নতুন নোডের সংযোগ (Connection)
      this.tail.next = newNode;
      // নতুন নোডটিকেই এখন শেষ নোড (tail) হিসেবে সেট করা
      this.tail = newNode;
    }

    this.size++; // ডাইনামিকভাবে সাইজ ১ বাড়ল
  }

  // ৩. Dynamic Size হ্রাস (শুরু থেকে ডেটা বাদ দেওয়া)
  removeFirst() {
    if (this.isEmpty()) {
      console.log("List is already empty!");
      return null;
    }

    const removedData = this.head.data;
    this.head = this.head.next; // সংযোগ পরিবর্তন করে পরের নোডকে Head বানানো হলো
    this.size--; // ডাইনামিকভাবে সাইজ ১ কমল

    // সব ডেটা ডিলিট হয়ে গেলে Tail-কেও null করে দিতে হবে
    if (this.isEmpty()) {
      this.tail = null;
    }

    return removedData;
  }
}

// --- কোডটির ব্যবহার ও আউটপুট দেখা ---

const myList = new LinkedList();
console.log("List Prient :", myList.isEmpty()); // true
console.log("Size OF List in First : ", myList.size); // 0

// নোড যোগ করা (Connection তৈরি হচ্ছে এবং Size বাড়ছে)
myList.add("Dhaka");
myList.add("Chittagong");
myList.add("Sylhet");

console.log("2 & 3 List Add to Size : ", myList.size); // 3
console.log(
  "Head ও Tail add :",
  myList.head.data,
  "->",
  myList.head.next.data,
  "->",
  myList.tail.data,
);
// আউটপুট: Dhaka -> Chittagong -> Sylhet

// একটি নোড বাদ দেওয়া (Dynamic ভাবে Size কমে যাবে)
myList.removeFirst();
myList.removeFirst()
console.log("Removed List To One Element : ", myList.size); // 2
console.log("New Head:", myList.head.data); // Chittagong
