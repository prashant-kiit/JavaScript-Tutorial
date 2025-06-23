type TPromiseResolve<T> = (value: T) => void;
type TPromiseReject<T> = (reason: T) => void;

type TPromiseExecutor<T, K> = (
    resolve: TPromiseResolve<T>,
    reject: TPromiseReject<K>
) => void;

type TPromiseThenCallback<T> = (value: T | undefined) => void;
type TPromiseCatchCallback<T> = (reason: T | undefined) => void;

enum PromiseState {
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECETD = 'rejected',
}

class MyPromise<T, K> {
    private _state: PromiseState = PromiseState.PENDING;

    private _successCallbackHandlers: TPromiseThenCallback<T>[] = [];
    private _failureCallbackHandlers: TPromiseCatchCallback<K>[] = [];

    private _value: T | undefined = undefined;
    private _reason: K | undefined = undefined;

    constructor(executor: TPromiseExecutor<T, K>) {
        executor(
            this._promiseResolver.bind(this),
            this._promiseRejector.bind(this)
        );
    }

    public then(handlerFn: TPromiseThenCallback<T>) {
        if (this._state === PromiseState.FULFILLED) {
            handlerFn(this._value);
        }
        return this;
    }

    public catch(handlerFn: TPromiseCatchCallback<K>) {
        if (this._state === PromiseState.REJECETD) {
            handlerFn(this._reason);
        }
        return this;
    }

    private _promiseResolver(value: T) {
        this._state = PromiseState.FULFILLED;
        this._value = value;
    }

    private _promiseRejector(reason: K) {
        this._state = PromiseState.REJECETD;
        this._reason = reason;
    }
}

function hello(flag: boolean) {
    return new MyPromise((resolve, reject) => {
        console.log("Executor running");
        if (flag)
            resolve(1)
        else
            reject("flag is false")
    })
}

hello(true)
    .then((value) => console.log("resolved 1 with", value))
    .then((value) => console.log("resolved 2 with", value))
    .then((value) => console.log("resolved 3 with", value))
    .then((value) => console.log("resolved 4 with", value))
    .catch((reason) => console.log("rejected with", reason));