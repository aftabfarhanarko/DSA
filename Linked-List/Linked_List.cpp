#include <iostream>
using namespace std;

class List {
    struct Node {
        int data;
        Node* next;

        Node(int value) : data(value), next(nullptr) {}
    };

    Node* head;
    Node* tail;

public:
    List() : head(nullptr), tail(nullptr) {}

    void push_front(int val) {
        Node* newNode = new Node(val);

        if (head == nullptr) {
            head = tail = newNode;
        } else {
            newNode->next = head;
            head = newNode;
        }
    }

    void print() const {
        for (Node* current = head; current != nullptr; current = current->next) {
            cout << current->data << ' ';
        }
        cout << '\n';
    }

    ~List() {
        while (head != nullptr) {
            Node* current = head;
            head = head->next;
            delete current;
        }
    }
};

int main() {
    List ll;
    ll.push_front(1);
    ll.push_front(2);
    ll.push_front(3);
    ll.print();  // 3 2 1
    return 0;
}