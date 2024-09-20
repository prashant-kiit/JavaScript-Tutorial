const fun1 = () => {
  for (let index = 0; index < 100; index++) {
    console.log("fun1 called");
  }
};

onmessage = (message) => {
  console.log("Message from Parent to Child : " + message.data);
  fun1();
  postMessage("End the child thread");
};
