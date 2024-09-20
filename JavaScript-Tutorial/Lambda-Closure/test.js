function outerFunc() {
    const outerVar = "I'm a variable in the outer function"; // clousre maintains this variable in the memory
  
    function innerFunc() {
      console.log(outerVar);
    }
  
    return innerFunc;
}
  
  const myclosure = outerFunc();
  myclosure(); // "I'm a variable in the outer function"