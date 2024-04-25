const BankAccount={
    intialize (name,intialBalance)
    {
        this.name=name;
        this.intialBalance=intialBalance;
    },
    deposit(amount){
        if (amount>0){
            this.intialBalance+=amount;
            console.log(`Deposited ${amount}, current balance: ${this.intialBalance}`);
        }
        else{
            console.log(`Deposit amount should be greater than 0`);
        }
    } ,  
    withdraw(amount){
        if (amount<this.intialBalance){
            this.intialBalance-=amount;
            console.log(`Withdrew ${amount}, current balance: ${this.intialBalance}`);
        }
        else{
            console.log(`Insufficient balance`);
        }
    },
    display(){
        console.log(`Name: ${this.name}, Balance: ${this.intialBalance}`);
    }
};

const customerAccount=Object.create(BankAccount);

//customerAccount.intialize("John",1000);
//customerAccount.display();
customerAccount.intialize("Soma",120000);
customerAccount.display();
customerAccount.deposit(500);
//customerAccount.display();
customerAccount.withdraw(1000);
customerAccount.withdraw(120000);
customerAccount.deposit (0);
customerAccount.display();