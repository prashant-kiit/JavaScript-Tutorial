function Person(first, last, age, eye) {
    console.log(this);
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");