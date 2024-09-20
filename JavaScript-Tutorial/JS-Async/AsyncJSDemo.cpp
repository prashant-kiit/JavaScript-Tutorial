#include <iostream>
#include <unistd.h>
using namespace std;

void fun1() {
    cout<<"I am fun1()"<<endl;
}

void fun2() {
    cout<<"I am fun2()"<<endl;
}

int s1=0;
int swait=0;
void signal(string msg) {
    if(msg == "fun2()") {
        s1=1;
    }
}

void wait() {
    while(1) {
        if (swait==1)
            sleep(5);
    }
}

int main() {
    wait();
    swait=1;
    fun1();
    // while (1) {
    //     if (s1==1){
    //         fun2();
    //         break;
    //     }
    // }
    fun2();
}