#include <iostream>
#include <string>

using namespace std;

bool isPalindrome(const string& s) {
    string::size_type left = 0;
    string::size_type right = s.size();

    while (left < right) {
        --right;
        if (left >= right) {
            break;
        }

        if (s[left] != s[right]) {
            return false;
        }

        ++left;
    }

    return true;
}

int main() {
    string text;
    cout << "Enter a string: ";
    getline(cin, text);

    if (isPalindrome(text)) {
        cout << "Palindrome\n";
    } else {
        cout << "Not a palindrome\n";
    }

    return 0;
}