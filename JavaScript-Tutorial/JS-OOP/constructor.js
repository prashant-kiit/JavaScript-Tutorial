function Employee(id, naam, attendance) {
        this.id =  id;
        this.naam = naam;
        this.attendance = attendance;
        this.getSalaryHike = () => {
            console.log('Hike of ' + this.naam + ' is ' + this.attendance / 10) ;
        }
        return this;
}

let emp1 = new Employee('001', 'Chinku', 80);
let emp2 = new Employee('002', 'Chintu', 70);
let emp3 = new Employee('003', 'Mintu', 60);
console.log(emp1);
console.log(emp2);
console.log(emp3);
emp1.getSalaryHike();
emp2.getSalaryHike();
emp3.getSalaryHike();
console.log(emp3.constructor);
let emp4 = Employee('004', 'Lintu', 60);
console.log(emp4.constructor);