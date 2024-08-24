const User = {
    _email: 'sachin@fb.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }

}

//factory function
// new => constructor function

const tea = Object.create(User)
console.log(tea.email);
