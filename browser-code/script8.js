console.log("Main Running");

var master = {
    name: "Master",
    masterf: function() {
        console.log("this", this);
        console.log("this.name", this.name);
        console.log("this.name", this.master);
    }
}

var slave = {
    name: "Slave",
    slavef: () => {
        console.log("this", this);
        console.log("this.name", this.name);
        console.log("this.name", this.slave);
    }
}

function parent() {
    console.log("Parent Running");
    master.masterf();
    slave.slavef();
}

parent();