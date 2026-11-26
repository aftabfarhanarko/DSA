#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int longestSubstring(string s) {
    vector<int> lastSeen(256, -1);

    int left = 0;
    int maxLength = 0;

    for (int right = 0; right < s.length(); right++) {

        unsigned char ch = s[right];

        if (lastSeen[ch] >= left) {
            left = lastSeen[ch] + 1;
        }

        lastSeen[ch] = right;

        maxLength = max(maxLength, right - left + 1);
    }

    return maxLength;
}

int main() {
    cout << longestSubstring("abcabcbb");
}