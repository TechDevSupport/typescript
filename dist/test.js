"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result is:" + num);
}
function addHash(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addHash(7, 2, (result) => {
    console.log("Resulted" + result);
});
printResult(add(3, 5));
let koolResult;
//koolResult = add;
//let getResults = printResult(koolResult(18,8));
//console.log(getResults(4,5));
const addVal = (...numberss) => {
    return numberss.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const koolAdd = addVal(3, 4, 10, 9.3, 8.2, 10);
console.log("AllData" + koolAdd);
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployee() {
        console.log("Lenght" + this.employees.length);
        console.log(this.employees);
    }
    employeDetail() {
        console.log("Department" + this.name);
    }
}
const departObj = new Department('kool', 'Accounting');
departObj.addEmployee("CSB");
departObj.addEmployee("Lead Developer");
departObj.printEmployee();
departObj.employeDetail();
class ITDepart extends Department {
    constructor(id, department) {
        super(id, 'IT Department');
    }
}
const itDepartObj = new ITDepart('dd', 'SDS');
itDepartObj.employeDetail();
