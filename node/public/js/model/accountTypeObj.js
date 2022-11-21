class accountTypeObj{
    //atributos
    id;
    dni;
    accountType;

    //contructor
    constructor(id, dni,accountType){
        this.id=id;
        this.dni=dni;
        this.accountType=accountType;
    }
    //getters & setters
    get id(){
        return this.id;
    }
    get dni(){
        return this.dni;
    }
    get accountType(){
        return this.accountType;
    }

    set id(id){
        return this.id=id;
    }
    set dni(dni){
        return this.dni=dni;
    }
    set accountType(accountType){
        return this.accountType=accountType;
    }


}