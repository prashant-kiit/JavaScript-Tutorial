console.log("main")

type TResolve = (value: number) => void;
type TReject = (value: string) => void;

type TExecutor = (resolve: TResolve, reject: TReject) => void

enum PromiseState {
    PENDING = "pending",
    RESOLVED = "resolved",
    REJECTED = "rejected",
    COMPELETED = "completed"
}

export class MyPromise {
    private _executor: TExecutor = (resolve, reject) => {
        throw new Error("Executor missing in Promise");
    };
    private _resolve: TResolve = (value) => {
        throw new Error("Unhandled Promise Resolution")
    };
    private _reject: TReject = (reason) => {
        throw new Error("Unhandled Promise Rejection")
    };
    private _state: PromiseState = PromiseState.PENDING

    constructor(executor: TExecutor) {
        this._executor = executor;
    }
    
    public then(resolve: TResolve) {
        if(this._state === PromiseState.COMPELETED) return this;
        this._state = PromiseState.RESOLVED
        this._resolve = resolve;
        return this;
    }
    
    public catch(reject: TReject) {
        if(this._state === PromiseState.COMPELETED) return this;
        this._state = PromiseState.REJECTED
        this._reject = reject;
        return this;
    }

    public start() {
        this._executor(this._resolve as TResolve, this._reject as TReject);
        this._state = PromiseState.COMPELETED
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
    .then((value) => console.log("resolved with", value))
    .catch((reason) => console.log("rejected with", reason)).start();