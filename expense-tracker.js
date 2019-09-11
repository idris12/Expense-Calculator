const account = {
    name : 'Idris Sumareh',
    expenses: [],
    income:[],
    addExpense: function (description, amount){
        this.expenses.push({
            description:description, 
            amount:amount
        })
     },
    
     addIncome:function (description, amount){
        this.income.push({
            description:description,
            amount:amount
        })
     },

     
     getAccountSummary: function (){
        let expenseTotal= 0
        let incomeTotal= 0
        this.expenses.forEach(function(expense){
             expenseTotal= expenseTotal+ expense.amount
             
        })

        this.income.forEach(function(income){
            incomeTotal= incomeTotal + income.amount
           
        })

        const balance = incomeTotal - expenseTotal
       
        return `${this.name} has a balance of $${balance}. $${incomeTotal} in income. $${expenseTotal} in expense`
    }
    
}

account.addExpense('Rent', 950)
account.addExpense('coffee',2)
account.addIncome('Job', 1000)
account.addIncome('Freelance', 500)
console.log(account.getAccountSummary())