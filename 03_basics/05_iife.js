// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   // semi cl uses for END

( () => {
    console.log(`DB CONNECTED TWO`)
} )();

( (name) => {
    // Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`)
} )('Sachin')

