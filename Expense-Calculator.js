let myAccount = {
    name: 'Idris Sumareh',
    expense: 0,
    income: 0
}

// Add Expense
let addExpense = function(account, amount) {
    account.expense = account.expense + amount

}

// Adding income
let addIncome = function(account, amount) {
    account.income = account.income + amount

}

// Account summary
let getAccountSummary = function(account){
    let balance = account.income - account.expense
   return `Account for ${account.name} has a balance of $${balance}. $${account.income} in income. $${account.expense} in expense`
}

// Reset account
let resetAccount = function(account) {
    account.expense = 0
    account.income = 0

}

addExpense(myAccount, 100)
addExpense(myAccount,9)
addIncome(myAccount,1000)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))


// let summary = getAccountSummary(myAccount)
// console.log(summary)
// resetAccount(myAccount)
// console.log(myAccount)




