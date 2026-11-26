#include<iostream>
#include<string>
#include<unordered_map>
using namespace std;


int main(){
    string s = "codding";
    unordered_map<char , int> freq;
    for(char ch : s){
        freq[ch]++;
    }

    for(auto item : freq) {
        cout << item.first << " : "<<item.second <<endl;
               
    }

    return 0 ;
}