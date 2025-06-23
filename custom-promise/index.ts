console.log("main")

type TResolve = (value: number) => void;
type TReject = (value: string) => void;

type TExecutor = (resolve: TResolve, reject: TReject) => void

class MyPromise {
    private _executor: TExecutor | null = null;
    private _resolve: TResolve | null = null;
    private _reject: TReject | null = null;

    constructor(executor: TExecutor) {
        this._executor = executor;
    }

    public then(resolve: TResolve) {
        this._resolve = resolve;
        return this;
    }

    public catch(reject: TReject) {
        this._reject = reject;
        this.start();
        return this;
    }

    private start() {
        const start = this._executor as TExecutor;
        start(this._resolve as TResolve, this._reject as TReject);
    }
}

function hello() {
    // const flag = false;
    // return new Promise((resolve, reject) => {
    //     if (flag)
    //         resolve(1);
    //     else
    //         reject("flag is false")
    // });
    return new MyPromise((resolve, reject) => {
        console.log("Executor running");
        // if (flag)
            resolve(1)
        // else
            reject("flag is false")
    })
}

hello()
    .then((value) => console.log("resolved with", value))
    .catch((reason) => console.log("rejected with", reason));