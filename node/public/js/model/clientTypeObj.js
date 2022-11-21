class clientTypeObj{
    //atributos
    id;
    type;//clientType
    description;

    //contructor
    constructor(id,type,description){
        this.id=id;
        this.accountType=accountType;
        this.description=description;
    }
    //getters & setters
    get id(){
        return this.id;
    }
    get type(){
        return this.type;
    }
    get description(){
        return this.description;
    }

    set id(id){
        return this.id=id;
    }
    set type(type){
        return this.type=type;
    }
    set description(description){
        return this.description=description;
    }
}