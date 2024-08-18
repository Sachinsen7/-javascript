const coding = ["js", "ruby", "php", "py", "cpp"]

coding.forEach(function (item) {
    // console.log(item);
})

coding.forEach((item) => {
        // console.log(item);
})

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)

coding.forEach((item, index, array) => {
        // console.log(item, index, array);
})


const myCoding = [
    {
        languageName: "javacsript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName)
    console.log(item.languageFileName)

})