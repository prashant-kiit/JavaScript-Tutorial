function outerFunc() {
    const outerVar = "I'm a variable in the outer function";
  
    function innerFunc() {
      console.log(outerVar);
    }
  
    return innerFunc;
}
  
  const myclosure = outerFunc();
  myclosure(); // "I'm a variable in the outer function"