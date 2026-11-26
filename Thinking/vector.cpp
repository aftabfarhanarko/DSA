#include <iostream>
#include <vector>

using namespace std;

int main() {

    vector<int> numbers = {10, 20, 30};

    // Add element
    numbers.push_back(40);
    numbers.push_back(60);

    // Remove last element
    numbers.pop_back();

    // Get vector size
    cout << "Size: " << numbers.size() << endl;

    // Access elementsbbb
    cout << "First: " << numbers.front() << endl;
    cout << "Last: " << numbers.back() << endl;

    return 0;
}