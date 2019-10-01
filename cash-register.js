function checkCashRegister(price, cash, cid) {
    let moneyArrInt = [1, 5, 10, 20, 100];
    let moneyArrFloat = [0.01, 0.05, 0.1, 0.25];
    let moneyNameArrInt = ["ONE", "FIVE", "TEN", "TWENTY", "ONE HUNDRED"];
    let moneyNameArrFloat = ["PENNY", "NICKEL", "DIME", "QUARTER"];
    let change = cash - price;
    let changeArr = [];
    let helpArr = [];
    for (let i = moneyArrInt.length - 1; i >= 0; i--) {
        if (change / moneyArrInt[i] >= 1) {
            helpArr.push(moneyNameArrInt[i]);
            helpArr.push(Math.floor(change / moneyArrInt[i]) * moneyArrInt[i]);
            changeArr.push(helpArr);
            helpArr = [];
            change -= Math.floor(change / moneyArrInt[i]) * moneyArrInt[i];
        }
    }
    for (let i = moneyArrFloat.length - 1; i >= 0; i--) {
        if (change / moneyArrFloat[i] >= 1) {
            helpArr.push(moneyNameArrFloat[i]);
            helpArr.push(Math.floor(change / moneyArrFloat[i]) * moneyArrFloat[i]);
            changeArr.push(helpArr);
            helpArr = [];
            change -= Math.floor(change / moneyArrFloat[i]) * moneyArrFloat[i];
            change = change.toFixed(2);
        }
    }
    return {
        status: "OPEN",
        change: changeArr
    };
}