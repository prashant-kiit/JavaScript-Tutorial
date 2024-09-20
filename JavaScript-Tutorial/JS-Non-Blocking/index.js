const fun1 = () => {
  for (let index = 0; index < 100; index++) {
    console.log("fun1 called");
  }
};

function fun2() {
  console.log("fun2 called");
}

async function fun3() {
  for (let index = 0; index < 100; index++) {
    console.log("fun3 called");
  }
}

async function fun4() {
  console.log("fun4 called");
}

const callMe1 = () => {
  fun1();
  fun2();
};

const callMe2 = () => {
  setTimeout(() => {
    fun1();
  }, 1000);

  setTimeout(() => {
    fun2();
  }, 100);
};

const callMe3 = async () => {
  fun3();
  fun4();
};

const callMe4 = async () => {
  const fun1_Thread = new Worker("./child-thread.js");
  fun1_Thread.postMessage("Start the child thread");
  fun1_Thread.onmessage = (message) => {
    console.log("Message from Chlid to Parent : " + message.data);
  };
  fun2();
};

document.getElementById("myButton-1").addEventListener("click", callMe1);
document.getElementById("myButton-2").addEventListener("click", callMe2);
document.getElementById("myButton-3").addEventListener("click", callMe3);
document.getElementById("myButton-4").addEventListener("click", callMe4);
