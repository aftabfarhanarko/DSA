#include <iostream>
#include <string>

// A struct defines a type: a blueprint for values with related data
// (and, in C++, functions that work with that data).
struct Student {
    std::string name;
    int age;

    void introduce() const {
        std::cout << "Hi, I'm " << name << " and I'my " << age << " years old.\n";
    }
};

int main() {
    // These are objects (also called instances) of the Student struct.
    Student student1{"Mina", 20};
    Student student2{"Rafi", 22};

    student1.introduce();
    student2.introduce();
}
  