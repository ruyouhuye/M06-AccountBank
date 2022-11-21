class clientTypeObj{
    //atributosa
    id;
    accountType;//clientType
    description;

    //contructor
    constructor(id,accountType,description){
        this.id=id;
        this.accountType=accountType;
        this.description=description;
    }
    //getters & setters
    get id(){
        return this.id;
    }
    get accountType(){
        return this.accountType;
    }
    get description(){
        return this.description;
    }

    set id(id){
        return this.id=id;
    }
    set accountType(accountType){
        return this.accountType=accountType;
    }
    set description(description){
        return this.description=description;
    }
}