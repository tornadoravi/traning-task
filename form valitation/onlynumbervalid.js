function word(input){
    letter=/^[0-9]+$/
    if(input.match(letter)){
        console.log( "its valid")
    }
    else {
        console.log("not vaild")
    }
}
word("a")