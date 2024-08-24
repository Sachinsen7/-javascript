class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}sachin`
    }

    set password(value){
        this._password = value
    }
}

const sachin = new user("s@google.com", "123qwe")
console.log(sachin.password);
console.log(sachin);
console.log(sachin.email);

