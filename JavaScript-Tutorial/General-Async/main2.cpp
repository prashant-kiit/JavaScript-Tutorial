#include <iostream>
#include <unistd.h>
using namespace std;

void fun1() {
    cout<<"I am fun1()"<<endl;
}

int main() {
    sleep(5);
    fun1();
}