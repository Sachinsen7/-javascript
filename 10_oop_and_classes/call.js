function setUsername(username){
    //Comple DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, passwaord){
    setUsername.call(this, username)

    this.email = email
    this.passwaord = passwaord

    // call => necessary (this, para) 👍

}

const myName = new createUser("sachin", "Sachin@goofle.com", "Sachin1234") 
console.log(myName);
