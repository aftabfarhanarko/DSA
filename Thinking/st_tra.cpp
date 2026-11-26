#include <iostream>
#include <string>
using namespace std;

// Time: O(n)
// Auxiliary Space: O(1)

int main() {
    string name = "Korim";

    for (int i = 0; i < name.length(); i++) {
        cout << name[i] << endl;
    }

    return 0;
}