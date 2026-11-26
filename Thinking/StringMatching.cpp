#include<iostream>
#include<string>
using namespace std;

int main () {
    string text = "HELLO Audit Log Complete";
    string pattrn = "Log";

    size_t position = text.find(pattrn);
     
    if(position != string::npos){
        cout<< "Found at Index :" << position; 
    }else{
        cout << "Not Found" << endl;
    }

    return 0 ;
};