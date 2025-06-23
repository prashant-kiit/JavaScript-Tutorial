console.log("main");
var MyPromise = /** @class */ (function () {
    function MyPromise(executor) {
        this._executor = function (resolve, reject) {
            throw new Error("Executor miising in Promise");
        };
        this._resolve = function (value) {
            throw new Error("Unhandled Promise Resolution");
        };
        this._reject = function (reason) {
            throw new Error("Unhandled Promise Rejection");
        };
        this._executor = executor;
        this.start();
    }
    MyPromise.prototype.then = function (resolve) {
        this._resolve = resolve;
        // this.start();
        return this;
    };
    MyPromise.prototype.catch = function (reject) {
        this._reject = reject;
        return this;
    };
    MyPromise.prototype.start = function () {
        this._executor(this._resolve, this._reject);
    };
    return MyPromise;
}());
function hello() {
    var flag = true;
    // return new Promise((resolve, reject) => {
    //     if (flag)
    //         resolve(1);
    //     else
    //         reject("flag is false")
    // });
    return new MyPromise(function (resolve, reject) {
        console.log("Executor running");
        if (flag)
            resolve(1);
        else
            reject("flag is false");
    });
}
hello()
    .then(function (value) { return console.log("resolved with", value); })
    .catch(function (reason) { return console.log("rejected with", reason); });
