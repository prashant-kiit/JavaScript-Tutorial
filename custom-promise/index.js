"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPromise = void 0;
console.log("main");
var PromiseState;
(function (PromiseState) {
    PromiseState["PENDING"] = "pending";
    PromiseState["RESOLVED"] = "resolved";
    PromiseState["REJECTED"] = "rejected";
    PromiseState["COMPELETED"] = "completed";
})(PromiseState || (PromiseState = {}));
var MyPromise = /** @class */ (function () {
    function MyPromise(executor) {
        this._executor = function (resolve, reject) {
            throw new Error("Executor missing in Promise");
        };
        this._resolve = function (value) {
            throw new Error("Unhandled Promise Resolution");
        };
        this._reject = function (reason) {
            throw new Error("Unhandled Promise Rejection");
        };
        this._state = PromiseState.PENDING;
        this._executor = executor;
    }
    MyPromise.prototype.then = function (resolve) {
        if (this._state === PromiseState.COMPELETED)
            return this;
        this._state = PromiseState.RESOLVED;
        this._resolve = resolve;
        return this;
    };
    MyPromise.prototype.catch = function (reject) {
        if (this._state === PromiseState.COMPELETED)
            return this;
        this._state = PromiseState.REJECTED;
        this._reject = reject;
        return this;
    };
    MyPromise.prototype.start = function () {
        this._executor(this._resolve, this._reject);
        this._state = PromiseState.COMPELETED;
    };
    return MyPromise;
}());
exports.MyPromise = MyPromise;
function hello(flag) {
    return new MyPromise(function (resolve, reject) {
        console.log("Executor running");
        if (flag)
            resolve(1);
        else
            reject("flag is false");
    });
}
hello(true)
    .then(function (value) { return console.log("resolved with", value); })
    .catch(function (reason) { return console.log("rejected with", reason); }).start();
