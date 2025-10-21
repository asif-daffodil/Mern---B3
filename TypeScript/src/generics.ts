function ourFunction<S, T>(p1: S, p2: T): [S, T] {
    return [p1, p2];
}

const returnVal = ourFunction<string, number>("Hi", 123);
console.log(returnVal);

function ourFunction2<S>(p1: S): S {
    return p1;
}

const returnVal2 = ourFunction2<string>("Hi");
console.log(returnVal2);

function sum<N> (n1: N, n2: N): number {
    return (n1 as number) + (n2 as number)
}

console.log(sum<number>(2,3));

class myClass<T, S> {
    public student: T | undefined;
    public test: S | undefined;

    public showString(p: S): S | undefined {
        return p;
    }
}

const obj = new myClass<number, string>;
obj.student = 123;
console.log(obj.student);
const returnData = obj.showString("This is a string");
console.log(returnData);