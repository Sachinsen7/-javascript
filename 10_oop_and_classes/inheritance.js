class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course added by ${this.username} `);
        
    }
}

const userData = new Teacher("Ishwar", "Ishwar@fb.com", "Ishwar@2003")

// console.log(userData.logMe());
// console.log(userData.addCourse());

userData.addCourse()
userData.logMe()

const moreUserData = new User("Qaran")

moreUserData.logMe()
// moreUserData.addCourse()

// console.log(userData === moreUserData);

console.log(moreUserData instanceof User);

