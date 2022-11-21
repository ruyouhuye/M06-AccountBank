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
    get id(){
        return this.id;
    }

    get fullNameClient(){
        return this.fullNameClient;
    }
    get DNIClient(){
        return this.DNIClient;
    }
    get amount(){
        return this.amount;
    }
    get entryDate(){
        return this.entryDate;
    }

    set id(id){
        return this.id=id;
    }

    set fullNameClient(fullNameClient){
        return this.fullNameClient=fullNameClient;
    }
    set DNIClient(DNIClient){
        return this.DNIClient=DNIClient;
    }
    set amount(amount){
        return this.amount=amount;
    }
    set entryDate(entryDate){
        return this.entryDate=entryDate;
    }
}