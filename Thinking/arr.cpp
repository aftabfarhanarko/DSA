#include <iostream>
#include <vector>
#include <algorithm>

int main () {
    std::vector<int> arr={343,56,67,78,};
    int max_valu = *std::max_element(arr.begin(), arr.end());
    std::cout << max_valu << "\n";
}
