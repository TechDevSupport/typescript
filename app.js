"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result is:" + num);
}
function addHash(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addHash(7, 2, function (result) {
    console.log("Resulted" + result);
});
printResult(add(3, 5));
var koolResult;
//koolResult = add;
//let getResults = printResult(koolResult(18,8));
//console.log(getResults(4,5));
