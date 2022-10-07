
playerList = [
    { playerName: "NAME1", Points: 0 },
    { playerName: "NAME2", Points: 0 },
]
totalfliping = 10
matchRound = 1
resultFixPlayer(flipingProcess(totalfliping), playerList, 5)

function flipingProcess(totalrounds) {
    output = []
    coinResult = [0, "head", "tails"]
    for (eachRound = 0; eachRound <= totalrounds - 1; eachRound++) {
        coinFlip = Math.floor((Math.random() * 2) + 1);
        output.push(coinResult[coinFlip])
    }
    return output
}

function resultFixPlayer(flipingResults, players, fliping) {
    eachRoundResults = []
    let eachFlipingResults = []
    for (eachPlayer = 0; eachPlayer <= flipingResults.length - 1; eachPlayer++) {
        if (flipingResults[eachPlayer] == "head") {
            eachFliping = {
                matches: eachPlayer + 1,
                player1Name: players[0].playerName,
                player1: "heads",
                player1Points: 1,
                player2Name: players[1].playerName,
                player2: "tails",
                player2Points: 0
            }

            eachFlipingResults.push(eachFliping)
            players[0].Points += 1
        }


        else if (flipingResults[eachPlayer] == "tails") {
            eachFliping = {

                matches: eachPlayer + 1,
                player1Name: players[0].playerName,
                player1: "tails",
                player1Points: 0,
                player2Name: players[1].playerName,
                player2: "heads",
                player2Points: 1
            }
            eachFlipingResults.push(eachFliping)
            players[1].Points += 1
        }

    }

    nextround = fliping - 1

    player1results = eachFlipingResults.reduce((a, b) => a + b.player1Points, 0)
    player2results = eachFlipingResults.reduce((a, b) => a + b.player2Points, 0)

    roundResults1 = {
        playerName: players[0].playerName,
        playerPoints: player1results
    }
    eachRoundResults.push(roundResults1)

    roundResults2 = {
        playerName: players[1].playerName,
        playerPoints: player2results
    }
    eachRoundResults.push(roundResults2)


    if (nextround > 0) {
        setTimeout(() => {
            console.log(`round ${matchRound} winner announcement`)
            console.table(eachFlipingResults)


            setTimeout(() => {
                console.table(eachRoundResults)
                if (player1results > player2results) {
                    console.log(`playerName:${players[0].playerName}\nplayerPoints :${player1results}\nresult: WINNER`)
                }
                else if (player1results < player2results) {
                    console.log(`playerName:${players[1].playerName}\nplayerPoints :${player2results}\nresult:WINNER`)
                }
                else if (player1results == player2results) {
                    console.log(`playerName:${players[0].playerName} & ${players[1].playerName}\nplayerPoints : ${player2results} & ${player2results}\nresult:both WINNER`)
                }
                matchRound++

                console.table(players)
                console.log("********************************************************************************************************************************************************")
                resultFixPlayer(output, playerList, nextround)
            }, 500)

        }, 1000)

    }

}

// r=1
// a=setInterval(() => {

// emptystrong=''
// function returnValues(eachFlipingResults){
//     for(element of eachFlipingResults){

//         emptystrong += element.matches + "," + element.player1Name + "," + element.player1 + "," + element.player1Points + "," + element.playe2Name + "," +element.player2+ ","+element.element.player2Points +","
//         emptystrong += "\r\n"
//     }
//     console.log(emptystrong);
// }
// let tempBlop = new Blob([emptystrong],{type:'text/csv'})
// let tempURL = window.URL.createObjectURL(tempBlop)
// let activation = document.createElement("a")
// activation.href = tempURL

// activation.download = 'sri.csv'

// activation.click()
// window.URL.revokeObjectURL(tempURL)
// activation.remove()


