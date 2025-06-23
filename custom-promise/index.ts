console.log("main")

type TResolve = (value: number) => void;
type TReject = (value: string) => void;

type TExecutor = (resolve: TResolve, reject: TReject) => void

class MyPromise {
    private _executor: TExecutor = (resolve, reject) => {
        throw new Error("Executor miising in Promise");
    };
    private _resolve: TResolve = (value) => {
        throw new Error("Unhandled Promise Resolution")
    };
    private _reject: TReject = (reason) => {
        throw new Error("Unhandled Promise Rejection")
    };

    constructor(executor: TExecutor) {
        this._executor = executor;
    }
    
    public then(resolve: TResolve) {
        this._resolve = resolve;
        // this.start();
        return this;
    }
    
    public catch(reject: TReject) {
        this._reject = reject;
        this.start();
        return this;
    }

    private start() {
        this._executor(this._resolve as TResolve, this._reject as TReject);
    }
}

function hello() {
    const flag = true;
    // return new Promise((resolve, reject) => {
    //     if (flag)
    //         resolve(1);
    //     else
    //         reject("flag is false")
    // });
    return new MyPromise((resolve, reject) => {
        console.log("Executor running");
        if (flag)
            resolve(1)
        else
            reject("flag is false")
    })
}

hello()
    .then((value) => console.log("resolved with", value))
    .catch((reason) => console.log("rejected with", reason));