class accountTypeObj{
    //atributos
    dni;
    accountType;

    //contructor
    constructor(dni,accountType){
        this.dni=dni;
        this.accountType=accountType;
    }
    //getters & setters
    get dni(){
        return this.dni;
    }
    get accountType(){
        return this.accountType;
    }
}