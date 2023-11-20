#include<iostream>
using namespace std;
inline int fun(int a) {
        cout<<a<<endl;
        return a;
}

int main() {
    cout<<"Hello"<<endl;
    int a = 2;
    int b = fun(a);
    cout<<b<<endl;
}