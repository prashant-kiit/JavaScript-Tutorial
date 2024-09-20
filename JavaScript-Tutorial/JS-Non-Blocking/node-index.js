function fun1() {
  for (let index = 0; index < 100; index++) {
    console.log("fun1 called");
  }
}

function fun2() {
  console.log("fun2 called");
}

const callMe1 = () => {
  fun1();
  fun2();
};

const callMe2 = () => {
  setTimeout(() => {
    fun1();
  }, 100);

  setTimeout(() => {
    fun2();
  }, 1000);
};

callMe2();
