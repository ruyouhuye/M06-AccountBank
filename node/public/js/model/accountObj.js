class accountObj{
    //atributos
    id;
    accountType;//accountType(accountTypeObj)
    clientType;//clientType(clientTypeObj)
    fullNameClient;
    DNIClient;
    amount;
    entryDate;
    //contructor
    constructor(id, fullNameClient, DNIClient, amount, entryDate){
        this.id = id;
        this.accountType = new accountTypeObj();
        this.clientType = new clientTypeObj();
        this.fullNameClient = fullNameClient;
        this.DNIClient = DNIClient;
        this.amount = amount;
        this.entryDate = entryDate;
    }
    //getters & setters

}