// Singly Linked List Implementation in C++
#include <iostream>
using namespace std;

// Node class
class Node {
public:
    int data;
    Node* next;

    Node(int val) : data(val), next(nullptr) {}
};

// Singly Linked List class
class SinglyLinkedList {
private:
    Node* head;
    int size;

public:
    SinglyLinkedList() : head(nullptr), size(0) {}

    bool isEmpty() { return head == nullptr; }
    int getSize() { return size; }

    // Insert at head - O(1)
    void insertAtHead(int data) {
        Node* newNode = new Node(data);
        newNode->next = head;
        head = newNode;
        size++;
    }

    // Insert at tail - O(n)
    void insertAtTail(int data) {
        Node* newNode = new Node(data);
        if (isEmpty()) {
            head = newNode;
        } else {
            Node* current = head;
            while (current->next) {
                current = current->next;
            }
            current->next = newNode;
        }
        size++;
    }

    // Insert at position - O(n)
    void insertAtPosition(int data, int position) {
        if (position < 0 || position > size) {
            throw out_of_range("Position out of bounds");
        }

        if (position == 0) {
            insertAtHead(data);
            return;
        }

        Node* newNode = new Node(data);
        Node* current = head;
        for (int i = 0; i < position - 1; i++) {
            current = current->next;
        }
        newNode->next = current->next;
        current->next = newNode;
        size++;
    }

    // Delete from head - O(1)
    int deleteFromHead() {
        if (isEmpty()) throw runtime_error("List is empty");

        int deletedData = head->data;
        Node* temp = head;
        head = head->next;
        delete temp;
        size--;
        return deletedData;
    }

    // Delete from tail - O(n)
    int deleteFromTail() {
        if (isEmpty()) throw runtime_error("List is empty");

        if (head->next == nullptr) {
            return deleteFromHead();
        }

        Node* current = head;
        while (current->next->next) {
            current = current->next;
        }

        int deletedData = current->next->data;
        delete current->next;
        current->next = nullptr;
        size--;
        return deletedData;
    }

    // Search - O(n)
    int search(int data) {
        Node* current = head;
        int index = 0;
        while (current) {
            if (current->data == data) return index;
            current = current->next;
            index++;
        }
        return -1;
    }

    // Display list
    void display() {
        Node* current = head;
        while (current) {
            cout << current->data << " -> ";
            current = current->next;
        }
        cout << "None" << endl;
    }

    // Destructor
    ~SinglyLinkedList() {
        while (head) {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }
};

int main() {
    SinglyLinkedList sll;
    sll.insertAtTail(1);
    sll.insertAtTail(2);
    sll.insertAtTail(3);
    sll.insertAtHead(0);

    cout << "Singly Linked List: ";
    sll.display();  // 0 -> 1 -> 2 -> 3 -> None

    cout << "Size: " << sll.getSize() << endl;
    cout << "Search 2: index " << sll.search(2) << endl;

    sll.deleteFromHead();
    sll.display();  // 1 -> 2 -> 3 -> None

    return 0;
}
