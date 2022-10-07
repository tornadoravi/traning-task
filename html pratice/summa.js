// arra=[100,2000,5678,6477,264.423435,2525]
// // console.log(arra.filter(m=>m==100).length)
// console.log(Math.min(...arra))
// max=arra[0]

// for(i of arra){
//     if(max<i){
//         max=i
//     }
// }
// console.log(max)




function checkParanthesis(str) {
    let brackets = [];
    for (let i = 0; i < str.length; i++) {     
        if (str[i] === "(") {
            brackets.push(str[i]);
        } else if (str[i] === ")") {
            if (brackets[brackets.length - 1] === "(") brackets.pop();
            else brackets.push("#");
        }
    }
    return brackets.length;
}

console.log(checkParanthesis('()))'));                                                                                                           