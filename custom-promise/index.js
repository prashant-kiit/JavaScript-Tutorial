console.log("main");
var MyPromise = /** @class */ (function () {
    function MyPromise(executor) {
        this._executor = null;
        this._resolve = null;
        this._reject = null;
        this._executor = executor;
    }
    MyPromise.prototype.then = function (resolve) {
        this._resolve = resolve;
        return this;
    };
    MyPromise.prototype.catch = function (reject) {
        this._reject = reject;
        this.start();
        return this;
    };
    MyPromise.prototype.start = function () {
        var start = this._executor;
        start(this._resolve, this._reject);
    };
    return MyPromise;
}());
function hello() {
    // const flag = false;
    // return new Promise((resolve, reject) => {
    //     if (flag)
    //         resolve(1);
    //     else
    //         reject("flag is false")
    // });
    return new MyPromise(function (resolve, reject) {
        console.log("Executor running");
        // if (flag)
        resolve(1);
        // else
        reject("flag is false");
    });
}
hello()
    .then(function (value) { return console.log("resolved with", value); })
    .catch(function (reason) { return console.log("rejected with", reason); });
