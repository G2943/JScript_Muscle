function closureFunc(){
    let a = "Hello";
    function insideClosure(){
        a = "inClosure"
        console.log("Func Inside Closure : "+a);
    }
    a = "after Function"
    insideClosure()
}

let x = closureFunc();

console.log(x);
