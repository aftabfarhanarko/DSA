#include<iostream>
#include<string>
#include<algorithm>
using namespace std;

    string reverceString(string s){
        int left = 0;
        int right = s.length() - 1;

        while (left < right)
        {
            swap(s[left],s[right]);

            left ++;
            right --;
        }

        return s ;
        
    }

int main() {
    string s = "RETURN";
    cout << reverceString(s) << endl;


    return 0;
}