var fib = function(n) {
    if(n === 0 || n === 1) return n;
    return fib(n-1)+fib(n-2);    
}; 

//--

var fib = function(n) {
    if(n === 0 || n === 1) return n;

    let a =0, b=1, res =0;
    for(i=2;i<=n;i++) {
        res = a+b; 
        a=b;
        b= res;
    }
    return res;
};
