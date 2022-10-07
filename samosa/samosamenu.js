TypesOfSamosa = [
    {recipes: "Chole Samosa",makingRecipes:{step1:"mix an make dough",step2:"making structure",step3:"prepare to chenna dal ",step4:"fill and fried"}},
    {recipes : "Chocolate Samosa",makingRecipes:{step1:"mix an make dough",step2:"making structure",step3:"prepare to Chocolate ",step4:"fill and fried"}},
    {recipes : "Pasta Samosa",makingRecipes:{step1:"mix an make dough",step2:"making structure",step3:"prepare to Pasta  ",step4:"fill and fried"}},
    {recipes: "Punjabi Samosa",makingRecipes:{step1:"mix an make dough",step2:"making structure",step3:"prepare to masala ",step4:"fill and fried"}},
    {recipes : "Cauliflower Samosa",makingRecipes:{step1:"mix an make dough",step2:"making structure",step3:"prepare to Cauliflower masala ",step4:"fill and fried"}},
    {recipes: "Mushroom Samosa",makingRecipes:{step1:"mix an make dough",step2:"making structure",step3:"prepare to Mushroom masala",step4:"fill and fried"}},
    {recipes : "Potato Samosa",makingRecipes:{step1:"mix an make dough",step2:"making structure",step3:"prepare to Potato masala",step4:"fill and fried"}},
]

sideDish=[
    {dish:"mint",makingDish:{step1:"grinding mint,oil and salt ",step2:"cooking with add oil and Black mustard"}},
    {dish:"tomato sauce",makingDish:{step1:"grinding fresh tomato ",step2:"add additional incretance"}},
    {dish:"mayonnaise",makingDish:{step1:"grinding oil and ginger",step2:"add incretance vinegar and sugar"}},
]
//     TypesOfSamosa.forEach(element => {
//     console.log(element)    
// });

//console.log(TypesOfSamosa[0].recipes)

function seletionOfMenu (menu){
    userInput="Mushroom Samosa"
    for (let choice = 1; choice <= menu.length; choice++) {
        //console.log(menu[choice]== userInput);
        if (userInput==menu[choice-1].recipes) {
            console.log("*****",userInput,"*****");
            setTimeout(()=>{
                console.log("step-1:",menu[choice-1].makingRecipes.step1)},2000)

            setTimeout(()=>{
            console.log("step-2:",menu[choice-1].makingRecipes.step2)},5000)
            setTimeout(()=>{
                console.log("step-3:",menu[choice-1].makingRecipes.step3)},10000)
                setTimeout(()=>{
                    console.log("step-4:",menu[choice-1].makingRecipes.step4)},15000)
        }
    }
}
seletionOfMenu(TypesOfSamosa)
//console.log(sideDish[0].makingDish.step1);

function selectionOfSideDish1(menu2){
userInput2="mint"
for(choice2=1;choice2<=menu2.length;choice2++){
    if(userInput2==menu2[choice2-1].dish){
       console.log("step-1:",menu2[choice2-1].makingDish.step1)
       console.log("step-2:",menu2[choice2-1].makingDish.step2)
    }
}
}
setTimeout(()=>{selectionOfSideDish1(sideDish)},27000)


function selectionOfSideDish2(menu3){
    userInput3="tomato sauce"
    for(choice3=1;choice3<=menu3.length;choice3++){
        if(userInput3==menu3[choice3-1].dish){
          console.log("step-1:",menu3[choice3-1].makingDish.step1)
          console.log("step-2:",menu3[choice3-1].makingDish.step2)
            
        }
    }
    }
setTimeout(()=>{selectionOfSideDish2(sideDish)},32000)

function selectionOfSideDish3(menu4){
    userInput4="mayonnaise"
    for(choice4=1;choice4<=menu4.length;choice4++){
        if(userInput4==menu4[choice4-1].dish){
            console.log("step-1:",menu4[choice4-1].makingDish.step1)
            console.log("step-2:",menu4[choice4-1].makingDish.step2)
                
        }
    }
    }
setTimeout(()=>{selectionOfSideDish3(sideDish)},36000)


