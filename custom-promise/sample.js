var PromiseState;
(function (PromiseState) {
    PromiseState["PENDING"] = "pending";
    PromiseState["FULFILLED"] = "fulfilled";
    PromiseState["REJECETD"] = "rejected";
})(PromiseState || (PromiseState = {}));
var MyPromise = /** @class */ (function () {
    function MyPromise(executor) {
        this._state = PromiseState.PENDING;
        this._successCallbackHandlers = [];
        this._failureCallbackHandlers = [];
        this._value = undefined;
        this._reason = undefined;
        executor(this._promiseResolver.bind(this), this._promiseRejector.bind(this));
    }
    MyPromise.prototype.then = function (handlerFn) {
        if (this._state === PromiseState.FULFILLED) {
            handlerFn(this._value);
        }
        return this;
    };
    MyPromise.prototype.catch = function (handlerFn) {
        if (this._state === PromiseState.REJECETD) {
            handlerFn(this._reason);
        }
        return this;
    };
    MyPromise.prototype._promiseResolver = function (value) {
        this._state = PromiseState.FULFILLED;
        this._value = value;
    };
    MyPromise.prototype._promiseRejector = function (reason) {
        this._state = PromiseState.REJECETD;
        this._reason = reason;
    };
    return MyPromise;
}());
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
    .then(function (value) { return console.log("resolved 1 with", value); })
    .then(function (value) { return console.log("resolved 2 with", value); })
    .then(function (value) { return console.log("resolved 3 with", value); })
    .then(function (value) { return console.log("resolved 4 with", value); })
    .catch(function (reason) { return console.log("rejected with", reason); });
