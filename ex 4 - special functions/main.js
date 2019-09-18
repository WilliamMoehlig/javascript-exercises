function identify(a){
    return a;
}

function add(a, b){
    return Number(a) + Number(b);
}

function mul(a, b){
    return Number(a) * Number(b);
}

function identifyf(a){
    return () => {
        return a;
    }
}

function addf(a){
    return function(b){
        return Number(a) + Number(b);
    }
}

function applyf(fn){
    return function(a){
        return function(b){
            return fn(a,b);
        }
    }
}

function curry(fn, a){
    return function(b){
        return fn(a,b);
    }
}

var inc = addf(1);
console.log(inc(5));
console.log(inc(inc(5)))



