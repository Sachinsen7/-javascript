class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
        
    }

    static creatId(){
        return "123"
    }
}

const Qaran = new User("Qaran")
// console.log(Qaran.creatId());
Qaran.logMe()
console.log(Qaran);


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
   
}

const Boat = new Teacher("Boat", "qaran@boat.com")
// console.log(Boat.creatId())
Boat.logMe()
console.log(Boat);




