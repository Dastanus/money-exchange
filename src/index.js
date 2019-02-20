// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let H = 0;
    let Q = 0;
    let D = 0;
    let N = 0;
    let P = 0;
    let result = {};
    H = Math.floor(currency/50);
    Q = Math.floor((currency-H*50)/25);
    D = Math.floor((currency-H*50-Q*25)/10);
    N = Math.floor((currency-H*50-Q*25-D*10)/5);
    P = (currency-H*50-Q*25-D*10-N*5);
    if(currency>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if(currency==0){
        return result;
    }
    if(currency>0&&currency<=10000){
        if(H>0){
            result.H = H;
        }
        if(Q>0){
            result.Q = Q;
        }
        if(D>0){
            result.D = D;
        }
        if(N>0){
            result.N = N;
        }
        if(P>0){
            result.P = P;
        }
    }
    return result;
}
