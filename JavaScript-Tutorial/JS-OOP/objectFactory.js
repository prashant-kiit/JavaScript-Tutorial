function employee(id, naam, attendance) {
    return {
        id,
        naam,
        attendance,
        getSalaryHike: function() {
            console.log('Hike of ' + naam + ' is ' + attendance / 10) ;
        }
    };
}

let emp1 = employee('001', 'Chinku', 80);
let emp2 = employee('002', 'Chintu', 70);
let emp3 = employee('003', 'Mintu', 60);
console.log(emp1);
console.log(emp2);
console.log(emp3);
emp1.getSalaryHike();
emp2.getSalaryHike();
emp3.getSalaryHike();