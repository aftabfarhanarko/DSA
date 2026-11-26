#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

bool isAnagram(string a, string b) {
    if (a.length() != b.length()) {
        return false;
    }

    sort(a.begin(), a.end());
    sort(b.begin(), b.end());

    return a == b;
}

int main() {
    cout << boolalpha << isAnagram("listen", "silent");

    return 0;
}