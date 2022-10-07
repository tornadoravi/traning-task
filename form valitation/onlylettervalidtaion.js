function word(input){
    letter=/^[A-Za-z]+$/
    if(input.match(letter)){
        console.log( "its valid")
    }
    else {
        console.log("not vaild")
    }
}
word("$")