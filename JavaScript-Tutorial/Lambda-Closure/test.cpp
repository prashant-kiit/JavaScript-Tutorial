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

    // lambda function without capture clause
    auto my_lambda1 = [] () {
    cout << "Hello";
    };

    // lambda function without return
    int num_main = 100;
    auto my_lambda2 = [num_main] () {
    cout << num_main;
    };
    my_lambda2();
    
    // lambda function with return 
    int initial_sum = 0;
    auto add_to_sum = [initial_sum] (int num) {
        return initial_sum + num;
    };
    int final_sum = add_to_sum(78);

    cout<<b<<endl;
}